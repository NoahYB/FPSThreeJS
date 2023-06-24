import { OBB } from 'three/addons/math/OBB.js';
import { randomSpherePoint, showOBB } from '../Utilities';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GlobalGame } from '../Game';
import {
    Vector3,
    Group,
    TextureLoader,
    Color,
    SphereGeometry,
    MeshBasicMaterial,
    Mesh,
    MeshPhongMaterial,
    CubeTextureLoader,
    PlaneGeometry,
    BoxGeometry,
    MeshToonMaterial,
    MeshLambertMaterial,
    DoubleSide,
    Box3
} from 'three';
export class Level {
    
    constructor(RAPIER) {
        this.gltfLoader = GlobalGame.gltfLoader;
        this.spawnLocations = [];
        this.levelObjects = [];
        this.levelBBOX = [];
        this.center = new Group();
        this.loadBackgroundColor();
        this.loadStars(100);
        this.loadLevelObj();
        this.RAPIER = RAPIER;
    }
    
    loadCameraTexture() {
        const loader = new TextureLoader();
        GlobalGame.scene.background = loader.load( 'Textures/original.png' );
    }

    loadBackgroundColor() {
        const loader = new TextureLoader();
        GlobalGame.scene.background = new Color('rgba(55,10,120)');
    }

    loadStars(n) {
        for (let i = 0; i < n; i++) {
            const d = Math.max(100, 1000 * Math.random());
            const randomPoint = randomSpherePoint(0,0,0,d);
            const geometry = new SphereGeometry(1, 10, 10); 
            const material = new MeshBasicMaterial({ 
                color: '#28ebdb'
            });
            const sphere = new Mesh( geometry, material );
            sphere.position.copy(randomPoint);
            sphere.scale.setScalar(Math.random());
            this.center.add(sphere);
        }
        GlobalGame.scene.add(this.center);
    }

    loadSkySphere() {
        const geometry = new SphereGeometry(1000, 25, 25); 
        const loader  = new TextureLoader();
        const texture = loader.load( "Textures/sky.jpeg" );
        const material = new MeshPhongMaterial({ 
            map: texture,
            side: BackSide,
        });
        const sphere = new Mesh( geometry, material );
        sphere.rotateZ(Math.PI / 2)
        GlobalGame.scene.add(sphere);
    }

    loadSkyBox() {
        GlobalGame.scene.background = new CubeTextureLoader()
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
        GlobalGame.scene.background = new CubeTextureLoader()
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
        const groundGeometry = new PlaneGeometry( 30, 30 );
        const groundMaterial = new MeshPhongMaterial( {color: '#564E58', side: DoubleSide} );
        const ground = new Mesh( groundGeometry, groundMaterial );
        this.object = ground;
        ground.rotateX(Math.PI / 2);
        GlobalGame.scene.add(ground);
        this.levelObjects.push(ground);
        const geometry = new BoxGeometry( 5, 5, 5 );
        const material = new MeshPhongMaterial( {color: '#904E55'} );
        const cube = new Mesh( geometry, material );
        this.levelObjects.push(cube);
        GlobalGame.scene.add( cube );
    }

    loadSimpleLevel() {
        const groundGeometry = new PlaneGeometry( 1000, 1000 );
        const groundMaterial = new MeshLambertMaterial( {color: 0x25710D, side: DoubleSide} );
        const ground = new Mesh( groundGeometry, groundMaterial );
        this.object = ground;
        this.levelObjects.push(ground);
        ground.rotateX(Math.PI / 2);
        GlobalGame.scene.add(ground);
    }
    
    loadLevelObj() {
        // FOR TESTING HITBOXES
        // const geometry = new BoxGeometry( 5, 5, 5 );
        const materialToon = new MeshToonMaterial({
            color: 'grey',
        });
        // const cube = new Mesh( geometry, material );
        // cube.isEnemy = true;
        // cube.position.x = 20;
        // cube.position.z  = 20;
        // GlobalGame.scene.add(cube);
        this.gltfLoader.load(
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
                            this.spawnLocations.push(child.position);
                        } else {
                            new Box3().setFromObject(child);

                            child.geometry.computeBoundingBox();
                            
                            const obb = new OBB().fromBox3(
                                child.geometry.boundingBox,
                            );

                            obb.applyMatrix4(child.matrixWorld);

                            showOBB(obb, child, GlobalGame.scene);

                            // Create a dynamic rigid-body.
                            let rigidBodyDesc = this.RAPIER.RigidBodyDesc.fixed()
                                .setTranslation(object.position.x, object.position.y, object.position.z);

                            let rigidBody = world.createRigidBody(rigidBodyDesc);

                            // Create a cuboid collider attached to the dynamic rigidBody.
                            let colliderDesc = RAPIER.ColliderDesc.cuboid(0.5, 0.5, 0.5);
                            let collider = world.createCollider(colliderDesc, rigidBody);

                            this.levelBBOX.push( {
                                object: child,
                                box: obb,
                                collider: collider,
                            });
                            child.obb = obb;
                            this.levelObjects.push(child);
                        }
                    }
                });
                GlobalGame.scene.add(this.object);
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