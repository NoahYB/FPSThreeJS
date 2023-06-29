//@ts-check
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AudioManager } from './AudioManager';
import { setUpCamera, setUpLights, setUpRenderer } from './SceneSetup';
import { Level } from './Entities/Level';
import { HUD } from './Entities/HUD';
import { WebSocketHandler} from './Components/WebSocketHandler';
import { CameraController } from './Entities/CameraController';
import { Menu } from './Entities/Menu';
import { Player } from './Entities/Player';
import RAPIER from '@dimforge/rapier3d-compat';

class GlobalGame {
    
    webSocketHandler: WebSocketHandler;
    renderer: THREE.WebGLRenderer;
    menu: Menu;
    level: Level;
    scene: THREE.Scene;
    player: Player;
    items = {};
    started = false;
    camera: THREE.Camera;
    loadingManager = new THREE.LoadingManager();
    fbxLoader: FBXLoader;  
    gltfLoader: GLTFLoader; 
    cameraController: CameraController;
    teamSelected = false;
    physicsWorld: any;
    RAPIER: any;

    keys = {};

   
    audioManager = new AudioManager();
    

    spawnLocations = [];

    i = 0;
    
    frameCount:number = 0;
    fps: number; 
    fpsInterval: number; 
    startTime: number; 
    now: number; 
    then: number; 
    elapsed: number; 
    firstCall: boolean;
    
    clock = new THREE.Clock();
    
    constructor() {

        this.loadingManager = new THREE.LoadingManager();
    
        this.fbxLoader = new FBXLoader(this.loadingManager);
        
        this.gltfLoader = new GLTFLoader(this.loadingManager);

        document.addEventListener('keydown', keydown);

        document.addEventListener('wheel', this.wheel);

        window.addEventListener( 'resize', onWindowResize, false );

        document.getElementById("team1").addEventListener('click', (e) =>
            {
                this.selectTeam("team1");
            });
        document.getElementById("team2").addEventListener('click', (e) =>
        {
            this.selectTeam("team2");
        });

        this.loadingManager.onLoad = function ( ) {
            if (this.started) return;
            let progressElement = document.getElementById('progressbar');
            let bround = document.getElementById('blockout');
            progressElement.style.display = 'none';
            bround.style.display = 'none';
        };
        
        this.loadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {
            if (this.started) return;
            let progressElement = document.getElementById('progressbar');
            let bound = document.getElementById('blockout');
            progressElement.style.display = 'flex';
            bound.style.display = 'flex';
        };
        
        this.loadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
            if (this.started) return;
            let progressElement = document.getElementById('progressbar');
            progressElement.style.width = (itemsLoaded / itemsTotal * 40) + '%';
        };
    }

    async loadRapier() {
        RAPIER.init().then(() => {  
            this.RAPIER = RAPIER;
            let gravity = { x: 0.0, y: -1.0, z: 0.0 };
            this.physicsWorld = new RAPIER.World(gravity);
            this.init();
        });
    }

    init() {
        let serverURL = window.localStorage.getItem('serverURL');

        this.audioManager.music();
        
        console.log(serverURL);
        if (!serverURL) serverURL = 'ws\://localhost:56112'

        this.webSocketHandler = new WebSocketHandler(
            serverURL, 
            this.onWebSocketConnected, 
            this.menu,
            this.items,
            this
        );
    }
    
    onWebSocketConnected(context) {
        document.getElementById('teamselector')
            .style
            .display = 'block';
        context.scene = new THREE.Scene();
        context.camera = setUpCamera();
        context.renderer = setUpRenderer();
        setUpLights(context.scene);
        context.level = new Level(RAPIER, context.scene, context.physicsWorld, context.gltfLoader);
        context.player = new Player(
            context.webSocketHandler,
        );
        context.cameraController = new CameraController(context.camera, context.player);
        context.player.cameraController = context.cameraController;
        (window as any).player = context.player;
        context.player.id = context.webSocketHandler.id;
        HUD.hideHUD();
        context.menu = new Menu( context.webSocketHandler, context.player );
        context.player.menu = context.menu;
        Object.keys(context.items).forEach(key => context.items[key].spawn());
    }

    selectTeam(teamSelection) {
        this.player.team = teamSelection;
        document.getElementById('teamselector').style.display = 'none';
        this.webSocketHandler.sendMessage({
            action: 'TEAM_SELECT',
            team: teamSelection,
        });
        this.webSocketHandler.sendMessage({
            action: 'NAME_CHANGE',
            connectionDisplayName: TUNABLE_VARIABLES.playerName,
        });
        this.menu.opened = false;
        this.player.respawn();
        this.menu.updateScores(true);
        HUD.showHUD();
        this.teamSelected = true;
        if (!this.started) this.startUpdate(60);
    }

    
    wheel(e) {
        //this.player.inventory.next();
    }

    
    sendModelData() {
        this.webSocketHandler.sendMessage(
            {
                action: 'MOVEMENT',
                text: 'connected',
                connectionDisplayName: TUNABLE_VARIABLES.playerName,
                position: this.player.object.position,
                quaternion: this.player.object.rotation,
                lookQuaternion: this.camera.rotation,
                velocity: this.player.characterController.velocity,
                cameraDirection: this.cameraController.getCameraDirection(),
            }
        );
    }
    
    startUpdate(fps) {
        this.fpsInterval = 1000 / fps;
        this.then = Date.now();
        this.startTime = this.then;
        this.firstCall = true;
        this.renderer.setSize( window.innerWidth, window.innerHeight, false );
        this.lockedUpdate();
    }
    
    lockedUpdate() {
        // request another frame
        requestAnimationFrame(()=>this.lockedUpdate());
    
        // calc elapsed time since last loop
    
        this.now = Date.now();
        this.elapsed = this.now - this.then;
    
        // if enough time has elapsed, draw the next frame
    
        if (this.elapsed > this.fpsInterval || this.firstCall) {
            this.firstCall = false;
            // Get ready for next frame by setting then=now, but also adjust for your
            // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
            this.then = this.now - (this.elapsed % this.fpsInterval);
    
            // Put your drawing code here
            this.update();
        }
    }
    
    update() {
        this.started = true;
        if (this.keys['Tab']) this.menu.showScore();
        else this.menu.hideScore();
        if (this.keys['2']) this.menu.showScore();
        else this.menu.hideScore();
        if (this.player.object && this.webSocketHandler.ready) {
            this.sendModelData();
        }
        const delta = this.clock.getDelta();
        this.player.update(delta);
        this.level.update(delta);
        this.physicsWorld.step();
        this.cameraController.update();
        Object.keys(this.webSocketHandler.connectedPlayers).forEach(key => {
            this.webSocketHandler.connectedPlayers[key].update(delta);
        })
        this.i++;
        Object.keys(this.items).map(k => this.items[k].update());
        this.renderer.render( this.scene, this.camera );
    }   
}

