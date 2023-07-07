//@ts-check
import {WebGLRenderer, Scene, Camera, LoadingManager, Color, Clock } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { setUpCamera, setUpLights, setUpRenderer } from './SceneSetup';
import { Level } from './Entities/Level';
import { HUD } from './Entities/HUD';
import { WebSocketHandler} from './Components/WebSocketHandler';
import { CameraController } from './Entities/CameraController';
import { Menu } from './Entities/Menu';
import { Player } from './Entities/Player';
import { TUNABLE_VARIABLES } from './DataModels/TunableVariables';
import RAPIER from '@dimforge/rapier3d-compat';

class GlobalGame {
    
    preGameStartData: {
        team: 'unset' | 'team1' | 'team2';
        characterColor: {
            head: Color,
            body: Color
        };
        characterName: string;
    };
    webSocketHandler: WebSocketHandler;
    renderer: WebGLRenderer;
    menu: Menu;
    level: Level;
    scene: Scene;
    player: Player;
    items = {};
    started = false;
    camera: Camera;
    loadingManager = new LoadingManager();
    fbxLoader: FBXLoader;  
    gltfLoader: GLTFLoader; 
    cameraController: CameraController;
    teamSelected = false;
    physicsWorld: any;
    RAPIER: any;

    keys = {};
    

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
    
    clock = new Clock();
    
