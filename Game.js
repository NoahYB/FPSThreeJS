
const loadingManager = new THREE.LoadingManager();
const fbxLoader = new THREE.FBXLoader(loadingManager);
const objLoader = new THREE.OBJLoader(loadingManager);
const gltfLoader = new THREE.GLTFLoader(loadingManager);
const audioManager = new AudioManager();

let menuOpened = false;
let spawnLocations = [];
let menu;
let webSocketHandler;

let scene;
let camera;
let cameraController;
let renderer;
let postProcessing;

let controls;
let player;
let hud;
let level;
let keys = {};
let dummy;
let teamNumber = 0;
let i = 0;
let teamSelected = false;
let testItem;

let started = false;

document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);
document.addEventListener('wheel', wheel);

loadingManager.onLoad = function ( ) {
    if (started) return;
    let progressElement = document.getElementById('progressbar');
    let bround = document.getElementById('blockout');
    progressElement.style.display = 'none';
    bround.style.display = 'none';
};

loadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    if (started) return;
    let progressElement = document.getElementById('progressbar');
    let bound = document.getElementById('blockout');
    progressElement.style.display = 'flex';
    bound.style.display = 'flex';
};

loadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
    if (started) return;
    let progressElement = document.getElementById('progressbar');
    progressElement.style.width = (itemsLoaded / itemsTotal * 40) + '%';
};

function init(serverURL) {
    if (!serverURL) {
        serverURL = window.localStorage.getItem('serverURL');
    }
    audioManager.music();
    webSocketHandler = new WebSocketHandler(serverURL);
}

function onWebSocketConnected() {
    document.getElementById('teamselector')
        .style
        .display = 'block';
    layer01 = new THREE.TextureLoader(loadingManager).load('Textures/laser.png');
    layer01.wrap = layer01.wrapT = THREE.RepeatWrapping;
    layer02 = new THREE.TextureLoader(loadingManager).load('Textures/noise.png');
    layer01.wrap = layer01.wrapT = THREE.RepeatWrapping;
    scene = new THREE.Scene();
    camera = setUpCamera();
    cameraController = new CameraController(camera);
    renderer = setUpRenderer();
    postProcessing = new PostProcessingSetup(renderer, scene);
    setUpLights();
    testItem = new RocketLauncher();
    testItem.spawn();
    level = new Level();
    player = new Player();
    hud = new HUD(player);
    hud.hideHUD();
    menu = new Menu();
    dummy = new ConnectedPlayer(0);
}

function selectTeam(teamSelection) {
    teamSelected = true;
    player.team = teamSelection;
    document.getElementById('teamselector').style.display = 'none';
    webSocketHandler.sendMessage({
        action: 'TEAM_SELECT',
        team: teamSelection,
    });
    webSocketHandler.sendMessage({
        action: 'NAME_CHANGE',
        connectionDisplayName: TUNABLE_VARIABLES.playerName,
    });
    menuOpened = false;
    player.respawn();
    player.setTeam();
    menu.updateScores(true);
    hud.showHUD();
    if (!started) startUpdate(60);
}

function keydown(e){
    if (e.key === 'Escape') {
        menuOpened = !menuOpened;
        if (!menuOpened) {
            menu.hide();
        }
        else menu.show();
    }
    keys[e.key.toLowerCase()] = true;
}

function keyup(e){
    keys[e.key.toLowerCase()] = false;
}

function wheel(e) {
    console.log('wheel');
    player.inventory.next();
}

const clock = new THREE.Clock();

function sendModelData() {
    webSocketHandler.sendMessage(
        {
            action: 'MOVEMENT',
            text: 'connected',
            connectionDisplayName: TUNABLE_VARIABLES.playerName,
            position: player.object.position,
            quaternion: player.object.quaternion,
            lookQuaternion: camera.quaternion,
            animState: player.currentAnimationName,
            velocity: player.velocity,
            cameraDirection: cameraController.getCameraDirection(),
        }
    );
}

let frameCount = 0;
let fps, fpsInterval, startTime, now, then, elapsed, firstCall;

function startUpdate(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    firstCall = true;
    renderer.setSize( window.innerWidth, window.innerHeight );
    lockedUpdate();
}

function lockedUpdate() {
    // request another frame

    requestAnimationFrame(lockedUpdate);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval || firstCall) {
        firstCall = false;
        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        // Put your drawing code here
        update();
    }
}

function update() {
    started = true;
    if (keys['Tab']) menu.showScore();
    else menu.hideScore();
    if (keys['2']) menu.showScore();
    else menu.hideScore();
    if (player.object && webSocketHandler.ready) {
        sendModelData();
    }
    dummy.update();
    const delta = clock.getDelta();
    player.update(delta);
    level.update(delta);
    cameraController.update(player);
    Object.keys(webSocketHandler.connectedPlayers).forEach(key => {
        webSocketHandler.connectedPlayers[key].update(delta);
    })
    if (i === 2) {
        player.updateBBOX();
        player.addBBOX();
    }
    i++;
    //postProcessing.update();
    testItem.update();
    renderer.render( scene, camera );
}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

init();