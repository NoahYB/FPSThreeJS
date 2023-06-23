class CameraController {
    constructor(camera, player) {
        this.camera = camera;
        this.followedObject = player;
        this.thirdPerson = TUNABLE_VARIABLES.thirdPerson;
    }

    
    getCameraDirection() {
        let worldDirection = new THREE.Vector3();
        
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
        let worldDirection = new THREE.Vector3();
        
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
        let headPosition = new THREE.Vector3();
        head.getWorldPosition(headPosition);
        this.pan = true;
        // this.camera.lookAt(headPosition);
        camera.position.add(headPosition.sub(camera.position).multiplyScalar(this.speed));
    }

    update() {
        if (!player.object || !camera) return;
        if (this.pan) {
            this.panTowards();
            if (this.target.object.position.distanceTo(camera.position) < 1) {
                this.setFollowedObject(this.target);
            }
            return;
        }

        let head = this.followedObject.object.getObjectByName('Cube001');
        
        let headPosition = new THREE.Vector3();

        let worldDirection = new THREE.Vector3();

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
    }
}