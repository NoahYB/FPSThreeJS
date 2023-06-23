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

        this.inventory = new Inventory();
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
            if (this.team === 'team1') {
                this.object.position.copy(spawnLocations[0]);
            } else {
                this.object.position.copy(spawnLocations[1]);
            }
            this.object.position.y += 11;
        } else 
            this.object.position.set(20,20,0);
        cameraController.setFollowedObject(player);
        TUNABLE_VARIABLES.thirdPerson = false;
        this.health = TUNABLE_VARIABLES.health;
        hud.updateHealthBar(this.health);
        if (hud) hud.onRespawn();
    }

    addBBOX() {
        this.legL = this.object.getObjectByName("LegL");
        this.legR = this.object.getObjectByName("LegR");
        this.body = this.object.getObjectByName("Body");

        this.legL.geometry.computeBoundingBox();
        this.legR.geometry.computeBoundingBox();
        this.collisionBox.geometry.computeBoundingBox();

        this.boxLegL = new THREE.OBB().fromBox3(
            this.legL.geometry.boundingBox
        );
        this.boxLegR = new THREE.OBB().fromBox3(
            this.legR.geometry.boundingBox
        );
        this.boxBody = new THREE.OBB().fromBox3(
            this.collisionBox.geometry.boundingBox
        );
    }

    updateBBOX() {
        this.boxLegL.applyMatrix4(this.legL.matrixWorld);
        this.boxLegR.applyMatrix4(this.legR.matrixWorld);
        this.boxBody.applyMatrix4(this.collisionBox.matrixWorld);
    }

    loadModel() {
        const materialToon = new THREE.MeshToonMaterial({
            color: 'red',
        });
        const materialToonGun = new THREE.MeshToonMaterial({
            color: 'rgb(55, 40, 217)',
        });
        fbxLoader.load(
            'Models/PossibleCharacter2.fbx',
            (object) => {
                camera.add(object);
                this.object = object;

                object.scale.setScalar(.007);
                object.c = this;

                object.traverse(( child ) => {
                    child.c = this;
                    if ( child.isMesh ) {
                        child.material = materialToon;
                        child.castShadow = true;
                    }
                    if (child.name === 'RightShoulder') {
                        this.rightArm = child;
                    }
                    if (child.name === 'CollisionBox') {
                        this.collisionBox = child;
                    }
                }
                );
                this.onLoadFinish();
                scene.add( object );
                console.log(this.collisionBox);
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
        let v = new THREE.Vector3();
        camera.getWorldDirection(v);
        for ( let i = 0; i < intersects.length; i ++ ) {
            const object = intersects[ i ].object;
            if (object.isEnemy && object.c.team !== player.team) {
                player.hitMarker();
                let headshot = (object.name === 'Cube001');
                webSocketHandler.sendMessage({
                    action: 'HIT',
                    directionOfShot: v,
                    headshot,
                    interactedId: object.c.id,
                    team: teamNumber,
                })
                audioManager.hit();
                break;
            }
            else if (object) return;

        }
        webSocketHandler.sendMessage({
            action: 'SHOT',
            directionOfShot: v,
            text: 'connected',
        })
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
        this.inventory.equippedItem.fire();
    }

    remove(entity) {
        this.spawnedEntities = this.spawnedEntities.filter(e => {
            e !== entity;
        })
    }

    death(whoKilledPlayer) {
        if (this.respawning) return;
        this.object.position.set(0,-10000,0);
        // cameraController.panTowards(whoKilledPlayer, .0072);
        webSocketHandler.sendMessage({
            pointAwardedTo : whoKilledPlayer.id,
            team : whoKilledPlayer.team,
            action: 'CONFIRM_KILL'
        })
        TUNABLE_VARIABLES.thirdPerson = true;
        this.startRespawn();
        hud.onDeath();
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

    onHit(headshot, enemy) {
        if (headshot) this.health -= TUNABLE_VARIABLES.headShotDamage;
        else this.health -= TUNABLE_VARIABLES.shotDamage;
        hud.updateHealthBar(this.health);
        this.timeSinceLastHit = 0.00;
        if (this.health <= 0) this.death(enemy);
    }

    explosionDamage(pos, enemy, explosionRadius) {
        const d = this.object.position.distanceTo(pos) 
            - (this.object.position.y - pos.y);
        if (d > explosionRadius) return;
        const damageFactor = 1 / (d *  d)
        if (enemy.id === this.id) {
            this.health -= 10;
        }
        else this.health -= damageFactor + 20;
        hud.updateHealthBar(this.health);
        this.timeSinceLastHit = 0.00;
        if (this.health <= 0) this.death(enemy);
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
        if (!this.boxLegL || this.respawning) return;
        if (!this.horizontalCollision) {
            // this.updateBBOX();
            this.addBBOX();
        }
        this.updateBBOX();
        let verticalCollisionsL = this.collisions.checkBBOXvArray(this.boxLegL, level.levelBBOX, true);
        let verticalCollisionsR = this.collisions.checkBBOXvArray(this.boxLegR, level.levelBBOX, true);
        let horizontalCollisions = this.collisions.checkBBOXvArray(this.boxBody, level.levelBBOX, false);

        let vertical = verticalCollisionsL || verticalCollisionsR;

        const oldPosition = this.object.position.clone();
        this.move();

        // pos - wall
        if (vertical && 
            this.velocity.y <= 0
        ) {
            this.velocity.y = 0;
            const ground = this.collisions.getGroundHeight(vertical.mesh, this.boxLegL.center);
            if (ground)
                this.object.position.y = ground.y + this.boxLegL.halfSize.z;
            this.grounded = true;
            this.jumping = false;
        } else {
            this.grounded = false;
        }

        if (horizontalCollisions) {
            horizontalCollisions.forEach(horizontalCollision => {
                console.log(horizontalCollision);
                const playerPos = this.boxBody.center.clone();
                const f = horizontalCollision.object.position.clone();
                const dir = f.sub(playerPos.clone()).normalize();
                // showVector(dir, playerPos);

                const face = this.collisions.getFace(
                    dir, 
                    playerPos,
                    horizontalCollision.object
                )
                // console.log(face);
                if (face) {
                    const collisionDepth = oldPosition.distanceTo(this.object.position);
                    this.push(face.normal.multiplyScalar(collisionDepth));
                }
            }) 
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

        this.rightArm.lookAt(dir.multiplyScalar(10000000000));

        this.rightArm.rotateX(-Math.PI / 180 * 90);
    }

    update(deltaTime) {
        this.totalTime += deltaTime;
        if (this.shooting) this.shootingTimer += deltaTime;
        if (!this.object) return;
        if (this.respawning) {
            this.respawnTimer += deltaTime;
            hud.respawnTimer(TUNABLE_VARIABLES.respawnTime - this.respawnTimer);
        }
        if (this.respawnTimer > TUNABLE_VARIABLES.respawnTime) {
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