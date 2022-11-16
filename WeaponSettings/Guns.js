class CannonBall {
    constructor() {
        this.VELOCITY_CONSTANT = 1000;
        this.GRAVITY_CONSTANT = 10;
        this.DEACCELERATION_CONSTANT = .99;
        this.MASS = 20;
        this.DELAY = .4;
        this.GEOMETRY = new THREE.SphereGeometry(.1);
        this.LIFESPAN = 2;
    }
}
const cannonBall = new CannonBall();

class Round {
    constructor() {
        this.VELOCITY_CONSTANT = 1000;
        this.GRAVITY_CONSTANT = 10;
        this.DEACCELERATION_CONSTANT = .99;
        this.MASS = 2;
        this.DELAY = 0;
        this.GEOMETRY = new THREE.SphereGeometry(1);
        this.LIFESPAN = 1;
    }
}
const bullet = new Round();


