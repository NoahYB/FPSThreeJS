// @ts-check
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AudioManager } from './AudioManager';
import { setUpCamera, setUpLights, setUpRenderer } from './SceneSetup';
import { Level } from './Entities/Level';
import { HUD } from './Entities/HUD';
import { WebSocketHandler} from './Components/WebSocketHandler';
import { CameraController } from './Entities/CameraController';
import { Menu } from './Entities/Menu';
import { Player } from './Entities/Player';

export class GlobalGame {
    
    static webSocketHandler: WebSocketHandler;
    static renderer: THREE.WebGLRenderer;
    static menu: Menu;
    static level: Level;
    static scene: THREE.Scene;
    static player: Player;
    static items = {};
    static started = false;
    static camera: THREE.Camera;
    static loadingManager = new THREE.LoadingManager();
    static fbxLoader = new FBXLoader(this.loadingManager);  
    static gltfLoader = new GLTFLoader(this.loadingManager); 
    static cameraController: CameraController;
    static teamSelected = false;
    static keys = {};
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

        GlobalGame.loadingManager = new THREE.LoadingManager();
    
        GlobalGame.fbxLoader = new FBXLoader(GlobalGame.loadingManager);
        
        GlobalGame.gltfLoader = new GLTFLoader(GlobalGame.loadingManager);

        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
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
        GlobalGame.loadingManager.onLoad = function ( ) {
            if (GlobalGame.started) return;
            let progressElement = document.getElementById('progressbar');
            let bround = document.getElementById('blockout');
            progressElement.style.display = 'none';
            bround.style.display = 'none';
        };
        
        GlobalGame.loadingManager.onStart = function ( url, itemsLoaded, itemsTotal ) {
            if (GlobalGame.started) return;
            let progressElement = document.getElementById('progressbar');
            let bound = document.getElementById('blockout');
            progressElement.style.display = 'flex';
            bound.style.display = 'flex';
        };
        
        GlobalGame.loadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
            if (GlobalGame.started) return;
            let progressElement = document.getElementById('progressbar');
            progressElement.style.width = (itemsLoaded / itemsTotal * 40) + '%';
        };
    }
    
    init(serverURL: string | undefined) {
        console.log('init called');
        if (!serverURL) {
            serverURL = window.localStorage.getItem('serverURL');
        }
        this.audioManager.music();
        GlobalGame.webSocketHandler = new WebSocketHandler(serverURL, this.onWebSocketConnected);
    }
    
    onWebSocketConnected() {
        console.log('connected');
        document.getElementById('teamselector')
            .style
            .display = 'block';
        GlobalGame.scene = new THREE.Scene();
        GlobalGame.camera = setUpCamera();
        GlobalGame.cameraController = new CameraController(GlobalGame.camera);
        GlobalGame.renderer = setUpRenderer();
        setUpLights();
        GlobalGame.level = new Level();
        GlobalGame.player = new Player(
            GlobalGame.cameraController,
        );
        GlobalGame.player.id = GlobalGame.webSocketHandler.id;
        HUD.hideHUD();
        GlobalGame.menu = new Menu( GlobalGame.webSocketHandler, GlobalGame.player );
        Object.keys(GlobalGame.items).forEach(key => GlobalGame.items[key].spawn());
    }

    selectTeam(teamSelection) {
        GlobalGame.player.team = teamSelection;
        document.getElementById('teamselector').style.display = 'none';
        GlobalGame.webSocketHandler.sendMessage({
            action: 'TEAM_SELECT',
            team: teamSelection,
        });
        GlobalGame.webSocketHandler.sendMessage({
            action: 'NAME_CHANGE',
            connectionDisplayName: TUNABLE_VARIABLES.playerName,
        });
        GlobalGame.menu.opened = false;
        GlobalGame.player.respawn();
        GlobalGame.player.setTeam();
        GlobalGame.menu.updateScores(true);
        HUD.showHUD();
        GlobalGame.teamSelected = true;
        if (!GlobalGame.started) this.startUpdate(60);
    }
    
    keydown(e){
        if (e.key === 'Escape') {
            GlobalGame.menu.opened = !GlobalGame.menu.opened;
            if (!GlobalGame.menu.opened) {
                GlobalGame.menu.hide();
            }
            else GlobalGame.menu.show();
        }
        GlobalGame.keys[e.key.toLowerCase()] = true;
    }
    
    keyup(e){
        GlobalGame.keys[e.key.toLowerCase()] = false;
    }
    
    wheel(e) {
        //GlobalGame.player.inventory.next();
    }

    
    sendModelData() {
        GlobalGame.webSocketHandler.sendMessage(
            {
                action: 'MOVEMENT',
                text: 'connected',
                connectionDisplayName: TUNABLE_VARIABLES.playerName,
                position: GlobalGame.player.object.position,
                quaternion: GlobalGame.player.object.quaternion,
                lookQuaternion: GlobalGame.camera.quaternion,
                velocity: GlobalGame.player.velocity,
                cameraDirection: GlobalGame.cameraController.getCameraDirection(),
            }
        );
    }
    
    startUpdate(fps) {
        this.fpsInterval = 1000 / fps;
        this.then = Date.now();
        this.startTime = this.then;
        this.firstCall = true;
        GlobalGame.renderer.setSize( window.innerWidth, window.innerHeight, false );
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
        GlobalGame.started = true;
        if (GlobalGame.keys['Tab']) GlobalGame.menu.showScore();
        else GlobalGame.menu.hideScore();
        if (GlobalGame.keys['2']) GlobalGame.menu.showScore();
        else GlobalGame.menu.hideScore();
        if (GlobalGame.player.object && GlobalGame.webSocketHandler.ready) {
            this.sendModelData();
        }
        const delta = this.clock.getDelta();
        GlobalGame.player.update(delta);
        GlobalGame.level.update(delta);
        GlobalGame.cameraController.update();
        Object.keys(GlobalGame.webSocketHandler.connectedPlayers).forEach(key => {
            GlobalGame.webSocketHandler.connectedPlayers[key].update(delta);
        })
        if (this.i === 2) {
            GlobalGame.player.addBBOX();
            GlobalGame.player.updateBBOX();
        }
        this.i++;
        Object.keys(GlobalGame.items).map(k => GlobalGame.items[k].update());
        GlobalGame.renderer.render( GlobalGame.scene, GlobalGame.camera );
    }   
}

function onWindowResize(){
    
    GlobalGame.camera.aspect = window.innerWidth / window.innerHeight;
    GlobalGame.camera.updateProjectionMatrix();

    GlobalGame.renderer.setSize( window.innerWidth, window.innerHeight );

}

const GAME = new GlobalGame();

//(window as any).GAME = GAME;

GAME.init(undefined);