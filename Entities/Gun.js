class Gun {
    constructor(projectileType, numberOfProjectiles, spread, automatic) {
        this.projectileType = projectileType;
        this.numberOfProjectiles = numberOfProjectiles;
        this.spread = spread;
        this.spawnedEntities = [];
        this.automatic = automatic;
    }

    fire(initialPosition, dir) {
        for (let i = 0; i < this.numberOfProjectiles; i ++) {
            const projectile = new Projectile(
                initialPosition, 
                this.pickFiringDirection(dir, this.spread),
                this.projectileType
            );
            this.spawnedEntities.push(projectile);
        }
    }

    update(deltaTime) {
        this.spawnedEntities.map(e => e.update(deltaTime))
    }

    pickFiringDirection(muzzleForward, spreadRadius) {
        const spherePoint = randomSpherePoint(0,0,0,1);
        const candidate = spherePoint
                            .multiplyScalar(spreadRadius)
                            .add(muzzleForward);
        return candidate.normalize();
    }

    setProjectile(settings) {
        this.projectileType = settings;
    }
}

const customizableGun = new Gun(0,0,0,0);