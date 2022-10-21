class WebSocketHandler {
    constructor() {
        this.id = Date.now();
        this.webSocket = new WebSocket(
            'wss://brintonliteraryagency.org/wss/', 
            'protocolOne'
        );
        this.initializeCallBacks();
        this.connectedPlayers = {};
    }

    sendMessage(message) {
        message.id = this.id;
	    this.webSocket.send(
	    	JSON.stringify({
                data: message
            })
	    );
	}

	receiveTextMessage(data) {
        const {
	    	connectionDisplayName,
	    	text,
	    	id,
            position,
            quaternion,
            animState,
            tag
	    } = data;

        if (id === this.id) return;

        if(!this.connectedPlayers[this.id]) {
            this.connectedPlayers[this.id] = new ConnectedPlayer();
        }
        if (position) {
            this.connectedPlayers[this.id].setPos(position);
            this.connectedPlayers[this.id].setQuaternion(quaternion);
            this.connectedPlayers[this.id].setAnimState(animState);
        }
        if (tag) {
            // console.log(tag);
            // const v = new THREE.Vector3(tag.x,tag.y,tag.z);
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
            // console.log(message);
            const data = JSON.parse(message.data);
            if (data.id === this.id) return;
            if (data.text) {
                this.receiveTextMessage(data);
            }
        }
    }
}