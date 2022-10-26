class Player {
    constructor() {
        console.log(TUNABLE_VARIABLES);
        this.movementSpeed = TUNABLE_VARIABLES.movementSpeed;
        this.jumpHeight = TUNABLE_VARIABLES.jumpHeight;
        this.sprinting = false;
        this.killBoundary = -10;
        this.animations = {};
        this.grounded = false;
        this.mixer;
        this.object;
        this.currentAnimation;
        this.currentAnimationName;
        this.loadModel(); 
        this.addReticle();
        this.addMuzzleFlash();
        this.loadHUD();
        this.shooting = false;
        this.box;
        this.velocity = new THREE.Vector3(0,0,0);
        this.handPosition;
        this.spawnedEntities = [];
        this.collisions = new Collisions(this);
        document.addEventListener('mousedown',this.mousedown);
        this.shootingTimer = 0;
    }
    
    loadHUD() {
        this.text2 = document.createElement('div');
        this.text2.style.position = 'absolute';
        this.text2.style.width = 100;
        this.text2.style.height = 100;
        this.text2.style.color = 'white';
        this.text2.innerHTML = "0";
        this.text2.style.fontSize = 100;
        this.text2.style.top = 30 + 'px';
        this.text2.style.left = window.innerWidth - 100 + 'px';
        this.text2.id = 'scoreText';
        document.body.appendChild(this.text2);
    }

    onLoadFinish() {
        // this.addBoundingVolume();
    }

    addBoundingVolume() {
        let headPosition;
        this.head = this.object.getObjectByName('mixamorigHead');
        if (this.head) {
            this.object.updateMatrixWorld(true);
            headPosition = new THREE.Vector3();
            this.head.getWorldPosition( headPosition );
        }
        console.log(headPosition.y, this.object.position.y);
        this.objectLength = this.extremities.maxY - this.extremities.minY;
        const geometry = new THREE.BoxGeometry(
            100,
            (this.extremities.maxY - this.extremities.minY), 
            this.extremities.maxX - this.extremities.minX,
        );
        const material = new THREE.MeshBasicMaterial({
          color: 0x00FF00,
          wireframe: true,
        });
        this.debugMesh = new THREE.Mesh( geometry, material );
        this.box = new THREE.Box3();
        this.debugMesh.geometry.computeBoundingBox();
        this.box.copy( this.debugMesh.geometry.boundingBox ).applyMatrix4( this.debugMesh.matrixWorld );
        this.object.add(this.debugMesh);

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
    checkY() {
        if(this.object.position.y < this.killBoundary) {
            this.respawn();
        }
    }
    respawn() {
        this.object.position.set(0,40,0);
    }
    loadGun() {
        objLoader.load(
            // resource URL
            'Models/M9.obj',
            // called when resource is loaded
            ( gun )  => {
                gun.scale.setScalar(.5);
                scene.add(gun);
                this.rightHand = this.object.getObjectByName('mixamorigRightHand');
                this.rightHand.add(gun);
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
                this.object.position.set(20,20,20);//new THREE.Vector3(20,20,20);
                object.isEnemy = this.isEnemy;
                object.c = this;
                object.scale.setScalar(.01);
                object.position.y = 40;
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
                        this.fbxLoader.load('Models/Shooting2.fbx', anim => {
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
                let maxY, maxZ, maxX, minX, minY, minZ;
                maxX = maxY = maxZ = -100000000;
                minX = minY = minZ = 100000000;
                object.traverse(( child ) => {
                    child.isEnemy = true;
                    child.c = this;
                    if(child.position.x > maxX) maxX = child.position.x;
                    if(child.position.y > maxY) maxY = child.position.y;
                    if(child.position.x < minX) minX = child.position.x;
                    if(child.position.y < minY) minY = child.position.y;
                    if(child.position.z < minZ) minZ = child.position.z;
                    if(child.position.z > maxZ) maxZ = child.position.z;
                    if ( child.isMesh ) {
                        child.castShadow = true;
                    }
                } );
                this.extremities = {
                    maxX, maxY, minX, minY, minZ, maxZ
                }
                this.onLoadFinish();
                console.log(this.extremities);
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

    mousedown(e) {
        if (menuOpened) return;
        player.shoot();
        raycaster.setFromCamera( new THREE.Vector2(0,0), camera );
        // calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects( scene.children );
        // HITHITHITHITHITHIT
        for ( let i = 0; i < intersects.length; i ++ ) {
            const object = intersects[ i ].object;
            if (object === level.object) return;
            if (object.isEnemy) {
                const t = document.getElementById('scoreText');
                let v = new THREE.Vector3();
                camera.getWorldDirection(v);
                webSocketHandler.sendMessage({
                    tag: v,
                    text: 'connected'
                })
                t.innerHTML = parseInt(t.innerHTML) + 1;
                return;
            }
        }
        controls.lock();
    }
    shoot() {
        let handPosition;
        this.shooting = true;
        this.animations['shooting'].time = (0);
        // this.animations['shooting'].play();
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
        this.shooting = true;
    }

    remove(entity) {
        this.spawnedEntities = this.spawnedEntities.filter(e => {
            e !== entity;
        })
    }

    death() {

    }

    push(v) {
        // this.object.position.y += v.y;
        // this.object.position.z += v.z;
        // this.object.position.x += v.x;
    }

    move() {
        this.object.position.y += this.velocity.y;
        controls.moveForward(this.velocity.z);
        controls.moveRight(this.velocity.x);
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
        this.velocity.y = this.jumpHeight * gravity;
        this.jumping = true;
        this.grounded = false;
    }

    input() {
        if (!this.object) return;
        if (keys[' '] && !this.jumping) {
            this.jumping = true;
            this.jump();
        }
        this.sprinting = keys['Shift'] ? true: false;
        this.walking = false;
        if(keys['w']){
            this.velocity.z = -this.movementSpeed * (this.sprinting ? 2 : 1);
            this.walking = true;
        }
        if(keys['s']){
            this.velocity.z = this.movementSpeed * (this.sprinting ? 2 : 1);
            this.walking = true;
        }
        if(keys['a']){
            this.velocity.x = this.movementSpeed * (this.sprinting ? 2 : 1);
            this.walking = true;
        }
        if(keys['d']){
            this.velocity.x = -this.movementSpeed * (this.sprinting ? 2 : 1);
            this.walking = true;
        }
        if (!keys['w'] && !keys['s']) this.velocity.z = 0;
        if (!keys['a'] && !keys['d']) this.velocity.x = 0;
    }
    updateBBOX() {
        this.box = new THREE.Box3();
        this.debugMesh.geometry.computeBoundingBox();
        this.box
            .copy( this.debugMesh.geometry.boundingBox )
            .applyMatrix4( this.debugMesh.matrixWorld );
    }

    handleCollisions() {
        const vertCollisions = this.collisions.checkVerticalCollisions(
            this.object, 
            level.object, 
            this.velocity
        );
        if (vertCollisions && !this.jumping) {            
            this.velocity.y = 0;
            this.object.position.y = vertCollisions.y;
            this.grounded = true;
        } else {
            this.jumping = false;
            this.velocity.y -= gravity;
        }
        const horzontalCollisions = this.collisions.checkHorizontalCollisions(
            this.object, 
            level.object, 
            this.velocity
        );
        if (horzontalCollisions) {
            console.log('collided');
            this.velocity.x = 0;
            this.velocity.z = 0;
        }
    }

    update(deltaTime) {
        if (this.shooting) this.shootingTimer += deltaTime;
        if (!this.object) return;
        if (this.box) this.debugMesh.position.y = this.object.position.y + this.objectLength / 2;
        this.checkY();
        this.spawnedEntities.forEach(e => e.update ? e.update(deltaTime) : console.log(''));
        if (this.mixer) this.mixer.update( deltaTime );
        if (this.object) {
            // camera.position.y = this.object.position.y + 170;
        }
        if (!player.walking) {
            this.currentAnimationName = 'idle';
            this.animations['walking'].paused = true;
        } else {
            this.currentAnimationName = 'walking';
            this.animations['walking'].paused = false;
            this.animations['walking'].play();
        }
        this.input();
        this.handleCollisions();
        this.move();
    }
}