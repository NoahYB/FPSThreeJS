import { Item } from '../Components/Item';
export class Rifle extends Item {
    constructor(type="Rifle", id, position, webSocketHandler) {
        super(type="Rocket", id, position, webSocketHandler);
    }
}