import { 
    PointLight,
    AmbientLight,
    WebGLRenderer,
    PerspectiveCamera,
    PCFSoftShadowMap,
    DirectionalLight,
    OrthographicCamera,
    NearestFilter,
    RGBAFormat,
    WebGLRenderTarget
 } from 'three';
 import { TUNABLE_VARIABLES } from './DataModels/TunableVariables';

export function setUpCamera() {
    const camera = new PerspectiveCamera(
        TUNABLE_VARIABLES.FOV,
        window.innerWidth / window.innerHeight,
        .1,
        10000
    );
    camera.position.z = 5;
    camera.position.y += .7;
    camera.fov = 120;
    camera.updateProjectionMatrix();
    camera.rotateY(180 * Math.PI / 180);
    camera.position.y -= 1;
    return camera;
}

export function setUpRenderer() {
    const renderer = new WebGLRenderer();

    renderer.setSize( window.innerWidth , window.innerHeight );
    document.body.appendChild( renderer.domElement );
    return renderer;
}

export function setUpLights(scene) {

    const directionalLight = new DirectionalLight('white', 1 );

    directionalLight.position.set( 0, 10, 0 );

    directionalLight.target.position.set( 0, 0, 0 );


    scene.add(directionalLight);
    
    const ambientLight = new AmbientLight("white", .5);
    
    scene.add(ambientLight);
}