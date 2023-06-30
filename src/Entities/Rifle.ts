import { Item } from '../Components/Item';
import { getScene, getGLTFLoader } from '../Game';
import {
    CylinderGeometry, 
    Mesh,
    MeshBasicMaterial, 
} from 'three';

export class Rifle extends Item {

    gunMaterial: MeshBasicMaterial;

    pickupRadius: number = 10;

    constructor(type="Rifle", id, position, webSocketHandler) {

        super(type="Rifle", id, position, webSocketHandler);

        this.gunMaterial = new MeshBasicMaterial({ color: 'salmon' });
    }

    createRifle() {
        const rifle = this;
        getGLTFLoader().load(
            // resource URL
            '../Models/Rifle.gltf',
            // called when resource is loaded
            ( gltf )  => {
                getScene().add(gltf.scene);
                rifle.model = gltf.scene;
                rifle.model.position.copy(this.position);
                rifle.model.position.y += 5;
                rifle.bbox.setFromObject(this.model);

                gltf.scene.traverse(( child ) => {
                    if (child.isMesh) {
                        //child.material = rifle.gunMaterial
                    }
                })
            }
        )
    }

    spawn() {
        super.spawn();

        this.pickupRadius = 10;
        this.iconElement = document.createElement('img');
        this.iconElement.src = this.iconSrc;
        this.iconElement.classList.add('icon');

        this.createRifle();
    }
}