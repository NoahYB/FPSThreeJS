import { Vector3, Box3, Object3D } from 'three';
import { getPlayer, getCamera } from '../Game';
import { WebSocketHandler } from './WebSocketHandler';
import { ConnectedPlayer } from '../Entities/ConnectedPlayer';
import { Player } from '../Entities/Player';
//@ts-check
export class Item {

    webSocketHandler: WebSocketHandler;
    type: 'Rifle'|'Rocket'|'Pistol';
    model: Object3D;
    iconSrc: string;
    pickedUp: boolean;
    id: number;
    position: Vector3;
    pickedup: boolean;
    heldBy: Player | ConnectedPlayer;
    pickupRadius: number;
    bbox: Box3 = new Box3();
    iconElement: HTMLImageElement;

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

    }
    
    pickedUpByConnectedPlayer(id) {
        this.pickedup = true;
        let armPos = new Vector3();
        this.heldBy = this.webSocketHandler.connectedPlayers[id];
        this.heldBy.rightArm.getWorldPosition(armPos);
        this.model.position.copy(armPos);
    }

    // Update the weapon pickup object.
    update() {
        if (!this.model) return;
        if (this.pickedUp) {
            let armPos = new Vector3();
            this.heldBy.rightArm.getWorldPosition(armPos);
            this.model.position.copy(armPos);
            this.allignItem();
            return;
        };

        const player = getPlayer();
        // Check if the player is within range of the weapon pickup.
        if (this.intersectsPlayer(player)) {
            this.model.rotation.y = Math.PI / 2;
            document.getElementById("equipedItem").append(
                this.iconElement
            )
            this.webSocketHandler.sendMessage({
                action: "ITEM_PICKUP",
                itemId: this.id,
            })
            this.heldBy = player;
            player.inventory.add(this);
        }
        else {
            this.model.rotation.y += .01;
        }
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

    allignItem() {

        let dir = new Vector3(0,0,0);

        getCamera().getWorldDirection(dir);

        this.model.lookAt(dir.clone().multiplyScalar(10000000000));

        this.model.position.add(dir.multiplyScalar(-1))

        this.model.rotateZ(Math.PI / 180 * 180);

        this.model.position.y -= 1;

        //this.model.rotateX(Math.PI / 180);
    }
}