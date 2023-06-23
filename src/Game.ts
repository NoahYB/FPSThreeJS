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
    
    loadingManager = new THREE.LoadingManager();
    
    fbxLoader = new FBXLoader(this.loadingManager);
    
    gltfLoader = new GLTFLoader(this.loadingManager);
    
    audioManager = new AudioManager();
    
    spawnLocations = [];
    
    static camera: THREE.Camera;
    cameraController;
    
    player: Player;
    
    keys = {};
    dummy;
    i = 0;
    teamSelected = false;
    
    started = false;
    
    items = {};
    
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
        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
        document.addEventListener('wheel', this.wheel);
        window.addEventListener( 'resize', onWindowResize, false );

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
    
    init(serverURL: string | undefined) {
        if (!serverURL) {
            serverURL = window.localStorage.getItem('serverURL');
        }
        this.audioManager.music();
        GlobalGame.webSocketHandler = new WebSocketHandler(serverURL);
    }
    
    onWebSocketConnected() {
        console.log('connected');
        document.getElementById('teamselector')
            .style
            .display = 'block';
        GlobalGame.scene = new THREE.Scene();
        GlobalGame.camera = setUpCamera();
        this.cameraController = new CameraController(GlobalGame.camera);
        GlobalGame.renderer = setUpRenderer();
        setUpLights();
        GlobalGame.level = new Level(GlobalGame.scene, this.gltfLoader);
        this.player = new Player(
            this.cameraController,
            GlobalGame.scene,
            this.spawnLocations,
        );
        this.player.id = GlobalGame.webSocketHandler.id;
        HUD.hideHUD();
        GlobalGame.menu = new Menu( GlobalGame.webSocketHandler, this.player );
        Object.keys(this.items).forEach(key => this.items[key].spawn());
    }

    selectTeam(teamSelection) {
        this.teamSelected = true;
        this.player.team = teamSelection;
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
        this.player.respawn();
        this.player.setTeam();
        GlobalGame.menu.updateScores(true);
        HUD.showHUD();
        if (!this.started) this.startUpdate(60);
    }
    
    keydown(e){
        if (e.key === 'Escape') {
            GlobalGame.menu.opened = !GlobalGame.menu.opened;
            if (!GlobalGame.menu.opened) {
                GlobalGame.menu.hide();
            }
            else GlobalGame.menu.show();
        }
        this.keys[e.key.toLowerCase()] = true;
    }
    
    keyup(e){
        this.keys[e.key.toLowerCase()] = false;
    }
    
    wheel(e) {
        console.log('wheel');
        this.player.inventory.next();
    }

    
    sendModelData() {
        GlobalGame.webSocketHandler.sendMessage(
            {
                action: 'MOVEMENT',
                text: 'connected',
                connectionDisplayName: TUNABLE_VARIABLES.playerName,
                position: this.player.object.position,
                quaternion: this.player.object.quaternion,
                lookQuaternion: GlobalGame.camera.quaternion,
                velocity: this.player.velocity,
                cameraDirection: this.cameraController.getCameraDirection(),
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
    
        requestAnimationFrame(this.lockedUpdate);
    
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
        if (this.keys['Tab']) GlobalGame.menu.showScore();
        else GlobalGame.menu.hideScore();
        if (this.keys['2']) GlobalGame.menu.showScore();
        else GlobalGame.menu.hideScore();
        if (this.player.object && GlobalGame.webSocketHandler.ready) {
            this.sendModelData();
        }
        this.dummy.update();
        const delta = this.clock.getDelta();
        this.player.update(delta);
        GlobalGame.level.update(delta);
        this.cameraController.update(this.player);
        Object.keys(GlobalGame.webSocketHandler.connectedPlayers).forEach(key => {
            GlobalGame.webSocketHandler.connectedPlayers[key].update(delta);
        })
        if (this.i === 2) {
            this.player.updateBBOX();
            this.player.addBBOX();
        }
        this.i++;
        Object.keys(this.items).map(k => this.items[k].update());
        GlobalGame.renderer.render( GlobalGame.scene, GlobalGame.camera );
    }   
}

function onWindowResize(){
    
    GlobalGame.camera.aspect = window.innerWidth / window.innerHeight;
    GlobalGame.camera.updateProjectionMatrix();

    GlobalGame.renderer.setSize( window.innerWidth, window.innerHeight );

}

const GAME = new GlobalGame();

GAME.init(undefined);