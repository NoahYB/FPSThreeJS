class Player {
    constructor() {
        this.totalTime = 0;

        this.score = 0;

        this.movementSpeed = TUNABLE_VARIABLES.movementSpeed;
        this.jumpHeight = TUNABLE_VARIABLES.jumpHeight;
        this.health = TUNABLE_VARIABLES.health;

        this.sprinting = false;
        this.killBoundary = -30;
        this.animations = {};
        this.hitMarkersToDelete = [];
        this.grounded = false;

        // THREE.JS object
        this.object;

        this.loadModel(); 

        this.shooting = false;

        this.box;

        this.velocity = new THREE.Vector3(0,0,0);
        
        this.spawnedEntities = [];

        this.collisions = new Collisions(this);

        document.addEventListener('mousedown',this.mousedown);

        this.shootingTimer = 0;

        this.horizontalCollision = false;
    }

    onLoadFinish() {
        // this.updateBBOX();
        this.addBBOX();
        onPlayerLoad();
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
            if (teamNumber === 1) {
                this.object.position.copy(spawnLocations[0]);
            } else {
                this.object.position.copy(spawnLocations[1]);
            }
            this.object.position.y += 11;
        } else 
            this.object.position.set(20,20,0);
    }

    addBBOX() {
        this.legL = this.object.getObjectByName("LegL");
        this.legR = this.object.getObjectByName("LegR");
        this.body = this.object.getObjectByName("Body");

        this.legL.geometry.computeBoundingBox();
        this.legR.geometry.computeBoundingBox();
        this.body.geometry.computeBoundingBox();

        this.boxLegL = new THREE.OBB().fromBox3(
            this.legL.geometry.boundingBox
        );
        this.boxLegR = new THREE.OBB().fromBox3(
            this.legR.geometry.boundingBox
        );
        this.boxBody = new THREE.OBB().fromBox3(
            this.body.geometry.boundingBox
        );
    }

    updateBBOX() {
        this.boxLegL.applyMatrix4(this.legL.matrixWorld);
        this.boxLegR.applyMatrix4(this.legR.matrixWorld);
        this.boxBody.applyMatrix4(this.body.matrixWorld);
    }

    loadModel() {
        const materialToon = new THREE.MeshToonMaterial({
            color: '#873E23',
        });
        const materialToonGun = new THREE.MeshToonMaterial({
            color: 'rgb(55, 40, 217)',
        });
        fbxLoader.load(
            'Models/PossibleCharacter.fbx',
            (object) => {
                camera.add(object);
                this.object = object;

                object.scale.setScalar(.007);
                object.c = this;

                object.traverse(( child ) => {
                    child.c = this;
                    if (child.name.includes('Gun')) {
                        if (child.name === 'Gun') {
                            this.gunBarrel = child;
                        }
                        child.material = materialToonGun;
                        child.castShadow = true;
                    }
                    else if ( child.isMesh ) {
                        child.material = materialToon;
                        child.castShadow = true;
                    }
                    if (child.name === 'RightShoulder') {
                        this.rightArm = child;
                    }
                }
                );
                this.onLoadFinish();
                scene.add( object );
            }, e => 1 + 1, e => console.log(e),
        )
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

        this.shooting = true;

        this.gunBarrel.updateMatrixWorld(true);

        let dir = new THREE.Vector3(0,0,0);

        camera.getWorldDirection(dir);

        let gunPosition = new THREE.Vector3();
        this.gunBarrel.getWorldPosition(gunPosition);

        const bullet = new Bullet(gunPosition, dir.multiplyScalar(10000), player);

        this.spawnedEntities.push(bullet);

        this.shooting = true;
    }

    remove(entity) {
        this.spawnedEntities = this.spawnedEntities.filter(e => {
            e !== entity;
        })
    }

    death() {
        this.object.position.copy(new THREE.Vector3(0,-1000,0));
        this.startRespawn();
    }

    startRespawn() {
        this.respawnTimer = 0;
        this.respawning = true;
    }

    push(v) {
        this.object.position.x += v.x;
        this.object.position.z += v.z;
    }

    move() {
        this.object.position.y += this.velocity.y;
        controls.moveForward(this.velocity.z);
        controls.moveRight(this.velocity.x);
    }

    setTeam() {

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
        
        this.sprinting = keys['shift'] ? true : false;
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
        if (!this.boxLegL) return;
        if (!this.horizontalCollision) {
            // this.updateBBOX();
            this.addBBOX();
        }
        this.updateBBOX();
        let verticalCollisionsL = this.collisions.checkBBOXvArray(this.boxLegL, level.levelBBOX, true);
        let verticalCollisionsR = this.collisions.checkBBOXvArray(this.boxLegR, level.levelBBOX, true);
        let horizontalCollision = this.collisions.checkBBOXvArray(this.boxBody, level.levelBBOX, false);

        let vertical = verticalCollisionsL || verticalCollisionsR;

        const oldPosition = this.object.position.clone();
        this.move();

        // pos - wall
        if (vertical && 
            this.velocity.y <= 0
        ) {
            this.velocity.y = 0;
            this.object.position.y = vertical.point.y + this.boxLegL.halfSize.z - .1;
            this.grounded = true;
            this.jumping = false;
        } else {
            this.grounded = false;
        }

        if (horizontalCollision) {
            const playerPos = this.object.position.clone();
            playerPos.y = horizontalCollision.object.position.y;
            const dir = playerPos.clone()
                .sub(horizontalCollision.object.position)
            const face = this.collisions.getFace(
                dir, 
                horizontalCollision.object.position,
                horizontalCollision.object
            )
            const collisionDepth = oldPosition.distanceTo(this.object.position);
            this.push(face.normal.multiplyScalar(collisionDepth));
            
        } else {

        }
        
        if (!this.grounded){
            this.velocity.y -= TUNABLE_VARIABLES.gravity;
        }
    }

    moveRightArm() {
        if (!this.rightArm) return;

        let dir = new THREE.Vector3(0,0,0);

        camera.getWorldDirection(dir);

        this.rightArm.lookAt(dir.multiplyScalar(300));

        this.rightArm.rotateX(-Math.PI / 180 * 90);
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
        this.moveRightArm();
        let worldDirection = new THREE.Vector3();
        this.object.getWorldDirection(worldDirection);
        this.checkY();
        this.spawnedEntities.forEach(e => e.update ? e.update(deltaTime) : console.log(''));
        if (this.mixer) this.mixer.update( deltaTime );
        this.hitMarkersToDelete.filter((h => {
            h.timer += deltaTime;
            if (h.timer > .15) {
                this.reticle.remove(h.object);
                return false;
            } else return true;
        }))
        this.input();
        this.handleCollisions();
    }
}