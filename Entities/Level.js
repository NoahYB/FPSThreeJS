class Level {
    constructor(scene) {
        this.levelObjects = [];
        this.loadLevelObj();
        this.loadCameraTexture();
    }
    
    loadCameraTexture() {
        const loader = new THREE.TextureLoader();
        scene.background = loader.load( 'Textures/original.png' );
    }

    loadSkyBox() {
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
    loadLevelFBXs() {
        const manager = new THREE.LoadingManager();
        // add handler for TGA textures
        manager.addHandler( /\.tga$/i, new THREE.TGALoader() );
        this.fbxLoader = new THREE.FBXLoader(manager);
        this.fbxLoader.load(
            'Models/Island/source/Rocks.fbx',
            (object) => {
                this.object = object;
                scene.add( object );
                object.children[0].traverse( function ( child ) {
                    child.material = new THREE.MeshPhongMaterial({
                        color: 'salmon',
                        flatShading: true,
                      });
					child.castShadow = true;
					child.receiveShadow = true;
                    child.geometry.computeVertexNormals();
				});
        }, (e => 1+1), (e=> 1+1));
    }
    loadLevelObj() {
        const geometry = new THREE.BoxGeometry( 5, 5, 5 );
        const material = new THREE.MeshPhongMaterial( {color: '#904E55'} );
        const cube = new THREE.Mesh( geometry, material );
        cube.isEnemy = true;
        cube.position.x = 20;
        cube.position.z  = 20;
        scene.add(cube);
        const toon = new THREE.MeshPhongMaterial({color:'grey', map: undefined});
        gltfLoader.load(
            // resource URL
            'Models/Level.gltf',
            // called when resource is loaded
            ( level )  => {
                this.object = level.scene;
                this.object.traverse(( child ) => {
                    if ( child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                        child.material = toon;
                        if (child.name === 'Cube') {
                            child.receiveShadow = true;
                            child.castShadow = false;
                            const green = new THREE.MeshPhongMaterial(
                                {
                                    color:'brown',
                                }
                            );
                            child.material = green;
                        }
                        this.levelObjects.push(child);
                        child.material.shininess = 0;
                    }
                });
                this.object.scale.multiplyScalar(10);
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
    animate()
    {
        // angle += 0.01;
        // pointLight.position.set (50*Math.cos(angle), 75, 50*Math.sin(angle));
        // // update the uniform variable
        // teapotMaterial.uniforms.lightpos.value.copy (pointLight.position);
        // lightmodel.position.copy (pointLight.position);
        // requestAnimationFrame ( animate );  
    }
}