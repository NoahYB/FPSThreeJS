class CameraController {
    constructor(camera, player) {
        this.camera = camera;
        this.thirdPerson = TUNABLE_VARIABLES.thirdPerson;
    }

    
    thirdPersonCamera() {
        let worldDirection = new THREE.Vector3();
        
        this.camera.getWorldDirection(worldDirection);

        this.camera.position.add(
            worldDirection.multiplyScalar(-5)
        );
    }

    update() {
        if (!player.object || !camera) return;
        let head = player.object.getObjectByName('mixamorigNeck');
        let headPosition = new THREE.Vector3();
        let worldDirection = new THREE.Vector3();

        head.getWorldPosition(headPosition);
        
        this.camera.getWorldDirection(worldDirection);

        this.camera.position.copy(headPosition);

        this.camera.position.add(
            worldDirection.normalize()
        );
        this.thirdPerson = TUNABLE_VARIABLES.thirdPerson;
        if (this.thirdPerson) {
            this.thirdPersonCamera();
        }
    }
}