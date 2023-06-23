class Level {
    constructor(scene) {
        this.levelObjects = [];
        this.levelBBOX = [];
        this.center = new THREE.Group();
        this.loadBackgroundColor();
        this.loadStars(100);
        this.loadLevelObj();
    }
    
    loadCameraTexture() {
        const loader = new THREE.TextureLoader();
        scene.background = loader.load( 'Textures/original.png' );
    }

    loadBackgroundColor() {
        const loader = new THREE.TextureLoader();
        scene.background = new THREE.Color('rgba(55,10,120)');
    }

    loadStars(n) {
        for (let i = 0; i < n; i++) {
            const d = Math.max(100, 1000 * Math.random());
            const randomPoint = randomSpherePoint(0,0,0,d);
            const geometry = new THREE.SphereGeometry(1, 10, 10); 
            const material = new THREE.MeshBasicMaterial({ 
                color: '#28ebdb'
            });
            const sphere = new THREE.Mesh( geometry, material );
            sphere.position.copy(randomPoint);
            sphere.scale.setScalar(Math.random());
            this.center.add(sphere);
        }
        scene.add(this.center);
    }

    loadSkySphere() {
        const geometry = new THREE.SphereGeometry(1000, 25, 25); 
        const loader  = new THREE.TextureLoader();
        const texture = loader.load( "Textures/sky.jpeg" );
        const material = new THREE.MeshPhongMaterial({ 
            map: texture,
            side: THREE.BackSide,
        });
        const sphere = new THREE.Mesh( geometry, material );
        sphere.rotateZ(Math.PI / 2)
        scene.add(sphere);
    }

    loadSkyBox() {
        scene.background = new THREE.CubeTextureLoader()
        .setPath( 'Textures/interstellar_skybox/' )
        .load( [
            'xpos.png',
            'xneg.png',
            'ypos.png',
            'yneg.png',
            'zpos.png',
            'zneg.png'
        ] );
    }

    loadSkyBox2() {
        scene.background = new THREE.CubeTextureLoader()
        .setPath( 'Textures/SkyboxTextures/' )
        .load( [
            'lf.png',
            'rt.png',
            'up.png',
            'dn.png',
            'ft.png',
            'bk.png'
        ] );
    }

    loadComplexLevel() {
        const groundGeometry = new THREE.PlaneGeometry( 30, 30 );
        const groundMaterial = new THREE.MeshPhongMaterial( {color: '#564E58', side: THREE.DoubleSide} );
        const ground = new THREE.Mesh( groundGeometry, groundMaterial );
        this.object = ground;
        ground.rotateX(Math.PI / 2);
        scene.add(ground);
        this.levelObjects.push(ground);
        const geometry = new THREE.BoxGeometry( 5, 5, 5 );
        const material = new THREE.MeshPhongMaterial( {color: '#904E55'} );
        const cube = new THREE.Mesh( geometry, material );
        this.levelObjects.push(cube);
        scene.add( cube );
    }

    loadSimpleLevel() {
        const groundGeometry = new THREE.PlaneGeometry( 1000, 1000 );
        const groundMaterial = new THREE.MeshLambertMaterial( {color: 0x25710D, side: THREE.DoubleSide} );
        const ground = new THREE.Mesh( groundGeometry, groundMaterial );
        this.object = ground;
        this.levelObjects.push(ground);
        ground.rotateX(Math.PI / 2);
        scene.add(ground);
    }
    
    loadLevelObj() {
        // FOR TESTING HITBOXES
        // const geometry = new THREE.BoxGeometry( 5, 5, 5 );
        const materialToon = new THREE.MeshToonMaterial({
            color: 'grey',
        });
        // const cube = new THREE.Mesh( geometry, material );
        // cube.isEnemy = true;
        // cube.position.x = 20;
        // cube.position.z  = 20;
        // scene.add(cube);
        gltfLoader.load(
            // resource URL
            'Models/Map.gltf',
            // called when resource is loaded
            ( level )  => {
                this.object = level.scene;
                this.object.traverse(( child ) => {
                    if ( child.isMesh) {
                        if (child.name === 'Ground') {
                            //child.material = materialToon;
                            child.receiveShadow = true;
                            child.castShadow = false;
                        }
                        if (child.name.startsWith('Spawn')) {
                            spawnLocations.push(child.position);
                        } else {
                            new THREE.Box3().setFromObject(child);

                            child.geometry.computeBoundingBox();
                            
                            const obb = new THREE.OBB().fromBox3(
                                child.geometry.boundingBox,
                            );

                            obb.applyMatrix4(child.matrixWorld);

                            showOBB(obb, child);

                            this.levelBBOX.push( {
                                object: child,
                                box: obb
                            });
                            child.obb = obb;
                            this.levelObjects.push(child);
                        }
                    }
                });
                scene.add(this.object);
            },
            function ( xhr ) {

                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        
            },
            // called when loading has errors
            function ( error ) {
        
                console.log( 'An error happened' );
        
            }
        );
    }
    update(deltaTime)
    {
        this.center.rotateY(.01 * deltaTime);
    }
}