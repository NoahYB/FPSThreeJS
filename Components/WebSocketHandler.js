class WebSocketHandler {
    constructor(url) {
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
    }

    sendMessage(message) {
        this.timer = getTimeStampMili();
        message.id = this.id;
        message.connectionDisplayName = TUNABLE_VARIABLES.playerName;
	    this.webSocket.send(
	    	JSON.stringify({
                data: message
            })
	    );
	}

	receiveTextMessage(data) {
        const {
            action,
	    	connectionDisplayName,
	    	id,
            position,
            velocity,
            quaternion,
            lookQuaternion,
            animState,
            tag,
            headshot,
            score,
            interactedId,
	    } = data;

        if (id === this.id) {
            if (tag) return;
            this.ping = getTimeStampMili() - this.timer;
            this.pings += 1;
            this.pingAverage += this.ping;
            // this.displayPing();
            return;
        }

        if(!this.connectedPlayers[id]) {
            this.connectedPlayers[id] = new ConnectedPlayer(id);
        }

        if (action === 'selectTeam') {
            menu.updateScores(true);
            console.log('new team selected');
            this.connectedPlayers[id].setTeam(data.teamSelection);
            this.connectedPlayers[id].team;
        }

        if (position) {
            this.connectedPlayers[id].setPos(position);
            this.connectedPlayers[id].setVelocity(velocity);
            this.connectedPlayers[id].setQuaternion(quaternion);
            this.connectedPlayers[id].setLookQuaternion(lookQuaternion);
            this.connectedPlayers[id].setAnimState(animState);
        }

        if (score) {
            this.connectedPlayers[id].score = score;
            menu.updateScores();
        }

        if (connectionDisplayName) {
            this.connectedPlayers[id].connectionDisplayName = connectionDisplayName;
        }

        if (tag) {
            if (headshot && interactedId === this.id)
                player.death();
        }
    }

    initializeCallBacks() {
        this.webSocket.onopen = (message) => {
            this.ready = true;
            this.sendMessage({
                id: this.id,
                connectionDisplayName: this.connectionDisplayName,
            })  
        }
    
        this.webSocket.onmessage = (message) => {
            if (!this.connected) {
                onWebSocketConnected();
                this.connected = true;
                return;
            }
            const data = JSON.parse(message.data);
            if (data.text) {
                this.receiveTextMessage(data);
            }
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