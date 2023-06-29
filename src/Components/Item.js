import { Vector3 } from 'three';
//@ts-check
export class Item {
    constructor(type, id, position, webSocketHandler, player, camera, scene) {
        this.scene = scene;
        this.player = player;
        this.webSocketHandler = webSocketHandler;
        this.type = type;
        this.parent = undefined;
        this.model = undefined;
        this.iconSrc = `Icons/${type}.png`
        this.pickedUp = false;
        this.id = id;
        this.position = position;
        this.camera = camera;
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
        // Check if the player is within range of the weapon pickup.
        if (this.intersectsPlayer()) {
            this.model.rotation.y = 0;
            document.getElementById("equipedItem").append(
                this.iconElement
            )
            this.webSocketHandler.sendMessage({
                action: "ITEM_PICKUP",
                itemId: this.id,
            })
            this.heldBy = this.player;
            this.player.inventory.add(this);
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

        this.camera.getWorldDirection(dir);

        return dir;

    }

    intersectsPlayer() {
        return this.player.object.position.distanceTo(this.model.position) < this.pickupRadius;
    }

    allignItem() {

        let dir = new Vector3(0,0,0);

        this.camera.getWorldDirection(dir);

        this.model.lookAt(dir.multiplyScalar(10000000000));

        this.model.rotateX(Math.PI / 180 * 90);
    }
}