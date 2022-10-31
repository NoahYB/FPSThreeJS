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
        this.createPingDisplay();
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
	    	connectionDisplayName,
	    	id,
            position,
            quaternion,
            lookQuaternion,
            animState,
            tag,
            score,
	    } = data;
        
        if (id === this.id) {
            if (tag) return;
            this.ping = getTimeStampMili() - this.timer;
            this.pings += 1;
            this.pingAverage += this.ping;
            this.displayPing();
            return;
        }

        if(!this.connectedPlayers[id]) {
            this.connectedPlayers[id] = new ConnectedPlayer();
        }
        if (position) {
            this.connectedPlayers[id].setPos(position);
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
            player.push(v);
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
            if (message.data === 'something') {
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
        this.pingHTML.style.width = 1000;
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