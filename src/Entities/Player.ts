// @ts-check
import { OBB } from 'three/examples/jsm/math/OBB';
import { Inventory } from '../Components/Inventory'
import { Collisions } from '../Components/Collisions'
import { PointerLockControls } from '../Components/PointerLockControlsCustom';
import { HUD } from './HUD';
import { CameraController } from './CameraController';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import * as THREE from 'three';
import { GlobalGame } from '../Game';
import { showRapierCollider } from '../Utilities';

interface KeyDictionary {
    [index: string]: boolean;
}

interface CollisionData {
    point: THREE.Vector3;
    mesh: THREE.Object3D;
}

export class Player {
    cameraController: CameraController;
    spawnLocations: THREE.Vector3[];

    totalTime: number = 0;
    score: number = 0;

    grounded: boolean = false;
    sprinting: boolean = false;
    
    movementSpeed : number = TUNABLE_VARIABLES.movementSpeed;
    jumpHeight : number = TUNABLE_VARIABLES.jumpHeight;
    health : number = TUNABLE_VARIABLES.health;

    killBoundary: number = -30;

    object: THREE.Object3D;

    velocity: THREE.Vector3;

    respawning: boolean = false;
    respawnTimer: number = 0;
    
    collisions: Collisions = new Collisions();
    inventory: Inventory = new Inventory()

    horizontalCollision: boolean = false;
    team: string;

    // Collision information
    legL: THREE.Object3D;
    legR: THREE.Object3D;
    body: THREE.Object3D;;
    boxLegL: THREE.Box3;
    boxLegR: THREE.Box3;
    collisionObject: THREE.Object3D
    collisionBox: THREE.Box3;

    rightArm: THREE.Object3D;

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

    constructor(
        cameraController: CameraController, 
        RAPIER: any,
    ) {
        this.RAPIER = RAPIER;

        this.fbxLoader = GlobalGame.fbxLoader;

        this.cameraController = cameraController;

        this.spawnLocations = GlobalGame.level.spawnLocations;

        this.loadModel(); 

        this.velocity = new THREE.Vector3(0,0,0);

        document.addEventListener('mousedown',this.mousedown);

        console.log('spawning player');
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
        this.cameraController.setFollowedObject(this);
        TUNABLE_VARIABLES.thirdPerson = false;
        this.health = TUNABLE_VARIABLES.health;
        this.hud.updateHealthBar(this.health);
        if (this.hud) this.hud.onRespawn();
    }

    addBBOX() {
        console.log("ADDING BBOX");
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

        this.characterCollider = GlobalGame.physicsWorld.createCollider(colliderDesc);

        showRapierCollider(this.collisionBox.halfSize, this.collisionObject.position, this.collisionObject.rotation);
        // The gap the controller will leave between the character and its environment.
        let offset = 0.2;
        // Create the controller.
        this.characterController = GlobalGame.physicsWorld.createCharacterController(offset);
        this.characterController.enableAutostep(3.0, 0.0, true);
    }

    updateBBOX() {
        this.boxLegL.applyMatrix4(this.legL.matrixWorld);
        this.boxLegR.applyMatrix4(this.legR.matrixWorld);
        this.collisionBox.applyMatrix4(this.collisionObject.matrixWorld);
    }

