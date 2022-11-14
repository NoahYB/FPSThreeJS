class ConnectedPlayer {
    constructor(id) {
        this.id = id;
        this.loadModel();
        this.animations = {};
        this.velocity = new THREE.Vector3(0,0,0);
    }

    addBoundingVolume() {
        const geometryHead = this.id === 0 ?
        new THREE.BoxGeometry( 2, 2, 2 ):
         new THREE.BoxGeometry( 1, 1, 1 );
        const materialHead = new THREE.MeshToonMaterial( {color: '#42F58C'} );
        this.cubeHead = new THREE.Mesh( geometryHead, materialHead );
        this.head = this.object.getObjectByName('mixamorigHead');
        this.head.add(this.cubeHead);
        this.cubeHead.name = 'headshot';
        this.cubeHead.c = this;
        //inverse of player scale
        let outlineMaterial2 = new THREE.MeshToonMaterial( 
            { 
                color: '#FF5D52', 
                side: THREE.BackSide 
            }
        );
        let outlineMesh2 = new THREE.Mesh( geometryHead, outlineMaterial2 );
        outlineMesh2.scale.multiplyScalar(1.15);
        this.cubeHead.add( outlineMesh2 );
        this.cubeHead.scale.setScalar(1/.03);
        this.cubeHead.isEnemy = true;
        this.cubeHead.castShadow = true;

        const spotLight = new THREE.SpotLight( 0xffffff, .3 );
        spotLight.castShadow = false;
        spotLight.target = this.cubeHead;
        spotLight.angle = Math.PI/6;
        this.cubeHead.add(spotLight);
        spotLight.position.y += 8;
        spotLight.castShadow = true;
    }

    loadModel() {
        const materialToon = new THREE.MeshToonMaterial({
            color: '#FF5D52',
        });
        fbxLoader.load(
            'Models/Idle.fbx',
            (object) => {
                this.object = object;
                object.isEnemy = true;
                object.c = this;
                object.scale.setScalar(.03);
                this.head = object.getObjectByName('mixamorigHead');
                if (this.id === 0) {
                    this.setPos(new THREE.Vector3(0,-5.5,40));
                }
                this.mixer = new THREE.AnimationMixer(object);
                const action = this.mixer.clipAction( object.animations[0] );
                // action.play();
                action.clampWhenFinished = true;
                fbxLoader.load('Models/Walking.fbx', anim => {
                    const walk = this.mixer.clipAction( anim.animations[0] );
                    walk.clampWhenFinished = true;
                    this.animations['walking'] = walk;
                    fbxLoader.load('Models/Death.fbx', anim => {
                        const death = this.mixer.clipAction( anim.animations[0] );
                        death.loop = THREE.LoopOnce;
                        death.startAt(.2);
                        death.clampWhenFinished = true;
                        this.animations['death'] = death;
                    })
                }, e => 1 + 1, e => console.log(e));
                object.traverse(( child ) => {
                    child.isEnemy = true;
                    child.c = this;
                    if ( child.isMesh ) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        child.material = materialToon;
                    }
                } );
                this.addBoundingVolume();
                scene.add( object );
            }, e => 1 + 1, e => console.log(e),
        )
    }

    setAnimState(stateName) {
        if (!this.animations) return;
        if (stateName !== 'walking') {
            this.animations['walking'].paused = true;
        } else {
            this.animations['walking'].paused = false;
            this.animations['walking'].play();
        }
    }

    setPos(pos) {
        if (!this.object) return;
        // this.object.position.x = pos.x;
        // this.object.position.y = pos.y;
        // this.object.position.z = pos.z;
        if (this.object.position.distanceToSquared(pos) > 3) {
            this.object.position.x = pos.x;
            this.object.position.y = pos.y;
            this.object.position.z = pos.z;
        }
    }

    setVelocity(velocity) {
        if (!this.object) return;
        this.velocity.copy(velocity);
    }

    setTeam(teamNumber) {
        this.teamNumber = teamNumber;
        let color = teamNumber === 1 ? 'red' : 'blue'
        this.object.traverse(c => {
            if (c.isMesh) {
                c.material.color.set(color);
            }
        })
    }

    setQuaternion(quat) {
        if (!this.object) return;
        //First of all we create a matrix and put the rotation of the cube into it
        let rotObjectMatrix = new THREE.Matrix4();
        rotObjectMatrix.makeRotationFromQuaternion(quat);
        //Next we just have to apply a rotation to the quaternion using the created matrix
        this.object.rotation.setFromRotationMatrix(rotObjectMatrix);
    }

    moveForward( distance ) {
        let _vector = new THREE.Vector3();
        // move forward parallel to the xz-plane
        // assumes player.up is y-up
        _vector.setFromMatrixColumn( this.object.matrix, 0 );

        _vector.crossVectors( this.object.up, _vector );

        this.object.position.addScaledVector( _vector, distance );

    };

    moveRight( distance ) {

        let _vector = new THREE.Vector3();

        _vector.setFromMatrixColumn( this.object.matrix, 0 );

        this.object.position.addScaledVector( _vector, distance );

    };

    setLookQuaternion(quat) {
        if (!this.head) return;
        //First of all we create a matrix and put the rotation of the cube into it
        let rotObjectMatrix = new THREE.Matrix4();
        rotObjectMatrix.makeRotationFromQuaternion(quat);
        //Next we just have to apply a rotation to the quaternion using the created matrix
        this.head.rotation.setFromRotationMatrix(rotObjectMatrix);
    }

    move() {
        this.object.position.y += (this.velocity.y);
        this.moveForward(this.velocity.z);
        this.moveRight(this.velocity.x);
    }

    update(delta) {
        if (!this.object) return;
        this.move();
        const head = this.object.getObjectByName('mixamorigHead');
        let headPosition = new THREE.Vector3();
        head.getWorldPosition(headPosition);
        this.mixer.update(delta);
    }
}