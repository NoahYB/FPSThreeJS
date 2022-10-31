
const fbxLoader = new THREE.FBXLoader();
const objLoader = new THREE.OBJLoader();
const gltfLoader = new THREE.GLTFLoader();
const audioManager = new AudioManager();

let menuOpened = false;
let spawnLocations = [];
let menu;
let webSocketHandler;

let scene;
let camera;
let renderer;

let controls;
let player;
let level;
let keys = {};
let dummy;

document.addEventListener('keydown',keydown);
document.addEventListener('keyup',keyup);

function init(serverURL) {
    audioManager.music();
    webSocketHandler = new WebSocketHandler(serverURL);
}

function onWebSocketConnected() {
    document.getElementById('startscreen').style.display = 'none';
    scene = new THREE.Scene();
    camera = setUpCamera();
    renderer = setUpRenderer();
    setUpLights();
    player = new Player();
    level = new Level();
    menu = new Menu();
    dummy = new ConnectedPlayer(0);
    update();
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
    keys[e.key] = true;
}
function keyup(e){
    keys[e.key] = false;
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
            score: player.score,
        }
    );
}

function update() {
    if (keys['Tab']) menu.showScore();
    else menu.hideScore();
    if (keys['2']) menu.showScore();
    else menu.hideScore();
    if (player.object && webSocketHandler.ready) {
        sendModelData();
    }
    dummy.update();
    requestAnimationFrame( update );
    const delta = clock.getDelta();
    player.update(delta);
    Object.keys(webSocketHandler.connectedPlayers).forEach(key => {
        webSocketHandler.connectedPlayers[key].update(delta);
    })
    renderer.render( scene, camera );
}