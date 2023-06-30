import { OBB } from 'three/addons/math/OBB.js';
import { createCollisionMask, getAABBHalfSize, randomSpherePoint, showOBB, showRapierCollider, threeVectorToRapier } from '../Utilities';
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
    
    constructor(RAPIER, scene, physicsWorld, gltfLoader) {

        this.scene = scene;
        this.gltfLoader = gltfLoader;
        this.RAPIER = RAPIER;
        this.physicsWorld = physicsWorld;
        this.spawnLocations = [];
        this.levelObjects = [];
        this.levelBBOX = [];
        this.center = new Group();


        this.loadBackgroundColor();
        this.loadStars(100);
        this.loadLevelObj();
    }
    
    loadCameraTexture() {
        const loader = new TextureLoader();
        this.scene.background = loader.load( 'Textures/original.png' );
    }

    loadBackgroundColor() {
        const loader = new TextureLoader();
        this.scene.background = new Color('rgba(0,10,10)');
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
        this.scene.add(this.center);
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
        this.scene.add(sphere);
    }

    loadSkyBox() {
        this.scene.background = new CubeTextureLoader()
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
        this.scene.background = new CubeTextureLoader()
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
        this.scene.add(ground);
        this.levelObjects.push(ground);
        const geometry = new BoxGeometry( 5, 5, 5 );
        const material = new MeshPhongMaterial( {color: '#904E55'} );
        const cube = new Mesh( geometry, material );
        this.levelObjects.push(cube);
        this.scene.add( cube );
    }

    loadSimpleLevel() {
        const groundGeometry = new PlaneGeometry( 1000, 1000 );
        const groundMaterial = new MeshLambertMaterial( {color: 0x25710D, side: DoubleSide} );
        const ground = new Mesh( groundGeometry, groundMaterial );
        this.object = ground;
        this.levelObjects.push(ground);
        ground.rotateX(Math.PI / 2);
        this.scene.add(ground);
    }
    
    loadLevelObj() {
        this.gltfLoader.load(
            // resource URL
            '../Models/Map3.gltf',
            // called when resource is loaded
            ( level )  => {
                this.object = level.scene;
                this.object.castShadow = true;
                level.scene.updateMatrixWorld( true );
                this.object.traverse(( child ) => {
                    if ( child.isMesh) {
                        if (child.name.startsWith('Spawn')) {
                            this.spawnLocations.push(child.position);
                        } else {
                            child.castShadow = true;

                            child.geometry.computeBoundingBox();
                            
                            child.updateMatrixWorld( true );
                            
                            let halfSize = getAABBHalfSize(child.geometry.boundingBox);

                            halfSize.x *= child.scale.x;
                            halfSize.y *= child.scale.y;
                            halfSize.z *= child.scale.z;

                            // Create a cuboid collider attached to the dynamic rigidBody.
                            let colliderDesc = new this.RAPIER.ColliderDesc(
                                new this.RAPIER.Cuboid(halfSize.x, halfSize.y, halfSize.z))
                                .setTranslation(child.position.x, child.position.y, child.position.z)
                                .setRotation(child.quaternion)
                                .setFriction(0.1)
                                .setCollisionGroups(0x00010007);

                            let collider = this.physicsWorld.createCollider(colliderDesc);
                        }
                        if (child.name === 'Ground') {
                            child.receiveShadow = true;
                            
                            child.castShadow = false;
                        }
                    }
                });
                this.scene.add(this.object);
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