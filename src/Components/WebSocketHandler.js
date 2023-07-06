import { ConnectedPlayer } from "../Entities/ConnectedPlayer";
import { Vector3 } from 'three';
import { getTimeStampMili } from "../Utilities";
import { RocketLauncher } from "../Entities/RocketLauncher";
import { Rifle } from "../Entities/Rifle";
import { GAMESTATE_VARIABLES } from "../DataModels/GameStateVariables";
import { getPlayer, getScene, getWebSocketHandler } from "../Game";

export class WebSocketHandler {
    constructor(url, onWebSocketConnected, menu, items, gameContext) {
        this.gameContext = gameContext;
        this.onWebSocketConnected = onWebSocketConnected;
        const id = window.localStorage.getItem('playerId');
        if (id) this.id = parseInt(id);
        else this.id = getTimeStampMili();
        window.localStorage.setItem('playerId', this.id);
        this.webSocket = new WebSocket(
            url, 
            'protocolOne'
        );
        this.initializeCallBacks();
        this.connectedPlayers = {};
        this.connected = false;
        this.initialized = false;
        // this.createPingDisplay();
        this.ping = 0;
        this.pingAverage = 0;
        this.pings = 0;
        this.timer = 0;
        this.menu = menu;
        this.items = items;
        this.webSocket.onclose = this.hijackClose;
        window.addEventListener("beforeunload", this.hijackClose);
    }

    hijackClose(e) {
        getWebSocketHandler().sendMessage({
            action: 'CLOSING',
            position: getPlayer().object.position,
        })
    }

    sendMessage(message) {
        this.timer = getTimeStampMili();
        if (!message.id) message.id = this.id;
        message.senderId = this.id;
        const JSONString = JSON.stringify({
            data: message
        });
	    this.webSocket.send(JSONString);
	}

