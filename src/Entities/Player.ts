// @ts-check
import { OBB } from 'three/examples/jsm/math/OBB';
import { Inventory } from '../Components/Inventory'
import { Collisions } from '../Components/Collisions'
import { PointerLockControls } from '../Components/PointerLockControlsCustom';
import { HUD } from './HUD';
import { CameraController } from './CameraController';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import {Scene, Object3D, Vector3, Box3, Renderer, MeshToonMaterial, Camera} from 'three';
import { showRapierCollider } from '../Utilities';
import { WebSocketHandler } from '../Components/WebSocketHandler';
import { Level } from './Level';
import { Menu } from './Menu';

interface KeyDictionary {
    [index: string]: boolean;
}

interface CollisionData {
    point: Vector3;
    mesh: Object3D;
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

    velocity: Vector3;

    respawning: boolean = false;
    respawnTimer: number = 0;
    
    collisions: Collisions = new Collisions();
    inventory: Inventory = new Inventory()

    horizontalCollision: boolean = false;
    team: string;

    // Collision information
    legL: Object3D;
    legR: Object3D;
    body: Object3D;;
    boxLegL: Box3;
    boxLegR: Box3;
    collisionObject: Object3D
    collisionBox: Box3;

    rightArm: Object3D;

    id: number;
    jumping: boolean;
    walking: boolean;
    
    hud: HUD = new HUD();

    controls: PointerLockControls;

    playerKeyMap: KeyDictionary = {};

    fbxLoader: FBXLoader;

    RAPIER: any;

    rigidBody: any;

    characterCollider: any;

    characterController: any;

    renderer: Renderer;

    webSocketHandler: WebSocketHandler;

    level: Level;

    physicsWorld: any;

    menu: Menu;

    scene: Scene

    keys: {};

    teamSelected: boolean;

    camera: Camera;
    constructor(
        RAPIER: any,
        renderer: Renderer,
        webSocketHandler: WebSocketHandler,
        level: Level,
        physicsWorld: any,
        scene: Scene,
        keys: {},
        teamSelected: boolean,
        fbxLoader: FBXLoader,
        camera: Camera
    ) {
        this.camera = camera;

        console.log(teamSelected);
        this.teamSelected = teamSelected;

        this.keys = keys;

        this.scene = scene;

        this.renderer = renderer;
        
        this.webSocketHandler = webSocketHandler;
        
        this.level = level;

        this.physicsWorld = physicsWorld;

        this.RAPIER = RAPIER;

        this.fbxLoader = this.fbxLoader;

        this.spawnLocations = this.level.spawnLocations;

        this.fbxLoader = fbxLoader;
        
        this.loadModel(); 

        this.velocity = new Vector3(0,0,0);

        document.addEventListener('mousedown',this.mousedown);
    }

    onLoadFinish() {
        // this.updateBBOX();
        this.addBBOX();
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
        //this.cameraController.setFollowedObject(this);
        TUNABLE_VARIABLES.thirdPerson = false;
        this.health = TUNABLE_VARIABLES.health;
        this.hud.updateHealthBar(this.health);
        if (this.hud) this.hud.onRespawn();
    }

    addBBOX() {
        this.legL = this.object.getObjectByName("LegL");
        this.legR = this.object.getObjectByName("LegR");
        this.body = this.object.getObjectByName("Body");

        this.legL.geometry.computeBoundingBox();
        this.legR.geometry.computeBoundingBox();
        this.collisionObject.geometry.computeBoundingBox();

        this.boxLegL = new OBB().fromBox3(
            this.legL.geometry.boundingBox
        );
        this.boxLegR = new OBB().fromBox3(
            this.legR.geometry.boundingBox
        );
        this.collisionBox = new OBB().fromBox3(
            this.collisionObject.geometry.boundingBox
        );

        let colliderDesc = this.RAPIER.ColliderDesc.cuboid(this.collisionBox.halfSize.x, this.collisionBox.halfSize.y, this.collisionBox.halfSize.z);

        this.characterCollider = this.physicsWorld.createCollider(colliderDesc);

        showRapierCollider(this.collisionBox.halfSize, this.collisionObject.position, this.collisionObject.rotation, this.scene);
        // The gap the controller will leave between the character and its environment.
        let offset = 0.2;
        // Create the controller.
        this.characterController = this.physicsWorld.createCharacterController(offset);
        this.characterController.enableAutostep(3.0, 0.0, true);
    }

    updateBBOX() {
        this.boxLegL.applyMatrix4(this.legL.matrixWorld);
        this.boxLegR.applyMatrix4(this.legR.matrixWorld);
        this.collisionBox.applyMatrix4(this.collisionObject.matrixWorld);
    }

