const scene = new THREE.Scene();
const fbxLoader = new THREE.FBXLoader();
const objLoader = new THREE.OBJLoader();
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const gravity = .008;
let moveSpeed = .1;
const near = 1;
const far = 10;
const color = 'lightblue';
// scene.fog = new THREE.Fog(color, near, far);

scene.background = new THREE.Color(color);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
scene.add(camera);
camera.position.z = 5;
camera.position.y += .7;
camera.fov = 120;
camera.updateProjectionMatrix();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let enemies = [];
const player = new Player();
const level = new Level();
let controls;

// for (let i = 0; i < 10; i++) {
//     const pos = new THREE.Vector3(3 * i,0,0);
//     const enemy = new NPC(true, pos);
//     enemies.push(enemy);
// }

// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );
let light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
light.position.set(0, 1, 0);
scene.add(light);

let light2 = new THREE.DirectionalLight(0xffffff, 1.0);
light.position.set(0, 1, 0);
scene.add(light);
// controls.addEventListener( 'lock', function () {
// 	// menu.style.display = 'none';

// } );

// controls.addEventListener( 'unlock', function () {
// 	// menu.style.display = 'block';
// } );

let gun;
let reticle;
let keys = {};//Define array

document.addEventListener('keydown',keydown);
document.addEventListener('keyup',keyup);
document.addEventListener('mousedown',mousedown);
//Attach listeners to functions
let i = 0;
function mousedown(e) {
    player.shoot();
    raycaster.setFromCamera( new THREE.Vector2(0,0), camera );
    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects( scene.children );
    // HITHITHITHITHITHIT
    for ( let i = 0; i < intersects.length; i ++ ) {
        const object = intersects[ i ].object;
        if (object === level.object) continue;
        if (object.isEnemy) {
            object.c.death(object);
        }
    }
    controls.lock();
}
function keydown(e){
    keys[e.key] = true;
}
function keyup(e){
    keys[e.key] = false;
}

const clock = new THREE.Clock();

let enemyMoveSpeed = 1;
let initiated = false;
function animate() {
    if (player.object && !initiated) {
        controls = new THREE.PointerLockControls( player.object, renderer.domElement );
        initiated = true;
        let head = player.object.getObjectByName('mixamorigHead');
        let headPosition = new THREE.Vector3();
        head.getWorldPosition( headPosition );
        head.add(camera);
        camera.rotateY(180 * Math.PI / 180);
        camera.position.y -= 1;
    }
    requestAnimationFrame( animate );
    const delta = clock.getDelta();
    moveSpeed = keys['Shift'] ? 20: 10;
    player.walking = false;
    if(keys['w']){
        controls.moveForward(-moveSpeed);
        player.walking = true;
    }
    if(keys['s']){
        controls.moveForward(moveSpeed);
        player.walking = true;
    }
    if(keys['a']){
        controls.moveRight(moveSpeed);
        player.walking = true;
    }
    if(keys['d']){
        controls.moveRight(-moveSpeed);
        player.walking = true;
    }
    enemies.map(e => e.update(delta));
    player.update(delta);
    renderer.render( scene, camera );
}
animate();