	receiveTextMessage(data) {
        const {
            action,
	    	connectionDisplayName,
            senderId,
            position,
            velocity,
            quaternion,
            lookQuaternion,
            animState,
            tag,
            headshot,
            score,
            interactedId,
            cameraDirection,
            scores,
            gameData,
            pointAwardedTo,
            connectedClients,
            specialMessage,
            winner,
            timeTillNextMatch,
            projectileVelocity,
            topScorer,
            itemId,
            itemsDropped
	    } = data;
        
        if (senderId === 'WEBSOCKET_SERVER_GAME_INIT') {
            const itemsHeld = {};
            if (gameData.itemData) {
                Object.keys(gameData.itemData.items).forEach(itemKey => {
                    const item = gameData.itemData.items[itemKey];
                    console.log(item.heldBy);
                    if (item.heldBy === 0) {
                        if (item.type ==='ROCKET') {
                            this.items[item.id] = new RocketLauncher(
                                'Rocket', 
                                item.id, 
                                item.position,
                                this,
                            );
                        }
                        if (item.type ==='RIFLE') {
                            this.items[item.id] = new Rifle(
                                'Rifle', 
                                item.id, 
                                item.position,
                                this,
                            );
                        }
                    } else {
                        if (item.type ==='ROCKET') {
                            this.items[item.id] = new RocketLauncher(
                                'Rocket', 
                                item.id, 
                                item.position,
                                this
                            );
                        }
                        if (item.type ==='RIFLE') {
                            this.items[item.id] = new Rifle(
                                'Rifle', 
                                item.id, 
                                item.position,
                                this
                            );
                        }
                        itemsHeld[item.heldBy] = this.items[item.id];
                    }
                })
            }

            Object.keys(connectedClients).forEach(clientKey => {
                const incomingClient = connectedClients[clientKey];
                const numericClientKey = parseInt(clientKey);
                if (!this.connectedPlayers[numericClientKey] && numericClientKey !== this.id){
                    this.createConnectedPlayerFromInit(incomingClient.clientData, numericClientKey, itemsHeld[numericClientKey]);
                }
                GAMESTATE_VARIABLES.teamScores = gameData.scores;
            })
            this.onWebSocketConnected(this.gameContext, this.playerItem);
        }

        if (senderId === this.id) {
            this.ping = getTimeStampMili() - this.timer;
            this.pings += 1;
            this.pingAverage += this.ping;
            return;
        }

        if(!this.connectedPlayers[senderId] && senderId !== 'WEBSOCKET_SERVER_GAME_INIT' && senderId !== undefined && senderId !== this.id) {
            this.connectedPlayers[senderId] = new ConnectedPlayer(senderId, undefined, this.menu, this.gameContext);
        }

        
        if (action === 'START_NEW_GAME') {
            getMenu().hideGameOver();
            Object.keys(this.connectedPlayers).forEach(key =>this.connectedPlayers[key].score = 0);
            player.score = 0;
            player.respawn();
        }

        if (action === 'GAME_OVER') {
            GAMESTATE_VARIABLES.teamScores = gameData.scores;
            getMenu().displayGameOver(winner, specialMessage, timeTillNextMatch, topScorer);
            getMenu().updateScores(true);
        }


        if (action === 'UPDATE_TEAM_SCORES') {
            GAMESTATE_VARIABLES.teamScores = scores;
            if (pointAwardedTo === this.id) {
                player.score += 1;
            }
            else this.connectedPlayers[pointAwardedTo].score += 1;
            // getMenu().updateScores(true);
        }

        if (action === 'TEAM_SELECT') {
            this.connectedPlayers[senderId].setTeam(data.team);
            this.connectedPlayers[senderId].score = (data.score);
            // getMenu().updateScores(true);
        }

        if (action === 'SHOT') {
            this.connectedPlayers[senderId].shoot(data.directionOfShot);
        }

        if (action === 'HIT') {
            if (interactedId === this.id)
                player.onHit(headshot, this.connectedPlayers[senderId]);
        }

        if (action === 'MOVEMENT') {
            this.connectedPlayers[senderId].setPos(position);
            this.connectedPlayers[senderId].setVelocity(velocity);
            this.connectedPlayers[senderId].setQuaternion(quaternion);
            this.connectedPlayers[senderId].setLookQuaternion(lookQuaternion);
            this.connectedPlayers[senderId].moveRightArm(cameraDirection);
        }

        if (action === 'NAME_CHANGE') {
            this.connectedPlayers[senderId].connectionDisplayName = connectionDisplayName;
        }

        if (action === 'PROJECTILE_DATA') {
            this.items[itemId].fire(projectileVelocity);
        }

        
        if (action === 'ITEM_PICKUP') {
            // this.connectedPlayers[senderId].inventory.add(this.items[itemId]);
            this.items[itemId].heldBy = senderId;
            this.items[itemId].pickedUpByConnectedPlayer(senderId);
        }

        if (action === 'ITEM_DROP') {
            console.log(data);
            itemsDropped.forEach(item => {
                console.log(this.items[item.id]);
                this.items[item.id].drop(this.items[item.id].position);
            })
        }

        if (action === 'CLOSING') {
            const object = this.connectedPlayers[senderId].object;
            this.connectedPlayers[senderId].unLoad();
            getScene().remove(object);
            delete this.connectedPlayers[senderId];
        }

    }

    createConnectedPlayerFromInit(clientData, senderId, item) {

        this.connectedPlayers[senderId] = new ConnectedPlayer(senderId, item, this.menu, this.gameContext);
        if (clientData.inTeamSelect) return;
        this.connectedPlayers[senderId].connectionDisplayName = clientData.connectionDisplayName;
        const vectorPos = new Vector3(clientData.position.x, clientData.position.y, clientData.position.z);
        this.connectedPlayers[senderId].setPos(vectorPos);
        this.connectedPlayers[senderId].score = parseInt(clientData.score);
        this.connectedPlayers[senderId].team = clientData.team;
    }

    initializeCallBacks() {
        this.webSocket.onopen = (message) => {
            this.ready = true;
            this.sendMessage({
                senderId: this.id,
                connectionDisplayName: this.connectionDisplayName,
            })  
        }
    
        this.webSocket.onmessage = (message) => {
            if (!this.connected) {
                this.connected = true;
            }
            const data = JSON.parse(message.data);
            this.receiveTextMessage(data);
        }
    }

    createPingDisplay() {
        this.pingHTML = document.createElement('div');
        this.pingHTML.style.position = 'absolute';
        this.pingHTML.style.width = 10;
        this.pingHTML.style.height = 100;
        this.pingHTML.style.color = 'white';
        this.pingHTML.innerHTML = 'ping';
        this.pingHTML.style.fontSize = 50;
        this.pingHTML.style.top = 0 + 'px';
        this.pingHTML.style.left = window.innerWidth - 200 + 'px';
        this.pingHTML.id = 'pingText';
        document.body.appendChild(this.pingHTML);
    }

    displayPing() {
        this.pingHTML.innerHTML = 'ping: ' + Math.round(this.pingAverage / this.pings);
    }

}