function onWindowResize(){
    
    getCamera().aspect = window.innerWidth / window.innerHeight;
    getCamera().updateProjectionMatrix();

    getRenderer().setSize( window.innerWidth, window.innerHeight );

}

function keydown(e){
    const menu = getMenu();
    console.log('ESCAPE');
    if (e.key === 'Escape') {
        menu.opened = !menu.opened;
        if (!menu.opened) {
            menu.hide();
        }
        else menu.show();
    }
}

console.log(document.getElementById("Game").getAttribute('src'));

export const GLOBAL_GAME = new GlobalGame();

/**
 * 
 * @returns THREE.Scene
 */
export const getScene = () => GLOBAL_GAME.scene;

/**
 * 
 * @returns THREE.Renderer
 */
export const getRenderer = () => GLOBAL_GAME.renderer;

/**
 * 
 * @returns THREE.Camera
 */
export const getCamera = () => GLOBAL_GAME.camera;


/**
 * 
 * @returns GLOBAL_GAME.Player
 */
export const getPlayer = () => GLOBAL_GAME.player;

/**
 * 
 * @returns RAPIER
 */
export const getRapier = () => GLOBAL_GAME.RAPIER;

/**
 * 
 * @returns RAPIER physics world
 */
export const getPhysicsWorld = () => GLOBAL_GAME.physicsWorld;

/**
 * 
 * @returns Level
 */
export const getlevel = () => GLOBAL_GAME.level;

/**
 * 
 * @returns Level
 */
export const getMenu = () => GLOBAL_GAME.menu;


/**
 * 
 * @returns FBXLoader
 */
export const getFBXLoader = () => GLOBAL_GAME.fbxLoader;

/**
 * 
 * @returns FBXLoader
 */
export const getTeamSelected = () => GLOBAL_GAME.teamSelected;

