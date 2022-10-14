class Player {
    constructor() {
        this.pos = camera.position.clone();
        this.pos.y -= 1;
        // this.pos.z -= 4;
        // camera.position.y += 2;
        // camera.position.z -= .1;
        // camera.position.x += .1;
        this.animations = {};
        this.mixer;
        this.object;
        this.currentAnimation;
        this.loadModel(); 
        this.addReticle();
        this.addMuzzleFlash();
        this.shooting = false;
        this.box;
        this.velocity = new THREE.Vector3(0,0,0);
        this.handPosition;
        this.spawnedEntities = [];
    }
    addMuzzleFlash() {
        const geometry = new THREE.SphereGeometry( .4, 32, 16 );
        const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
        this.flash = new THREE.Mesh( geometry, material );
        this.flash.position.z -= .7;
        this.flash.position.y -= .38;
        this.flash.position.x += .3;
        this.flash.visible = false;
        scene.add(camera);
        camera.add(this.flash);
    }
    loadGun() {
        objLoader.load(
            // resource URL
            'Models/gun.obj',
            // called when resource is loaded
            ( gun )  => {
                scene.add(camera);
                this.gun = gun;
                this.hand = this.object.getObjectByName('mixamorigRightHand');
                this.gun.scale.set(.2,.2,.2);
                this.gun.position.z -= .5;
                this.gun.position.y -= .38;
                this.gun.position.x += .3;
                
            },
        );
    }
    addReticle() {
        this.reticle = new THREE.Mesh(
            new THREE.RingBufferGeometry( 0.85 * .003, .003, 32),
            new THREE.MeshBasicMaterial( {color: 0xffffff,
                blending: THREE.AdditiveBlending, side: THREE.DoubleSide })
        );
        this.reticle.flatShading = true;
        camera.add(this.reticle);
        this.reticle.position.z -= .1;
    }
    loadModel() {
        this.fbxLoader = new THREE.FBXLoader();
        this.fbxLoader.load(
            'Models/Idle.fbx',
            (object) => {
                camera.add(object);
                this.object = object;
                object.isEnemy = this.isEnemy;
                object.c = this;
                object.scale.setScalar(.01);
                if (this.pos) {
                    object.position.set(this.pos.x, this.pos.y, this.pos.z);
                }
                console.log(object);
                this.mixer = new THREE.AnimationMixer( object );
                const action = this.mixer.clipAction( object.animations[0] );
                action.clampWhenFinished = true;
                this.fbxLoader.load('Models/Walking.fbx', anim => {
                    console.log('here');
                    const walk = this.mixer.clipAction( anim.animations[0] );
                    walk.clampWhenFinished = true;
                    this.animations['walking'] = walk;
                    this.animations['old'] = action;
                    // action.play();
                    // this.currentAnimation = walk;
                    this.fbxLoader.load('Models/Death.fbx', anim => {
                        const death = this.mixer.clipAction( anim.animations[0] );
                        death.loop = THREE.LoopOnce;
                        death.startAt(.2);
                        death.clampWhenFinished = true;
                        this.animations['death'] = death;
                        this.fbxLoader.load('Models/Shooting.fbx', anim => {
                            const shooting = this.mixer.clipAction( anim.animations[0] );
                            shooting.loop = THREE.LoopOnce;
                            shooting.clampWhenFinished = true;
                            shooting.startAt(.5);
                            this.animations['shooting'] = shooting;
                            shooting.weight = 1;
                            this.rightHand = this.object.getObjectByName('mixamorigRightHand');
                        });
                        this.animSetup();
                    });
                }, e => 1 + 1, e => console.log(e));
                object.traverse(( child ) => {
                    child.isEnemy = true;
                    child.c = this;
                    if ( child.isMesh ) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                } );
                scene.add( object );
            }, e => 1 + 1, e => console.log(e),
        )
    }
    animSetup() {
        this.mixer.addEventListener( 'finished', ( e ) => {
            if (this.currentAnimation == this.animations['shooting']) {
                this.shooting = false;
            }
            this.transitionAnimation(this.animations['walking']);
        } )
    }
    shoot() {
        let handPosition;
        this.animations['shooting'].time = (0);
        if (this.rightHand) {
            this.object.updateMatrixWorld(true);
            handPosition = new THREE.Vector3();
            this.rightHand.getWorldPosition( handPosition );
        }
        this.reticle.updateMatrixWorld();
        let dir = new THREE.Vector3(0,0,0);
        camera.getWorldDirection(dir);
        const bullet = new Bullet(handPosition, dir.multiplyScalar(10000), player);
        this.spawnedEntities.push(bullet);
        // this.transitionAnimation(this.animations['shooting']);
        this.shooting = true;
    }

    remove(entity) {
        this.spawnedEntities = this.spawnedEntities.filter(e => {
            e !== entity;
        })
    }

    death() {

    }
    move() {
        // camera.position.y += this.velocity.y ;
        this.object.position.y += this.velocity.y;
        // camera.position.x += this.velocity.x ;
        this.object.position.x += this.velocity.x;
        // camera.position.z += this.velocity.z ;
        this.object.position.z += this.velocity.z;
    }
    transitionAnimation(anim) {
        if (this.currentAnimation ===  anim)
            return;
        if (this.currentAnimation)
            this.currentAnimation.fadeOut(.1);
        anim.reset();
        anim.fadeIn(.1);
        anim.play();
        this.currentAnimation = anim;
    }

    jump() {
        this.velocity.y = 30 * gravity;
    }

    input() {
        if (keys[' '] && !this.jumping) {
            this.jumping = true;
            this.jump();
        }
    }
    update(deltaTime) {
        this.spawnedEntities.forEach(e => e.update ? e.update(deltaTime) : console.log(''));
        if (this.mixer) this.mixer.update( deltaTime );

        if (!player.walking) {
            this.animations['walking'].paused = true;
        } else {
            this.animations['walking'].paused = false;
            this.animations['walking'].play();
        }

        const raycaster = new THREE.Raycaster();
        let rayPos = this.object.position.clone();
        rayPos.y += 1;
        // camera.position.z = this.object.position.z - 50;
        raycaster.set(
            rayPos, 
            new THREE.Vector3(0,-1,0)
        );
        let intersect = (raycaster.intersectObject(level.object, true));
        if (intersect.length > 0 && intersect[0].distance < 1) {
            this.jumping = false;
            this.object.position.y = intersect[0].point.y;
        } else {
            this.velocity.y -= gravity;
        }
        this.input();
        this.move();
    }
}