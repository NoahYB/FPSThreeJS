class Item {
    constructor(type) {
        this.type = type;
        this.parent = undefined;
        this.model = undefined;
        this.iconSrc = `Icons/${type}.png`
        this.pickedUp = false;
    }
    
    // Update the weapon pickup object.
    update() {
        if (this.pickedUp) {
            let armPos = new THREE.Vector3();
            player.rightArm.getWorldPosition(armPos);
            this.model.position.copy(armPos);
            this.allignItem();
        };
        // Check if the player is within range of the weapon pickup.
        if (this.intersectsPlayer()) {
            this.model.rotation.y = 0;
            document.getElementById("equipedItem").append(
                this.iconElement
            )
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

        let dir = new THREE.Vector3(0,0,0);

        camera.getWorldDirection(dir);

        return dir;

    }

    intersectsPlayer() {
        return player.object.position.distanceTo(this.model.position) < this.pickupRadius;
    }

    allignItem() {

        let dir = new THREE.Vector3(0,0,0);

        camera.getWorldDirection(dir);

        this.model.lookAt(dir.multiplyScalar(10000000000));

        this.model.rotateX(Math.PI / 180 * 90);
    }
}