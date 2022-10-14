class NPC {
    constructor(isEnemy, pos) {
        this.isEnemy = isEnemy;
        this.pos = pos;
        this.animations = {};
        this.mixer;
        this.object;
        this.loadModel();
        this.moveSpeed = 1;
    }
    loadModel() {
        this.fbxLoader = new THREE.FBXLoader();
        this.fbxLoader.load(
            'Models/Old Man Idle.fbx',
            (object) => {
                this.object = object;
                object.isEnemy = this.isEnemy;
                object.c = this;
                object.scale.setScalar(.01);
                if (this.pos) {
                    object.position.set(this.pos.x, this.pos.y, this.pos.z);
                }
                this.mixer = new THREE.AnimationMixer( object );
                const action = this.mixer.clipAction( object.animations[ 1 ] );
                this.fbxLoader.load('Models/Walking.fbx', anim => {
                    const walk = this.mixer.clipAction( anim.animations[0] );
                    this.animations['walk'] = walk;
                    this.animations['old'] = action;
                    walk.play();
                    this.fbxLoader.load('Models/Death.fbx', anim => {
                        const death = this.mixer.clipAction( anim.animations[0] );
                        death.loop = THREE.LoopOnce;
                        death.startAt(.2);
                        death.clampWhenFinished = true;
                        this.animations['death'] = death;
                    });
                });
                object.traverse(( child ) => {
                    child.isEnemy = true;
                    child.c = this;
                    if ( child.isMesh ) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                } );
                scene.add( object );
            },
        )
    }
    update(deltaTime) {
        if (this.mixer) this.mixer.update( deltaTime );
        if (this.object) this.object.position.z += this.moveSpeed * deltaTime;
        if (this.dead) this.timeSinceDeath += deltaTime;
        if (this.timeSinceDeath >= 1) {
            scene.remove(this.object);
        }
    }
    death(hitObj) {
        hitObj.material.color.set( 0xff0000 );
        this.animations['walk'].fadeOut(.2);
        this.animations['death'].reset();
        this.animations['death'].fadeIn(.3);
        this.animations['death'].play();
        this.moveSpeed = 0;
        this.dead = true;
        this.timeSinceDeath = 0;
    }
}