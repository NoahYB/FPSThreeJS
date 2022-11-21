class Player {
    constructor() {
        this.totalTime = 0;
        this.score = 0;
        this.movementSpeed = TUNABLE_VARIABLES.movementSpeed;
        this.jumpHeight = TUNABLE_VARIABLES.jumpHeight;
        this.sprinting = false;
        this.killBoundary = -10;
        this.animations = {};
        this.hitMarkersToDelete = [];
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
        this.horizontalCollision = false;
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
        onPlayerLoad();
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
        if(
            this.object.position.y < this.killBoundary && 
            !this.respawning
        ) {
            this.respawn();
        }
    }

    respawn() {
        this.respawning = false;
        this.respawnTimer = 0;
        if (spawnLocations.length > 0) {
            this.animations['walking'].play();
            if (teamNumber === 1) {
                this.object.position.copy(spawnLocations[0]);
            } else {
                this.object.position.copy(spawnLocations[1]);
            }
            this.object.position.y += 11;
        } else 
            this.object.position.set(20,20,0);
    }

    loadGun() {
        objLoader.load(
            // resource URL
            'Models/gun.obj',
            // called when resource is loaded
            ( gun )  => {
                console.log(gun);
                gun.scale.setScalar(10);
                gun.rotateY((Math.PI / 180) * 90);
                gun.rotateZ((Math.PI / 180) * -90);
                gun.rotateX((Math.PI / 180) * 35);
                this.gun = gun;

            },
        );
    }

    addBBOX() {
        if (this.box) {
            this.box = new THREE.Box3().setFromPoints(this.extremities);
            // scene.remove(this.boxHelper);
            // this.boxHelper = new THREE.Box3Helper( this.box, 0xffff00 );
            // scene.add(this.boxHelper);
            return;
        }
        this.box = new THREE.Box3().setFromPoints(this.extremities);
        // this.boxHelper = new THREE.Box3Helper( this.box, 0xffff00 );
        // scene.add(this.boxHelper);
    }

    updateBBOX() {
        let maxY, maxZ, maxX, minX, minY, minZ;
        maxX = maxY = maxZ = -100000000;
        minX = minY = minZ = 100000000;

        this.object.traverse(( child ) => {
            let childPosition = new THREE.Vector3(0,0,0);
            child.getWorldPosition(childPosition);
            if (child.isBone) {
                if (childPosition.x > maxX) maxX = childPosition.x;
                if (childPosition.z > maxZ) maxZ = childPosition.z;
                if (childPosition.z < minZ) minZ = childPosition.z;
                if (childPosition.x < minX) minX = childPosition.x;
                if (childPosition.y > maxY) maxY = childPosition.y;
                if (childPosition.y < minY) minY = childPosition.y;
            }
        });

        this.extremities = [
            new THREE.Vector3(maxX, maxY, minZ),
            new THREE.Vector3(minX, minY, maxZ)
        ]
    }
    
    addReticle() {
        this.reticle = new THREE.Group();
        camera.add(this.reticle);
        this.reticle.position.z -= .3;
    }

    loadModel() {
        const materialToon = new THREE.MeshToonMaterial({
            color: 'rgb(113, 172, 217)',
        });
        fbxLoader.load(
            'Models/Idle.fbx',
            (object) => {
                camera.add(object);
                this.object = object;
                if (spawnLocations.length > 0) {
                    this.object.position.set(spawnLocations[0]);
                } else 
                    this.object.position.set(20,20,0);//new THREE.Vector3(20,20,20);
                object.scale.setScalar(.03);
                object.c = this;
                object.position.y = 40;
                this.mixer = new THREE.AnimationMixer( object );
                const action = this.mixer.clipAction( object.animations[0] );
                action.clampWhenFinished = true;
                fbxLoader.load('Models/Walking.fbx', anim => {
                    const walk = this.mixer.clipAction( anim.animations[0] );
                    walk.clampWhenFinished = true;
                    this.animations['walking'] = walk;
                    this.animations['old'] = action;
                    fbxLoader.load('Models/Death.fbx', anim => {
                        const death = this.mixer.clipAction( anim.animations[0] );
                        death.loop = THREE.LoopOnce;
                        death.startAt(.2);
                        death.clampWhenFinished = true;
                        this.animations['death'] = death;
                        fbxLoader.load('Models/Shooting2.fbx', anim => {
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

                    console.log(child);
                    let childPosition = new THREE.Vector3(0,0,0);
                    child.getWorldPosition(childPosition);
                    child.c = this;
                    if ( child.isMesh ) {
                        child.material = materialToon;
                        child.castShadow = true;
                    }
                }
                );
                this.extremities = [
                    new THREE.Vector3(maxX, maxY, minZ),
                    new THREE.Vector3(minX, minY, maxZ)
                ]
                this.onLoadFinish();
                this.loadGun();
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

    hitMarker() {
        const h = document.getElementById('hitmarker');
        h.classList.remove('playhitmarker');
        void h.offsetWidth;
        h.classList.add('playhitmarker');
    }

    mousedown(e) {
        if (menuOpened || !teamSelected) return;
        controls.lock();
        const raycaster = new THREE.Raycaster();
        player.shoot();
        raycaster.setFromCamera( new THREE.Vector2(0,0), camera );
        const intersects = raycaster.intersectObjects( scene.children );
        // LOL
        for ( let i = 0; i < intersects.length; i ++ ) {
            const object = intersects[ i ].object;
            if (object === level.object) return;
            if (object.isEnemy && object.c.team !== player.team) {
                if (object.name === 'headshot') {
                    player.score += 1;
                    player.headShot();
                }
                player.hitMarker();
                const t = document.getElementById('scoreText');
                let v = new THREE.Vector3();
                camera.getWorldDirection(v);
                webSocketHandler.sendMessage({
                    tag: v,
                    text: 'connected',
                    headshot: object.name === 'headshot' ? true : false,
                    interactedId: object.c.id,
                    score: player.score,
                    team: teamNumber,
                })
                audioManager.hit();
                player.score += 1;
                t.innerHTML = player.score;
            }
        }
    }

    headShot() {
        const headShot = document.getElementById('headshot');
        headShot.style.display = 'block';
        headShot.style.opacity = 1;
        const clone = headShot.cloneNode(true);
        headShot.parentNode.replaceChild(clone, headShot);
    }

    shoot() {
        audioManager.shoot();
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
        const bullet = new Bullet(this.gun.position, dir.multiplyScalar(10000), player);
        this.spawnedEntities.push(bullet);
        this.shooting = true;
    }

    remove(entity) {
        this.spawnedEntities = this.spawnedEntities.filter(e => {
            e !== entity;
        })
    }

    death() {
        this.currentAnimationName = 'death';
        this.object.position.copy(new THREE.Vector3(0,-1000,0));
        this.startRespawn();
    }

    startRespawn() {
        this.respawnTimer = 0;
        this.respawning = true;
    }

    push(v) {
        this.velocity.y += v.y;
        this.velocity.z += v.z;
        this.velocity.x += v.x;
    }

    move() {
        this.object.position.y += this.velocity.y;
        controls.moveForward(this.velocity.z);
        controls.moveRight(this.velocity.x);
    }

    setTeam() {

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
        this.velocity.y = TUNABLE_VARIABLES.jumpHeight * TUNABLE_VARIABLES.gravity;
        this.grounded = false;
    }

    input() {
        if (!this.object) return;
        if (keys[' '] && !this.jumping) {
            this.jumping = true;
            this.jump();
        }
        
        this.sprinting = keys['Shift'] ? true : false;
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

        if (!keys['w'] && !keys['s']
        ) this.velocity.z = 0;

        if (!keys['a'] && !keys['d'] 
        ) this.velocity.x = 0;
        
    }

    handleCollisions() {
        // const vertCollisions = this.collisions.checkVerticalCollisions(
        //     this.object, 
        //     level.object, 
        //     this.velocity
        // );
        // if (vertCollisions 
        //     && this.velocity.y < 0 
        //     && !this.grounded
        // ) {            
        //     this.velocity.y = 0;
        //     this.object.position.y = vertCollisions;
        //     this.grounded = true;
        //     this.jumping = false;
        // } else if (!this.grounded){
        //     this.velocity.y -= TUNABLE_VARIABLES.gravity;
        // }
        // const horzontalCollisions = this.collisions.checkHorizontalCollisions(
        //     this.object, 
        //     level.object, 
        //     this.velocity
        // );
        // if (horzontalCollisions) {
        //     this.velocity.x = 0;
        //     this.velocity.z = 0;
        // }
        if (!this.horizontalCollision) {
            this.updateBBOX();
            this.addBBOX();
        }
        let collided = this.collisions.checkBBOXvArray(this.box, level.levelBBOX);
        const  {vertical, horizontal} = collided;
        if (vertical && 
            this.velocity.y <= 0
        ) {
            this.velocity.y = 0;
            this.object.position.y = vertical.point.y;
            this.grounded = true;
            this.jumping = false;
        } else {
            this.grounded = false;
        }
        if (horizontal) {
            this.velocity.x = this.velocity.x * -1;
            this.velocity.z = this.velocity.z * -1;
            this.move();
        }
        if (!this.grounded){
            this.velocity.y -= TUNABLE_VARIABLES.gravity;
        }
    }

    update(deltaTime) {
        this.totalTime += deltaTime;
        if (this.shooting) this.shootingTimer += deltaTime;
        if (!this.object) return;
        if (this.respawning) {
            this.respawnTimer += deltaTime;
        }
        if (this.respawnTimer > 2.0) {
            this.respawn();
        }
        let worldDirection = new THREE.Vector3();
        this.object.getWorldDirection(worldDirection);
        // if (this.box) this.boxHelper.update();
        this.checkY();
        this.spawnedEntities.forEach(e => e.update ? e.update(deltaTime) : console.log(''));
        if (this.mixer) this.mixer.update( deltaTime );
        if (!player.walking) {
            audioManager.stopWalking();
            this.currentAnimationName = 'idle';
            this.animations['walking'].paused = true;
        } else if (this.velocity.x !== 0 || this.velocity.z !== 0) {
            // audioManager.startWalking();
            // this.currentAnimationName = 'walking';
            // this.animations['walking'].paused = false;
            // this.animations['walking'].play();
        }
        this.hitMarkersToDelete.filter((h => {
            h.timer += deltaTime;
            if (h.timer > .15) {
                this.reticle.remove(h.object);
                return false;
            } else return true;
        }))
        this.input();
        this.move();
        this.handleCollisions();
        // this.move();
    }
}