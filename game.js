const scene = new THREE.Scene();
const fbxLoader = new THREE.FBXLoader();
const objLoader = new THREE.OBJLoader();
const gltfLoader = new THREE.GLTFLoader();
const raycaster = new THREE.Raycaster();
const webSocketHandler = new WebSocketHandler();
const menu = new Menu();
let menuOpened = false;
let playerName = 'default-name';
const gravity = .008;
let moveSpeed = .1;
const near = 1;
const far = 10;
const color = 'lightblue';
// scene.fog = new THREE.Fog(color, near, far);

scene.background = new THREE.Color(color);

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

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let enemies = [];
const player = new Player();
const level = new Level();
let controls;

const spotLight = new THREE.PointLight( 'white', .5 );
spotLight.position.set( 34, 50, -20 );
spotLight.rotateZ(3.14 / 4)
spotLight.shadowMapWidth = 4096;
spotLight.shadowMapHeight = 4096;
spotLight.castShadow = true;
scene.add(spotLight);

const ambientLight = new THREE.AmbientLight("salmon", .3);

scene.add(ambientLight);


let gun;
let reticle;
let keys = {};//Define array

document.addEventListener('keydown',keydown);
document.addEventListener('keyup',keyup);

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
            animState: player.currentAnimationName,
        }
    );
}

let enemyMoveSpeed = 1;
let initiated = false;
function animate() {
    if (player.object && !initiated) {
        controls = new THREE.PointerLockControls( player.object, renderer.domElement );
        initiated = true;
        controls.addEventListener( 'lock', function () {
            if (menuOpened) {
                controls.unlock();
            }
            menu.hide();
        } );

        controls.addEventListener( 'unlock', function () {
            menu.show();
            Object.keys(keys).forEach(key => {
                console.log('keys');
                keys[key] = false;
            })
        } );
        let head = player.object.getObjectByName('mixamorigHead');
        let headPosition = new THREE.Vector3();
        head.getWorldPosition(headPosition);
        head.add(camera);
        camera.rotateY(180 * Math.PI / 180);
        camera.position.y -= 1;
    }
    if (player.object && webSocketHandler.ready) {
        sendModelData();
    }
    requestAnimationFrame( animate );
    const delta = clock.getDelta();
    enemies.map(e => e.update(delta));
    player.update(delta);
    Object.keys(webSocketHandler.connectedPlayers).forEach(key => {
        webSocketHandler.connectedPlayers[key].update(delta);
    })
    renderer.render( scene, camera );
}