    loadModel() {
        const materialToon = new THREE.MeshToonMaterial({
            color: 'red',
        });
        const invisible = new THREE.MeshToonMaterial({
            visible: false,
        });
        this.fbxLoader.load(
            'Models/PossibleCharacter2.fbx',
            (object) => {
                this.cameraController.camera.add(object);
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
                GlobalGame.scene.add( object );
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
        console.log("Click");
        if (GlobalGame.menu.opened || !GlobalGame.teamSelected) return;
        GlobalGame.player.controls.lock();
        if (GlobalGame.player.inventory.equippedItem){
            GlobalGame.player.inventory.equippedItem.fire();
        }
    }

    shoot() {

    }

    death(whoKilledPlayer) {
        if (this.respawning) return;
        this.object.position.set(0,-10000,0);
        GlobalGame.webSocketHandler.sendMessage({
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
        //if (this.characterController.computedGrounded()) this.velocity.y = 0;
        this.velocity.y = TUNABLE_VARIABLES.gravity;
        this.controls.moveForward(this.velocity.z);
        this.controls.moveRight(this.velocity.x);
        this.controls.moveDown(this.velocity.y);
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
        
        if (GlobalGame.keys[' ']) {
            this.jumping = true;
            this.jump();
        }
        
        this.sprinting = GlobalGame.keys['shift'] ? true : false;
        this.walking = false;

        if(GlobalGame.keys['w']){
            //this.rigidBody.addForce({ x: 0.0, y: 0.0, z: this.movementSpeed * (this.sprinting ? 2 : 1) }, true);
            this.velocity.z = -this.movementSpeed * (this.sprinting ? 2 : 1);
            this.walking = true;
        }
        if(GlobalGame.keys['s']){
            //this.rigidBody.addForce({ x: 0.0, y: 0.0, z: -this.movementSpeed * (this.sprinting ? 2 : 1) }, true);
            this.velocity.z = this.movementSpeed * (this.sprinting ? 2 : 1);
            this.walking = true;
        }
        if(GlobalGame.keys['a']){
            //.rigidBody.addForce({ x: this.movementSpeed * (this.sprinting ? 2 : 1), y: 0.0, z: 0.0 }, true);
            this.velocity.x = this.movementSpeed * (this.sprinting ? 2 : 1);
            this.walking = true;
        }
        if(GlobalGame.keys['d']){
            //this.rigidBody.addForce({ x: -this.movementSpeed * (this.sprinting ? 2 : 1), y: 0.0, z: 0.0 }, true);
            this.velocity.x = -this.movementSpeed * (this.sprinting ? 2 : 1);
            this.walking = true;
        }

        if (!GlobalGame.keys['w'] && !GlobalGame.keys['s']
        ) this.velocity.z = 0;

        if (!GlobalGame.keys['a'] && !GlobalGame.keys['d'] 
        ) this.velocity.x = 0;
        
    }

    handleCollisions() {
        if (!this.boxLegL || this.respawning) return;
        if (!this.horizontalCollision) {
            // this.updateBBOX();
            
        }
        this.updateBBOX();
        let verticalCollisionsL = this.collisions.checkBBOXvArray(this.boxLegL, GlobalGame.level.levelBBOX, true) as CollisionData;
        let verticalCollisionsR = this.collisions.checkBBOXvArray(this.boxLegR, GlobalGame.level.levelBBOX, true) as CollisionData;
        let horizontalCollisions = this.collisions.checkBBOXvArray(this.collisionBox, GlobalGame.level.levelBBOX, false);

        let vertical = verticalCollisionsL || verticalCollisionsR;

        const oldPosition = this.object.position.clone();
        this.move();

        // pos - wall
        if (vertical && 
            this.velocity.y <= 0
        ) {
            this.velocity.y = 0;
            const ground = this.collisions.getGroundHeight(vertical.mesh, this.boxLegL.center);
            if (ground)
                this.object.position.y = ground.y + this.boxLegL.halfSize.z;
            this.grounded = true;
            this.jumping = false;
        } else {
            this.grounded = false;
        }

        // if (horizontalCollisions) {
        //     horizontalCollisions.forEach(horizontalCollision => {
        //         console.log(horizontalCollision);
        //         const playerPos = this.collisionBox.center.clone();
        //         const f = horizontalCollision.object.position.clone();
        //         const dir = f.sub(playerPos.clone()).normalize();
        //         // showVector(dir, playerPos);

        //         const face = this.collisions.getFace(
        //             dir, 
        //             playerPos,
        //             horizontalCollision.object
        //         )
        //         // console.log(face);
        //         if (face) {
        //             const collisionDepth = oldPosition.distanceTo(this.object.position);
        //             this.push(face.normal.multiplyScalar(collisionDepth));
        //         }
        //     }) 
        // } else {

        // }
        
        if (!this.grounded){
            
            this.velocity.y -= TUNABLE_VARIABLES.gravity;
        }
    }

    moveRightArm() {
        if (!this.rightArm) return;

        let dir = new THREE.Vector3(0,0,0);

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

        showRapierCollider(this.collisionBox.halfSize, this.collisionObject.position, this.collisionObject.quaternion);

        this.moveRightArm();
        let worldDirection = new THREE.Vector3();
        this.object.getWorldDirection(worldDirection);
        this.checkY();
        this.input();
    }

    onPlayerLoad() {
        this.controls = new PointerLockControls( this.object, GlobalGame.renderer.domElement );
        this.controls.addEventListener( 'lock', function () {
            if (GlobalGame.menu.opened) {
                GlobalGame.player.controls.unlock();
            }
            GlobalGame.menu.hide();
        } );
        this.controls.addEventListener( 'unlock', function () {
            console.log("unlock");
            GlobalGame.menu.show();
            Object.keys(GlobalGame.keys).forEach(key => {
                GlobalGame.keys[key] = false;
            })
        } );
        this.cameraController.camera.rotateY(180 * Math.PI / 180);
        this.cameraController.camera.position.y -= 1;
    }
}