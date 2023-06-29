// @ts-check
import { OBB } from 'three/examples/jsm/math/OBB';
import { Inventory } from '../Components/Inventory'
import { Collisions } from '../Components/Collisions'
import { PointerLockControls } from '../Components/PointerLockControlsCustom';
import { HUD } from './HUD';
import { CameraController } from './CameraController';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import {Object3D, Vector3, Box3, Renderer, MeshToonMaterial, Camera} from 'three';
import { WebSocketHandler } from '../Components/WebSocketHandler';
import { Level } from './Level';
import { Menu } from './Menu';
import { CharacterController } from '../Components/CharacterController';
import { getCamera, getFBXLoader, getPlayer, getRenderer, getScene, getlevel, getMenu } from '../Game';

interface KeyDictionary {
    [index: string]: boolean;
}

export class Player {
    cameraController: CameraController;
    spawnLocations: Vector3[];

    totalTime: number = 0;
    score: number = 0;

    grounded: boolean = false;
    sprinting: boolean = false;
    
    movementSpeed : number = TUNABLE_VARIABLES.movementSpeed;
    jumpHeight : number = TUNABLE_VARIABLES.jumpHeight;
    health : number = TUNABLE_VARIABLES.health;

    killBoundary: number = -30;

    object: Object3D;

    respawning: boolean = false;

    respawnTimer: number = 0;
    
    inventory: Inventory = new Inventory()

    horizontalCollision: boolean = false;
    team: string;

    collisionObject: Object3D

    rightArm: Object3D;

    id: number;
    
    hud: HUD = new HUD();

    controls: PointerLockControls;

    playerKeyMap: KeyDictionary = {};

    characterController: any;

    webSocketHandler: WebSocketHandler;

    level: Level;

    menu: Menu;

    constructor(
        webSocketHandler: WebSocketHandler,
    ) {

        this.webSocketHandler = webSocketHandler;
        
        this.level = getlevel();

        this.spawnLocations = this.level.spawnLocations;

        this.loadModel(); 
    }

    onLoadFinish() {
        this.characterController = new CharacterController();
        this.onPlayerLoad();
    }

    checkY() {
        if(
            this.object.position.y < this.killBoundary && 
            !this.respawning
        ) {
            this.respawn();
        }
    }

    respawn() {
        this.respawning = false;
        this.respawnTimer = 0;
        if (this.spawnLocations.length > 0) {
            if (this.team === 'team1') {
                this.object.position.copy(this.spawnLocations[0]);
            } else {
                this.object.position.copy(this.spawnLocations[1]);
            }
            this.object.position.y += 11;
        } else 
            this.object.position.set(20,20,0);

        TUNABLE_VARIABLES.thirdPerson = false;
        this.health = TUNABLE_VARIABLES.health;
        this.hud.updateHealthBar(this.health);
        if (this.hud) this.hud.onRespawn();
    }

    loadModel() {
        const materialToon = new MeshToonMaterial({
            color: 'red',
        });
        const invisible = new MeshToonMaterial({
            visible: false,
        });
        getFBXLoader().load(
            'Models/PossibleCharacter2.fbx',
            (object) => {
                getCamera().add(object);
                this.object = object;
                object.scale.setScalar(.007);
                object.traverse(( child ) => {
                    if ( child.isMesh ) child.material = invisible;
                    if (child.name === 'RightShoulder') this.rightArm = child;
                    if (child.name === 'CollisionBox') {
                        child.material = invisible;
                        this.collisionObject = child;
                    }
                }
                );
                this.onLoadFinish();
                getScene().add(object);
            }, e => 1 + 1, e => console.log(e),
        )
    }

    hitMarker() {
        const h = document.getElementById('hitmarker');
        h.classList.remove('playhitmarker');
        void h.offsetWidth;
        h.classList.add('playhitmarker');
    }

    death(whoKilledPlayer) {
        if (this.respawning) return;
        this.object.position.set(0,-10000,0);
        this.webSocketHandler.sendMessage({
            pointAwardedTo : whoKilledPlayer.id,
            team : whoKilledPlayer.team,
            action: 'CONFIRM_KILL'
        })
        TUNABLE_VARIABLES.thirdPerson = true;
        this.startRespawn();
        this.hud.onDeath();
    }

    startRespawn() {
        this.respawnTimer = 0;
        this.respawning = true;
    }

    onHit(headshot, enemy) {
        if (headshot) this.health -= TUNABLE_VARIABLES.headShotDamage;
        else this.health -= TUNABLE_VARIABLES.shotDamage;
        this.hud.updateHealthBar(this.health);
        if (this.health <= 0) this.death(enemy);
    }

    explosionDamage(pos, enemy, explosionRadius) {
        const d = this.object.position.distanceTo(pos) 
            - (this.object.position.y - pos.y);
        if (d > explosionRadius) return;
        const damageFactor = 1 / (d *  d)
        if (enemy.id === this.id) {
            this.health -= 10;
        }
        else this.health -= damageFactor + 20;
        this.hud.updateHealthBar(this.health);
        if (this.health <= 0) this.death(enemy);
    }

    moveRightArm() {
        if (!this.rightArm) return;

        let dir = new Vector3(0,0,0);

        getCamera().getWorldDirection(dir);

        this.rightArm.lookAt(dir.multiplyScalar(10000000000));

        this.rightArm.rotateX(-Math.PI / 180 * 90);
    }

    update(deltaTime: number) {
        this.totalTime += deltaTime;

        if (!this.object) return;

        if (this.respawning) {
            this.respawnTimer += deltaTime;
            this.hud.respawnTimer(TUNABLE_VARIABLES.respawnTime - this.respawnTimer);
        }

        if (this.respawnTimer > TUNABLE_VARIABLES.respawnTime) {
            this.respawn();
        }

        this.characterController.move();

        this.moveRightArm();

        this.checkY();
    }

    onPlayerLoad() {
        const renderer = getRenderer();

        const menu = getMenu();

        console.log(renderer);

        renderer.domElement.addEventListener( 'lock', function () {
            if (menu.opened) {
                this.player.controls.unlock();
            }
            menu.hide();
        } );
        
        renderer.domElement.addEventListener( 'unlock', function () {
            menu.show();
            Object.keys(this.keys).forEach(key => {
                this.playerKeyMap[key] = false;
            })
        } );

    }
}

document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);
document.addEventListener('mousedown', mousedown);

function keydown(e){
    const player = getPlayer();
    player.playerKeyMap[e.key.toLowerCase()] = true;
    player.characterController.input();
}

function keyup(e){
    const player = getPlayer();
    player.playerKeyMap[e.key.toLowerCase()] = false;
    player.characterController.input();
}

function mousedown(e) {
    const player = getPlayer();
    if (player.inventory.equippedItem){
        player.inventory.equippedItem.fire();
    }
}
