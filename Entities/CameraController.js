class CameraController {
    constructor(camera, player) {
        this.camera = camera;
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
    }
}