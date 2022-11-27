class ConnectedPlayer {
    constructor(id) {
        this.id = id;
        this.loadModel();
        this.animations = {};
        this.velocity = new THREE.Vector3(0,0,0);
        this.health = TUNABLE_VARIABLES.health;
    }

    loadModel() {
        const materialToon = new THREE.MeshLambertMaterial({
            color: 'purple',
        });
        const materialToonGun = new THREE.MeshToonMaterial({
            color: 'rgb(55, 40, 217)',
        });
        fbxLoader.load(
            'Models/PossibleCharacter.fbx',
            (object) => {
                this.object = object;

                object.scale.setScalar(.007);
                object.c = this;
                object.isEnemy = true;
                object.traverse(( child ) => {
                    child.c = this;
                    child.isEnemy = true;
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
                    if (child.isMesh) child.castShadow = true;
                }
                );
                scene.add( object );
                this.setPos(new THREE.Vector3(10,10,10))
            }, e => 1 + 1, e => console.log(e),
        )
    }

    setPos(pos) {
        if (!this.object) return;
        if (this.object.position.distanceToSquared(pos) > 3) {
            this.object.position.copy(pos);
        }
    }

    setVelocity(velocity) {
        if (!this.object) return;
        this.velocity.copy(velocity);
    }

    setTeam(teamNumber) {
        this.teamNumber = teamNumber;
        this.team = teamNumber;
        let color = teamNumber === 1 ? 'blue' : 'red'
        menu.updateScores(true);
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

    setHealth(newHealth) {
        this.health = newHealth;
    }

    move() {
        this.object.position.y += (this.velocity.y);
        this.moveForward(this.velocity.z);
        this.moveRight(this.velocity.x);
    }

    update(delta) {
        if (!this.object) return;
        this.move();
    }
}