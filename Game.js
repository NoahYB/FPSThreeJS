
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

let controls;
let player;
let level;
let keys = {};
let dummy;
let teamNumber = 0;

let teamSelected = false;

let started = false;

document.addEventListener('keydown',keydown);
document.addEventListener('keyup',keyup);

loadingManager.onLoad = function ( ) {
    if (started) return;
    let progressElement = document.getElementById('progressbar');
    let bround = document.getElementById('blockout');
    progressElement.style.display = 'none';
    bround.style.display = 'none';
    document.getElementById('teamselector')
        .style
        .display = 'block';
};

loadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    if (started) return;
    let progressElement = document.getElementById('progressbar');
    let bound = document.getElementById('blockout');
    progressElement.style.display = 'block';
    bound.style.display = 'block';
};

loadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
    if (started) return;
    let progressElement = document.getElementById('progressbar');
    progressElement.style.width = (itemsLoaded / itemsTotal * 100) + '%';
};

function init(serverURL) {
    if (!serverURL) {
        serverURL = window.localStorage.getItem('serverURL');
    }
    audioManager.music();
    webSocketHandler = new WebSocketHandler(serverURL);
}

function onWebSocketConnected() {
    layer01 = new THREE.TextureLoader(loadingManager).load('Textures/laser.png');
    layer01.wrap = layer01.wrapT = THREE.RepeatWrapping;
    layer02 = new THREE.TextureLoader(loadingManager).load('Textures/noise.png');
    layer01.wrap = layer01.wrapT = THREE.RepeatWrapping;
    scene = new THREE.Scene();
    camera = setUpCamera();
    cameraController = new CameraController(camera);
    renderer = setUpRenderer();
    setUpLights();
    level = new Level();
    player = new Player();
    menu = new Menu();
    dummy = new ConnectedPlayer(0);
}

function selectTeam(teamNumberSelection) {
    teamSelected = true;
    teamNumber = teamNumberSelection;
    player.team = teamNumber;
    document.getElementById('teamselector').style.display = 'none';
    webSocketHandler.sendMessage({
        text: 'connected',
        action: 'selectTeam',
        teamSelection: teamNumber,
    });
    menuOpened = false;
    player.respawn();
    player.setTeam();
    menu.updateScores(true);
    if (!started) startUpdate(60);
}

function keydown(e){
    if (e.key === 'Escape') {
        console.log(menuOpened);
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

const clock = new THREE.Clock();

function sendModelData() {
    webSocketHandler.sendMessage(
        {
            text: 'connected',
            connectionDisplayName: 'test',
            position: player.object.position,
            quaternion: player.object.quaternion,
            lookQuaternion: camera.quaternion,
            animState: player.currentAnimationName,
            velocity: player.velocity,
        }
    );
}

let frameCount = 0;
let fps, fpsInterval, startTime, now, then, elapsed;

function startUpdate(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    lockedUpdate();
}

function lockedUpdate() {
    // request another frame

    requestAnimationFrame(lockedUpdate);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

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
    cameraController.update(player);
    Object.keys(webSocketHandler.connectedPlayers).forEach(key => {
        webSocketHandler.connectedPlayers[key].update(delta);
    })
    renderer.render( scene, camera );
}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

init();