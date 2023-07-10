import { 
    AmbientLight,
    WebGLRenderer,
    PerspectiveCamera,
    DirectionalLight,
    SRGBColorSpace
 } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { VignetteShader } from './CustomPPEffect/Vignette';
import { LuminosityShader } from 'three/examples/jsm/shaders/LuminosityShader.js';
import { TUNABLE_VARIABLES } from './DataModels/TunableVariables';
import { GammaCorrectionShader } from './CustomPPEffect/GammaCorrection';

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
    renderer.outputColorSpace = SRGBColorSpace;
    document.body.appendChild( renderer.domElement );
    return renderer;
}

export function setUpPostProcessing(context) {
    const composer = new EffectComposer( context.renderer );
    const renderPass = new RenderPass( context.scene, context.camera );
    context.vignette = setUpVignette();

    composer.addPass( renderPass );
    composer.addPass( context.vignette );

    const gammeCorrection = new ShaderPass( GammaCorrectionShader );

    composer.addPass( gammeCorrection );
    return composer;
}

export function setUpVignette() {
    const effectVignette = new ShaderPass( VignetteShader );

	effectVignette.renderToScreen = true;

    return effectVignette;
}

export function setUpLights(scene) {

    const directionalLight = new DirectionalLight('white', 1 );

    directionalLight.position.set( 0, 10, 0 );

    directionalLight.target.position.set( 0, 0, 0 );


    scene.add(directionalLight);
    
    const ambientLight = new AmbientLight("white", .5);
    
    scene.add(ambientLight);
}