    loadModel() {
        const materialToon = new MeshToonMaterial({
            color: 'red',
        });
        const invisible = new MeshToonMaterial({
            visible: false,
        });
        this.fbxLoader.load(
            'Models/PossibleCharacter2.fbx',
            (object) => {
                this.camera.add(object);
                this.object = object;

                object.scale.setScalar(.007);
                object.c = this;

                object.traverse(( child ) => {
                    child.c = this;
                    if ( child.isMesh ) {
                        child.material = materialToon;
                        child.castShadow = true;
                    }
                    if (child.name === 'RightShoulder') {
                        this.rightArm = child;
                    }
                    if (child.name === 'CollisionBox') {
                        child.material = invisible;
                        this.collisionObject = child;
                    }
                }
                );
                this.onLoadFinish();
                this.scene.add( object );
            }, e => 1 + 1, e => console.log(e),
        )
    }

    hitMarker() {
        const h = document.getElementById('hitmarker');
        h.classList.remove('playhitmarker');
        void h.offsetWidth;
        h.classList.add('playhitmarker');
    }

    mousedown(e) {
        const player = (window as any).player;
        if (player?.menu?.opened || !player.teamSelected) return;
        player.controls.lock();
        if (player.inventory.equippedItem){
            player.inventory.equippedItem.fire();
        }
    }

    shoot() {

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

    push(v) {
        this.object.position.x += v.x;
        this.object.position.z += v.z;
    }

    move() {
        if (this.characterController.computedGrounded()) this.velocity.y = Math.max(this.velocity.y,0);
        else this.velocity.y -= TUNABLE_VARIABLES.gravity;
        if (this.velocity.z !== 0) this.controls.moveForward(this.velocity.z);
        if (this.velocity.x !== 0) this.controls.moveRight(this.velocity.x);
        if (this.velocity.y !== 0) this.controls.moveDown(this.velocity.y);
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

    setTeam() {

    }

    jump() {
        this.velocity.y = TUNABLE_VARIABLES.jumpHeight * TUNABLE_VARIABLES.gravity;
        this.grounded = false;
    }

    input() {
        if (!this.object) return;
        
        if (this.keys[' ']) {
            this.jumping = true;
            this.jump();
        }
        
        this.sprinting = this.keys['shift'] ? true : false;
        this.walking = false;

        if(this.keys['w']){
            //this.rigidBody.addForce({ x: 0.0, y: 0.0, z: this.movementSpeed * (this.sprinting ? 2 : 1) }, true);
            this.velocity.z = -this.movementSpeed * (this.sprinting ? 2 : 1);
            this.walking = true;
        }
        if(this.keys['s']){
            //this.rigidBody.addForce({ x: 0.0, y: 0.0, z: -this.movementSpeed * (this.sprinting ? 2 : 1) }, true);
            this.velocity.z = this.movementSpeed * (this.sprinting ? 2 : 1);
            this.walking = true;
        }
        if(this.keys['a']){
            //.rigidBody.addForce({ x: this.movementSpeed * (this.sprinting ? 2 : 1), y: 0.0, z: 0.0 }, true);
            this.velocity.x = this.movementSpeed * (this.sprinting ? 2 : 1);
            this.walking = true;
        }
        if(this.keys['d']){
            //this.rigidBody.addForce({ x: -this.movementSpeed * (this.sprinting ? 2 : 1), y: 0.0, z: 0.0 }, true);
            this.velocity.x = -this.movementSpeed * (this.sprinting ? 2 : 1);
            this.walking = true;
        }

        if (!this.keys['w'] && !this.keys['s']
        ) this.velocity.z = 0;

        if (!this.keys['a'] && !this.keys['d'] 
        ) this.velocity.x = 0;
        
    }

    moveRightArm() {
        if (!this.rightArm) return;

        let dir = new Vector3(0,0,0);

        this.cameraController.camera.getWorldDirection(dir);

        this.rightArm.lookAt(dir.multiplyScalar(10000000000));

        this.rightArm.rotateX(-Math.PI / 180 * 90);
    }

    update(deltaTime) {
        this.totalTime += deltaTime;
        if (!this.object) return;
        if (this.respawning) {
            this.respawnTimer += deltaTime;
            this.hud.respawnTimer(TUNABLE_VARIABLES.respawnTime - this.respawnTimer);
        }
        if (this.respawnTimer > TUNABLE_VARIABLES.respawnTime) {
            this.respawn();
        }

        this.move();

        this.characterCollider.setRotation(this.collisionObject.quaternion);
        this.characterCollider.setTranslation(this.object.position);

        showRapierCollider(this.collisionBox.halfSize, this.collisionObject.position, this.collisionObject.quaternion, this.scene);

        this.moveRightArm();
        let worldDirection = new Vector3();
        this.object.getWorldDirection(worldDirection);
        this.checkY();
        this.input();
    }

    onPlayerLoad() {
        this.controls = new PointerLockControls( this, this.renderer.domElement);
        this.renderer.domElement.addEventListener( 'lock', function () {
            console.log("LOCKING");
            if (this.menu.opened) {
                this.player.controls.unlock();
            }
            this.menu.hide();
        } );
        this.renderer.domElement.addEventListener( 'unlock', function () {
            this.menu.show();
            Object.keys(this.keys).forEach(key => {
                this.keys[key] = false;
            })
        } );
        this.camera.rotateY(180 * Math.PI / 180);
        this.camera.position.y -= 1;
    }
}