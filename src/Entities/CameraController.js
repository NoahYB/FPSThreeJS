import { Vector3 } from 'three';
import { TUNABLE_VARIABLES } from '../DataModels/TunableVariables';
import { getComposer, getVignette } from '../Game';
export class CameraController {

    constructor(camera, player) {
        this.camera = camera;
        this.followedObject = player;
        this.thirdPerson = TUNABLE_VARIABLES.thirdPerson;
        this.shakeFrame = 0;
    }

    
    getCameraDirection() {
        let worldDirection = new Vector3();
        
        this.camera.getWorldDirection(worldDirection);

        return worldDirection;
    }

    setFollowedObject(newObject) {
        this.followedObject = newObject;
        this.pan = false; 
        // if (this.previousQuaternion)
            // this.camera.quaternion.copy(this.previousQuaternion);
    }

    thirdPersonCamera() {
        let worldDirection = new Vector3();
        
        this.camera.getWorldDirection(worldDirection);

        this.camera.position.add(
            worldDirection.multiplyScalar(-10)
        );
    }

    panTowards(target, speed) {
        if (target) {
            // this.previousQuaternion = camera.quaternion.clone();
            this.target = target;
            this.speed = speed;
        }
        let head = this.target.object.getObjectByName('Cube001');
        let headPosition = new Vector3();
        head.getWorldPosition(headPosition);
        this.pan = true;
        // this.camera.lookAt(headPosition);
        camera.position.add(headPosition.sub(camera.position).multiplyScalar(this.speed));
    }

    onHit() {
        this.hitScreenEffect = true;
        this.framesSinceHit = 0;
    }

    update() {
        if (!   this.followedObject.object || !this.camera) return;
        if (this.pan) {
            this.panTowards();
            if (this.target.object.position.distanceTo(camera.position) < 1) {
                this.setFollowedObject(this.target);
            }
            return;
        }

        let head = this.followedObject.object.getObjectByName('Cube001');
        
        let headPosition = new Vector3();

        let worldDirection = new Vector3();

        head.getWorldPosition(headPosition);
        
        this.camera.getWorldDirection(worldDirection);

        this.camera.position.copy(headPosition);

        this.camera.position.add(
            worldDirection.normalize().multiplyScalar(1)
        );

        this.camera.position.y -= .2;
        this.thirdPerson = TUNABLE_VARIABLES.thirdPerson;

        if (this.thirdPerson) {
            this.thirdPersonCamera();
        }

        if (this.hitScreenEffect) {
            getVignette().uniforms[ "darkness" ].value = 1;
            this.framesSinceHit += 1;

            if (this.framesSinceHit < 10) {
                getVignette().uniforms[ "offset" ].value += .085;
            }

            if (this.framesSinceHit >= 20) {
                getVignette().uniforms[ "offset" ].value -= .085;
            }

            if (this.framesSinceHit === 31) {
                getVignette().uniforms[ "darkness" ].value = 0;
                getVignette().uniforms[ "offset" ].value = 0;
                this.hitScreenEffect = false;
            }
        }
    }
}