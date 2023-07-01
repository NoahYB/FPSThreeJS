import { Item } from '../Components/Item';
import { getScene, getGLTFLoader, getCamera, getPlayer, getLevel, getWebSocketHandler } from '../Game';
import {
    Object3D, 
    Vector3,
    Vector2,
    Color,
    Raycaster,
} from 'three';

import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { AUDIO_MANAGER } from '../AudioManager';
import { showVector } from '../Utilities';

export class Rifle extends Item {

    pickupRadius: number = 10;

    bulletOrigin: Object3D;

    coolDownPart: Object3D;

    coolDown: number = 5;

    lines: Object3D[] = [];

    recoil: boolean = false;

    recoilFrameCount: number = 101;

    constructor(type="Rifle", id, position, webSocketHandler) {

        super(type="Rifle", id, position, webSocketHandler);

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
                rifle.model.position.x += 10;
                rifle.bbox.setFromObject(this.model);

                gltf.scene.traverse(( child ) => {
                    if (child.isMesh) {
                        if (child.name === 'Cylinder001') 
                            rifle.bulletOrigin = child;
                        if (child.name === 'Cube') 
                            rifle.coolDownPart = child;
                    }
                })

                if (this.heldBy && this.addToPlayerWhenModelLoaded) {
                    let armPos = new Vector3();
                    this.heldBy = this.webSocketHandler.connectedPlayers[this.addToPlayerWhenModelLoaded];
                    this.heldBy.rightArm.getWorldPosition(armPos);
                    this.model.position.copy(armPos);
                }
                
            }
        )
    }

    fire() {

        super.fire();

        if (this.coolDownTimer > 0) return;

        AUDIO_MANAGER.shoot();

        this.coolDownTimer = this.coolDown;

        const direction = this.directionalVelocity();

        this.recoilFrameCount = 0;

        getPlayer()
            .gunRecoil( direction
                    .clone()
                    .multiplyScalar(-1) 
                );

        const worldPos = new Vector3();

        this.bulletOrigin.getWorldPosition(worldPos);

        this.raycast();

    }

    spawn() {
        super.spawn();

        this.pickupRadius = 10;
        this.iconElement = document.createElement('img');
        this.iconElement.src = this.iconSrc;
        this.iconElement.classList.add('icon');

        this.createRifle();
    }

    update() {
        super.update();

        if (this.coolDownTimer < this.coolDown - 1 
            && this.coolDownTimer > this.coolDown - 1.1
        ) 
            AUDIO_MANAGER.charge();

        if (this.coolDownTimer > 0 && this.model) {
            this.coolDownPart.material.color = new Color('Blue').multiplyScalar((this.coolDown - this.coolDownTimer) / this.coolDown);
        } else if (this.model) {
            this.coolDownPart.material.color = new Color('Blue');
        }

        this.lines = this.lines.filter((line) => {
            line.userData.time += 1;
            if (line.userData.time > 5) {
                getScene().remove(line);
                return false;
            }
            return true;
        });


    }

    recoilAnim(dir) {
        if (this.recoilFrameCount < 10){
            dir.y += this.recoilFrameCount * .01;
        }
        else {
            dir.y += (10 * .01) + ((this.recoilFrameCount % 10) * -.01);
        }
        this.recoilFrameCount += 1;
        return dir;
    }

    override allignItem(): void {

        let dir = new Vector3(0,0,0);

        getCamera().getWorldDirection(dir);

        if (this.recoilFrameCount < 20) {
            dir = this.recoilAnim(dir);
        }

        this.model.lookAt(dir.clone().multiplyScalar(10000000000));

        this.model.rotateY((Math.PI / 180) * 180);

        this.model.position.add(dir.multiplyScalar(4));

    }

    raycast() {
        const raycaster = new Raycaster();

        raycaster.setFromCamera( new Vector2(), getCamera() );  

        const enemyPlayers = getWebSocketHandler().connectedPlayers;

        const players = 
            Object.keys(
                enemyPlayers
            ).map(key => {
                return enemyPlayers[key].object;
            })
        const intersects = raycaster.intersectObjects(
            players,
            true
        )

        const hitData = {};

        if (intersects.length > 0) this.hitmarker();

        for ( let i = 0; i < intersects.length; i ++ ) {
            if (intersects[i].object.name === 'Cube001') {
                hitData[intersects[i].object.c.id] = {
                    id: intersects[i].object.c.id,
                    headShot: true,
                    object: intersects[i].object,
                };
            } else if (!hitData[intersects[i].object.c.id]) {
                hitData[intersects[i].object.c.id] = {
                    id: intersects[i].object.c.id,
                    headShot: false,
                    object: intersects[i].object,
                };
            }
        }

        this.sendHitData(hitData);
    }

    sendHitData(hitData: {}) {
        Object.keys(hitData).forEach(key => {
            const data = hitData[key];
            getWebSocketHandler().sendMessage({
                action: 'HIT',
                headshot: data.headShot,
                interactedId: data.id,
                score: getPlayer().score,
                team: 1,
            })
        })
    }
}