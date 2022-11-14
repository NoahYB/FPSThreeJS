function setUpCamera() {
    const camera = new THREE.PerspectiveCamera(
        TUNABLE_VARIABLES.FOV,
        window.innerWidth / window.innerHeight,
        .1,
        10000
    );
    scene.add(camera);
    camera.position.z = 5;
    camera.position.y += .7;
    camera.fov = 120;
    camera.updateProjectionMatrix();
    return camera;
}

function setUpRenderer() {
    const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    return renderer;
}

function setUpLights() {
    const spotLight = new THREE.PointLight( 'white', .5 );
    spotLight.position.set( 0, 100, 0 );
    spotLight.rotateZ(3.14 / 4)
    spotLight.shadowMapWidth = 4096;
    spotLight.shadowMapHeight = 4096;
    spotLight.castShadow = true;
    scene.add(spotLight);
    
    const ambientLight = new THREE.AmbientLight("salmon", .3);
    
    scene.add(ambientLight);
}

function onPlayerLoad() {
    controls = new THREE.PointerLockControls( player.object, renderer.domElement );
    controls.addEventListener( 'lock', function () {
        if (menuOpened) {
            controls.unlock();
        }
        menu.hide();
    } );
    controls.addEventListener( 'unlock', function () {
        menu.show();
        Object.keys(keys).forEach(key => {
            keys[key] = false;
        })
    } );
    let head = player.object.getObjectByName('mixamorigHead');
    let headPosition = new THREE.Vector3();
    head.getWorldPosition(headPosition);
    // player.object.add(camera);
    camera.rotateY(180 * Math.PI / 180);
    camera.position.y -= 1;
}