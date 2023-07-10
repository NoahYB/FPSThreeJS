import { getPlayer, getScene, getWebSocketHandler } from "../Game";
export class Inventory {
    constructor(player, isUser) {
        this.player = player;
        this.heldItems = [];
        this.pointer = 0;
        if (isUser)
            document.addEventListener("wheel", this.scroll);
    }

    onDeath() {
        const itemArray = this.heldItems.map(item => {
            return {
                id: item.id,
            }
        })
        getWebSocketHandler().sendMessage(
            {
                action: "ITEM_DROP",
                itemsDropped: itemArray,
                position: this.player.object.position,
            }       
        )
        this.heldItems = this.heldItems.filter(
            item => {
                item.drop(item.model.position);
                return false;
            }
        )
        this.equippedItem = undefined;
        const webSocketHandler = getWebSocketHandler();
    }
    
    hasType(type) {
        return this.heldItems.reduce((prev, curr) => {
            if (curr.type === type) return true;
            return prev
        }, false)
    }

    add(item) {
        item.pickedUp = true;
        if (this.heldItems.length === 0) 
            this.equippedItem = item;
        else {
            getScene().remove(item.model);
        }
        this.heldItems.push(item);
        this.equippedItem.iconElement.style.borderStyle = 'dashed';
    }

    next() {
        const scene = getScene();
        scene.remove(this.heldItems[this.pointer].model);
        this.equippedItem.iconElement.style.borderStyle = 'none';
        this.pointer++;
        if (this.pointer === this.heldItems.length) this.pointer = 0;
        scene.add(this.heldItems[this.pointer].model);
        this.equippedItem = this.heldItems[this.pointer];
        this.equippedItem.iconElement.style.borderStyle = 'dashed';
    }

    scroll(e) {
        const player = getPlayer();

        if (player.inventory.heldItems.length <= 1) return;
        player.inventory.next();

    }

}