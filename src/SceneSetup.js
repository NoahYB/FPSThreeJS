import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { GlobalGame } from './Game';
import { 
    PointLight,
    AmbientLight,
    WebGLRenderer,
    PerspectiveCamera,
    PCFSoftShadowMap
 } from 'three';

export function setUpCamera() {
    const camera = new PerspectiveCamera(
        TUNABLE_VARIABLES.FOV,
        window.innerWidth / window.innerHeight,
        .1,
        10000
    );
    GlobalGame.scene.add(camera);
    camera.position.z = 5;
    camera.position.y += .7;
    camera.fov = 120;
    camera.updateProjectionMatrix();
    return camera;
}

export function setUpRenderer() {
    const renderer = new WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.setSize( window.innerWidth , window.innerHeight  );
    document.body.appendChild( renderer.domElement );
    return renderer;
}

export function setUpLights() {

    const spotLight = new PointLight( 'white', .4 );
    spotLight.position.set( 30, 100, 0 );
    spotLight.rotateZ(3.14 / 4)
    spotLight.shadowMapWidth = 4096;
    spotLight.shadowMapHeight = 4096;
    spotLight.castShadow = true;
    GlobalGame.scene.add(spotLight);
    
    const ambientLight = new AmbientLight("white", .5);
    
    GlobalGame.scene.add(ambientLight);
}