    constructor() {
        const characterData = JSON.parse(window.localStorage.getItem('characterData'));

        const name = characterData ? characterData.characterName: 'Donut';

        const headColor = characterData ? characterData.characterColor.head : '#FFFFFF';

        const bodyColor = characterData ? characterData.characterColor.body : '#FF0000';

        const team = characterData ? characterData.team : 'unset';

        this.preGameStartData = {
            team: team,
            characterColor: {
                head: headColor ? headColor : '#FFFFFF',
                body: bodyColor ? bodyColor : '#FF0000'
            },
            characterName:  name,
        }
        
        this.loadingManager = new LoadingManager();
    
        this.fbxLoader = new FBXLoader(this.loadingManager);
        
        this.gltfLoader = new GLTFLoader(this.loadingManager);

        document.addEventListener('keydown', keydown);

        document.addEventListener('keyup', keyup);

        document.addEventListener('wheel', this.wheel);

        window.addEventListener( 'resize', onWindowResize, false );

        document.getElementById("team1").addEventListener('click', (e) =>
            {
                this.selectTeam("team1", e.target);
            });
        document.getElementById("team2").addEventListener('click', (e) =>
        {
            this.selectTeam("team2", e.target);
        });

        document.getElementById("colorpicker-head").addEventListener("input", (e: InputEvent) =>
        {
            const { target } = e;
            if (target)
                this.headColorUpdate((e.target as HTMLInputElement).value);
        })
        document.getElementById("colorpicker-body").addEventListener("input", (e: InputEvent) =>
        {
            const { target } = e;
            if (target)
                this.bodyColorUpdate((e.target as HTMLInputElement).value);
        })
        document.getElementById("userName").addEventListener("input", (e: InputEvent) =>
        {
            const { target } = e;
            if (target)
                this.userName((e.target as HTMLInputElement).value);
        })

        document.getElementById("startGame").addEventListener("click", (e: Event) =>
        {
            this.enterGame();
        });

        (document.getElementById("userName") as HTMLInputElement).value = this.preGameStartData.characterName;
        console.log(this.preGameStartData);
        (document.getElementById("colorpicker-head") as HTMLInputElement).value = this.preGameStartData.characterColor.head;
        (document.getElementById("colorpicker-body") as HTMLInputElement).value = this.preGameStartData.characterColor.body;
        this.headColorUpdate(this.preGameStartData.characterColor.head);
        this.bodyColorUpdate(this.preGameStartData.characterColor.body);

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
            let gravity = { x: 0.0, y: -9.0, z: 0.0 };
            this.physicsWorld = new RAPIER.World(gravity);
            this.init();
        });
    }

    init() {
        let serverURL = window.localStorage.getItem('serverURL');

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
        context.scene = new Scene();
        context.camera = setUpCamera();
        context.renderer = setUpRenderer();
        setUpLights(context.scene);
        context.level = new Level(RAPIER, context.scene, context.physicsWorld, context.gltfLoader);
        context.player = new Player(
            context.webSocketHandler
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

    selectTeam(teamSelection, element) {
        if (this.preGameStartData.team === 'team1') document.getElementById('team1').classList.remove("selected");
        if (this.preGameStartData.team === 'team2') document.getElementById('team2').classList.remove("selected");
        element.classList.add("selected");
        this.preGameStartData.team = teamSelection;
    }

    enterGame() {
        this.player.team = this.preGameStartData.team === 'unset' ? 'team1' : this.preGameStartData.team;
        this.player.setCharacterColor();
        document.getElementById('teamselector').style.display = 'none';
        this.webSocketHandler.sendMessage({
            action: 'TEAM_SELECT',
            team: this.player.team,
        });
        this.webSocketHandler.sendMessage({
            action: 'NAME_CHANGE',
            connectionDisplayName: this.preGameStartData.characterName,
        });
        window.localStorage.setItem('characterData',JSON.stringify(this.preGameStartData));
        TUNABLE_VARIABLES.setPlayerName(this.preGameStartData.characterName);
        this.menu.opened = false;
        this.player.respawn();
        this.menu.updateScores(true);
        HUD.showHUD();
        this.teamSelected = true;
        if (!this.started) this.startUpdate(60);
    }

    headColorUpdate(color) {
        const matches = document.querySelectorAll<HTMLElement>("div.headColor");
        matches.forEach(element => element.style.backgroundColor = color);
        this.preGameStartData.characterColor.head = color;
    }

    bodyColorUpdate(color) {
        const matches = document.querySelectorAll<HTMLElement>("div.bodyColor");
        matches.forEach(element => element.style.backgroundColor = color);
        this.preGameStartData.characterColor.body = color;
    }

    userName(name: string) {
        this.preGameStartData.characterName = name;
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
        if (this.keys['2']) this.menu.show();
        else this.menu.hide()
        if (this.keys['3']) {
            if (!TUNABLE_VARIABLES.thirdPerson) {
                TUNABLE_VARIABLES.setThirdPerson('true');
                this.player.showCharacter();
            }
        }
        else {
            TUNABLE_VARIABLES.setThirdPerson('false');
            this.player.hideCharacter();
        }
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
    if (e.keyCode === 9) {
        e.preventDefault();
        //console.log('Tab key pressed');
    }
    getKeys()[e.key] = true;
}


function keyup(e){
    console.log(e.key);
    getKeys()[e.key] = false;
}


export const GLOBAL_GAME = new GlobalGame();

/**
 * 
 * @returns {} // preGameData
 */
export const getPreGameStartData = () => {
    return GLOBAL_GAME.preGameStartData;
}

/**
 * 
 * @returns {} // key map
 */
export const getKeys = () => {
    return GLOBAL_GAME.keys;
}

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
export const getLevel = () => GLOBAL_GAME.level;

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
 * @returns GLTFLoader
 */
export const getGLTFLoader = () => GLOBAL_GAME.gltfLoader;

/**
 * 
 * @returns FBXLoader
 */
export const getTeamSelected = () => GLOBAL_GAME.teamSelected;

/**
 * 
 * @returns WebSocketHandler
 */
export const getWebSocketHandler = () => GLOBAL_GAME.webSocketHandler;

/**
 * 
 * @returns {}
 */
export const getItems = () => GLOBAL_GAME.items;


let ps = [];
const coolbackgroundeffect = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    for (let i = 0; i < 300; i ++) {
        const p = document.createElement('div');
        p.style.position = 'fixed';
        p.style.bottom = `${Math.random() * h}px`;
        p.style.left = `${Math.random() * w}px`;
        p.style.background = '#28ebdb';
        const s = `${Math.random() * 10}px`;
        p.style.height = s;
        p.style.width = s;
        p.style.borderRadius = '10px';
        p.style.zIndex = '0';
        ps.push(p);
        document.getElementById('teamselector').append(p);
    }
};
// window.addEventListener('resize', () => {
//     ps.forEach(p => p.remove());
//     ps = [];
//     coolbackgroundeffect();
// });

// coolbackgroundeffect();