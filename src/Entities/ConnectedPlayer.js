import { Inventory } from "../Components/Inventory";
import {
    MeshLambertMaterial,
    Vector3,
    Matrix4,
    Object3D
  } from "three";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GlobalGame } from "../Game";

export class ConnectedPlayer {

    gunBarrel = new Object3D();

    head = new Object3D();

    constructor(id, item) {
        this.id = id;
        this.inventory = new Inventory();
        if (item) {
            this.itemToAdd = item;
        }
        this.loadModel();
        this.animations = {};
        this.velocity = new Vector3(0,0,0);
        this.health = TUNABLE_VARIABLES.health;
        this.spawnedEntities = [];
        this.score = 0;
    }

    loadModel() {
        const materialToon = new MeshLambertMaterial({
            color: 'purple',
        });
        new FBXLoader().load(
            'Models/PossibleCharacter2.fbx',
            (object) => {
                this.object = object;
                object.scale.setScalar(.007);
                object.c = this;
                object.isEnemy = true;
                object.traverse(( child ) => {
                    child.c = this;
                    child.isEnemy = true;
                    if ( child.isMesh ) {
                        child.material = materialToon;
                        child.castShadow = true;
                    }
                    if (child.name === 'RightShoulder') {

                        this.rightArm = child;
                        if (this.itemToAdd) {
                            this.inventory.add(this.itemToAdd);
                            this.itemToAdd.pickedUpByConnectedPlayer(this.id);
                        }
                    }
                    if (child.isMesh) child.castShadow = true;
                }
                );
                GlobalGame.scene.add( object );
                this.setPos(new Vector3(10,10,10));
            }, e => 1 + 1, e => console.log(e),
        )
    }

    setPos(pos) {
        if (!this.object) return;
        this.object.position.copy(pos);
    }

    setVelocity(velocity) {
        if (!this.object) return;
        this.velocity.copy(velocity);
    }

    setTeam(teamNumber) {
        this.team = teamNumber;
        menu.updateScores(true);
    }

    setEquippedWeapon(item) {
        this.inventory.add(item) 
    }

    setQuaternion(quat) {
        if (!this.object) return;
        //First of all we create a matrix and put the rotation of the cube into it
        let rotObjectMatrix = new Matrix4();
        rotObjectMatrix.makeRotationFromQuaternion(quat);
        //Next we just have to apply a rotation to the quaternion using the created matrix
        this.object.rotation.setFromRotationMatrix(rotObjectMatrix);
    }

    moveRightArm(cameraDir) {

        if (!this.rightArm) return;

        const cameraDirVector = new Vector3(cameraDir.x, cameraDir.y, cameraDir.z);

        this.rightArm.lookAt(cameraDirVector.multiplyScalar(300));

        this.rightArm.rotateX(-Math.PI / 180 * 90);
    }

    shoot(dir) {

        const directionVector = new Vector3(dir.x, dir.y, dir.z);

        this.shooting = true;

        this.gunBarrel.updateMatrixWorld(true);

        let gunPosition = new Vector3();

        this.gunBarrel.getWorldPosition(gunPosition);

        

        this.spawnedEntities.push(bullet);

        this.shooting = true;
        
    }

    moveForward( distance ) {
        let _vector = new Vector3();
        // move forward parallel to the xz-plane
        // assumes player.up is y-up
        _vector.setFromMatrixColumn( this.object.matrix, 0 );

        _vector.crossVectors( this.object.up, _vector );

        this.object.position.addScaledVector( _vector, distance );

    };

    moveRight( distance ) {

        let _vector = new Vector3();

        _vector.setFromMatrixColumn( this.object.matrix, 0 );

        this.object.position.addScaledVector( _vector, distance );

    };

    setLookQuaternion(quat) {
        if (!this.head) return;
        //First of all we create a matrix and put the rotation of the cube into it
        let rotObjectMatrix = new Matrix4();
        rotObjectMatrix.makeRotationFromQuaternion(quat);
        //Next we just have to apply a rotation to the quaternion using the created matrix
        this.head.rotation.setFromRotationMatrix(rotObjectMatrix);
    }

    setHealth(newHealth) {
        this.health = newHealth;
    }

    move() {
        this.object.position.y += (this.velocity.y);
        this.moveForward(this.velocity.z);
        this.moveRight(this.velocity.x);
    }

    update(deltaTime) {
        if (!this.object) return;
        this.move();
        this.spawnedEntities.forEach(e => e.update ? e.update(deltaTime) : console.log('no update function'));
    }
}