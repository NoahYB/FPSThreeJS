class ConnectedPlayer {
    constructor(id) {
        this.id = id;
        this.loadModel();
        this.animations = {};
    }

    loadModel() {
        this.fbxLoader = new THREE.FBXLoader();
        const materialToon = new THREE.MeshToonMaterial({
            color: 'green',
        });
        this.fbxLoader.load(
            'Models/Idle.fbx',
            (object) => {
                this.object = object;
                object.isEnemy = true;
                object.c = this;
                object.scale.setScalar(.01);
                this.mixer = new THREE.AnimationMixer(object);
                const action = this.mixer.clipAction( object.animations[0] );
                action.play();
                action.clampWhenFinished = true;
                this.fbxLoader.load('Models/Walking.fbx', anim => {
                    const walk = this.mixer.clipAction( anim.animations[0] );
                    walk.clampWhenFinished = true;
                    this.animations['walking'] = walk;
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
        this.object.position.x = pos.x;
        this.object.position.y = pos.y;
        this.object.position.z = pos.z;
    }

    setQuaternion(quat) {
        if (!this.object) return;
        //First of all we create a matrix and put the rotation of the cube into it
        let rotObjectMatrix = new THREE.Matrix4();
        rotObjectMatrix.makeRotationFromQuaternion(quat);
        //Next we just have to apply a rotation to the quaternion using the created matrix
        this.object.rotation.setFromRotationMatrix(rotObjectMatrix);
    }

    update(delta) {
        this.mixer.update(delta);
    }
}