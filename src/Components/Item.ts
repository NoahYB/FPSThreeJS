import { Vector3, Box3, Object3D } from 'three';
import { getPlayer, getCamera } from '../Game';
import { WebSocketHandler } from './WebSocketHandler';
import { ConnectedPlayer } from '../Entities/ConnectedPlayer';
import { Player } from '../Entities/Player';
import { AUDIO_MANAGER } from '../AudioManager';
//@ts-check
export class Item {

    webSocketHandler: WebSocketHandler;
    type: 'Rifle'|'Rocket'|'Pistol';
    model: Object3D;
    iconSrc: string;
    pickedUp: boolean;
    id: number;
    position: Vector3;
    heldBy: Player | ConnectedPlayer;
    pickupRadius: number;
    bbox: Box3 = new Box3();
    iconElement: HTMLImageElement;
    coolDownTimer = 0;
    addToPlayerWhenModelLoaded: string;
    freezeIntersect: boolean = false;
    constructor(
        type: 'Rifle'|'Rocket'|'Pistol', 
        id: number, 
        position: Vector3, 
        webSocketHandler: WebSocketHandler
    ) {

        this.webSocketHandler = webSocketHandler;
        this.type = type;
        this.iconSrc = `../Icons/${type}.png`
        this.pickedUp = false;
        this.id = id;
        this.position = position;
        this.bbox;
        this.coolDownTimer = 0;

    }
    
    pickedUpByConnectedPlayer(id) {
        this.pickedUp = true;
        let armPos = new Vector3();
        this.heldBy = this.webSocketHandler.connectedPlayers[id];
        this.heldBy.rightArm.getWorldPosition(armPos);
        if (!this.model) this.addToPlayerWhenModelLoaded = id;
        else this.model.position.copy(armPos);
    }

    // Update the weapon pickup object.
    update() {
        if (!this.model) return;
        this.coolDownTimer -= .05;
        
        if (this.pickedUp) {
            let armPos = new Vector3();
            this.heldBy.rightArm.getWorldPosition(armPos);
            this.model.position.copy(armPos);
            this.allignItem();
            return;
        };

        const player = getPlayer();
        // Check if the player is within range of the weapon pickup.
        if (this.intersectsPlayer(player)
            && !this.freezeIntersect) {
            this.playerPickUp();
        }
        else {
            this.model.rotation.y += .01;
        }
    }

    playerPickUp() {
        const player = getPlayer();
        if (player.inventory.hasType(this.type)) return;
        document.getElementById("equipedItem").append(
            this.iconElement
        )
        this.webSocketHandler.sendMessage({
            action: "ITEM_PICKUP",
            itemId: this.id,
        })
        this.heldBy = player;
        this.pickedUp = true;
        player.inventory.add(this);
    }

    drop(position: Vector3) {
        if (this.heldBy.id === getPlayer().id) this.freezeIntersect = true;
        this.heldBy = undefined;
        this.pickedUp = false;
        this.model.position.copy(position);
    }

    fire() {

    }

    spawn() {

    }

    spawnRocket() {

    }

    directionalVelocity() {

        this.model.updateMatrixWorld(true);

        let dir = new Vector3(0,0,0);

        getCamera().getWorldDirection(dir);

        return dir;

    }

    intersectsPlayer(player) {
        if (!player) return false;
        return player.object.position.distanceTo(this.model.position) < this.pickupRadius;
    }

    hitmarker() {
        const h = document.getElementById('hitmarker');
        h.classList.remove('playhitmarker');
        void h.offsetWidth;
        h.classList.add('playhitmarker');
        AUDIO_MANAGER.hit();
    }

    allignItem() {
        let dir = new Vector3(0,0,0);

        getCamera().getWorldDirection(dir);

        this.model.lookAt(dir.clone().multiplyScalar(10000000000));

        this.model.position.add(dir.multiplyScalar(-2))

        this.model.rotateZ(Math.PI / 180 * 180);

        this.model.position.y -= 1;

        //this.model.rotateX(Math.PI / 180);
    }
}