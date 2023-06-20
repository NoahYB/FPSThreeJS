class Inventory {
    constructor(player) {
        this.player = player;
        this.inventory = [];
        this.pointer = 0;
    }

    add(item) {
        if (this.inventory.length === 0) {
            item.pickedUp = true;
            // let armPos = new THREE.Vector3();
            // player.rightArm.getWorldPosition(armPos);
            // item.model.position.copy(armPos);
            // this.allignItem(item);
            //player.rightArm.add(item.model);
            this.inventory.push(item);
            this.equippedItem = item;
            
            console.log(this.inventory);
        }
    }

    next() {
        this.pointer++;
        scene.remove(this.inventory[this.pointer].model);
        if (this.pointer === this.inventory.length) this.pointer = 0;
        player.gunBarrel = this.inventory[this.pointer].model;
        player.rightArm.add(player.gunBarrel);
    }

}