class Level {
    constructor(scene) {
        this.loadLevelObj();
    }
    loadSimpleLevel() {
        const groundGeometry = new THREE.PlaneGeometry( 1000, 1000 );
        const groundMaterial = new THREE.MeshLambertMaterial( {color: 0x25710D, side: THREE.DoubleSide} );
        const ground = new THREE.Mesh( groundGeometry, groundMaterial );
        this.object = ground;

        ground.rotateX(Math.PI / 2);
        const ground2Geometry = new THREE.PlaneGeometry( 1, 1 );
        const ground2Material = new THREE.MeshLambertMaterial( {color: 'red', side: THREE.DoubleSide} );
        const ground2 = new THREE.Mesh( ground2Geometry, ground2Material );
        this.object = ground;
        scene.add(ground2);
        scene.add(ground);
    }
    loadLevelObj() {
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
                        color: 'salmon',    // red (can also use a CSS color string here)
                        flatShading: true,
                      });
					child.castShadow = true;
					child.receiveShadow = true;
                    child.geometry.computeVertexNormals();
				});
        });
    }
}