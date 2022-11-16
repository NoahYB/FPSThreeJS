class Projectile {
    constructor(
        initialPosition,
        dir,
        settings
    ) {
        this.initialPosition = initialPosition;
        this.velocity = dir.multiplyScalar(settings.VELOCITY_CONSTANT);
        this.deaccelerationConstant = settings.DEACCELERATION_CONSTANT;
        this.mass = settings.MASS;
        this.delay = settings.DELAY;
        this.geometry = new THREE.SphereGeometry(.3);
        this.gravity = new THREE.Vector3(0, -1 * settings.GRAVITY_CONSTANT, 0);
        this.lifespan = settings.LIFESPAN;
        this.timer = 0;
        this.init();
    }

    init(n) {
        const material = new THREE.MeshBasicMaterial( {color: 'green'} );
        this.object = new THREE.Mesh(this.geometry, material);
        this.object.position.copy(this.initialPosition);
        scene.add(this.object);
    }

    update(deltaTime) {
        if (this.delay > 0) {
            this.delay -= deltaTime;
            return;
        }
        this.timer += deltaTime;
        if (this.timer > this.lifespan) {
            scene.remove(this.object);
            delete(this);
        }
        this.velocity.y += this.gravity.y * deltaTime * this.mass;

        this.object.position.add(
            this.velocity.clone()
                .multiplyScalar(deltaTime)
                .multiplyScalar(1 / this.mass)
        );
        
        this.velocity.multiplyScalar(this.deaccelerationConstant);
    }
}