import {
	Euler,
	EventDispatcher,
	Vector3
} from 'three';
import { getCamera, getMenu, getPlayer } from '../Game';
import { TUNABLE_VARIABLES } from '../DataModels/TunableVariables';
const _euler = new Euler( 0, 0, 0, 'YXZ' );
const _vector = new Vector3();

const _changeEvent = { type: 'change' };
const _lockEvent = { type: 'lock' };
const _unlockEvent = { type: 'unlock' };

const _PI_2 = Math.PI / 2;

class PointerLockControls extends EventDispatcher {

	constructor( player, domElement ) {

		super();

		this.camera = getCamera();
		this.player = player;
		
		this.domElement = domElement;
		this.isLocked = false;

		// Set to constrain the pitch of the camera
		// Range is 0 to Math.PI radians
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		this.pointerSpeed = 1.0;

		this._onMouseMove = onMouseMove.bind( this );
		this._onPointerlockChange = onPointerlockChange.bind( this );
		this._onPointerlockError = onPointerlockError.bind( this );

		this.connect();

	}

	connect() {

		this.domElement.ownerDocument.addEventListener( 'mousemove', this._onMouseMove );
		this.domElement.ownerDocument.addEventListener( 'pointerlockchange', this._onPointerlockChange );
		this.domElement.ownerDocument.addEventListener( 'pointerlockerror', this._onPointerlockError );

	}

	disconnect() {

		this.domElement.ownerDocument.removeEventListener( 'mousemove', this._onMouseMove );
		this.domElement.ownerDocument.removeEventListener( 'pointerlockchange', this._onPointerlockChange );
		this.domElement.ownerDocument.removeEventListener( 'pointerlockerror', this._onPointerlockError );

	}

	dispose() {

		this.disconnect();

	}

	getObject() { // retaining this method for backward compatibility

		return this.camera;

	}

	getDirection( v ) {

		return v.set( 0, 0, - 1 ).applyQuaternion( this.camera.quaternion );

	}

	moveForward( distance ) {
		// move forward parallel to the xz-plane
		// assumes player.up is y-
		_vector.setFromMatrixColumn(  this.player.object.matrix, 0 );

		_vector.crossVectors(  this.player.object.up, _vector );

		_vector.multiplyScalar(distance);

		return _vector;
	}

	moveRight( distance ) {

		_vector.setFromMatrixColumn( this.player.object.matrix, 0 );

		_vector.multiplyScalar(distance);

		return _vector;
	}

	moveDown( distance ) {
		const g = new Vector3(0, distance - TUNABLE_VARIABLES.gravity, 0);

		return g;
	}

	lock() {

		this.domElement.requestPointerLock();

	}

	unlock() {

		this.domElement.ownerDocument.exitPointerLock();

	}

}

// event listeners

function onMouseMove( event ) {
    
    const _eulerBody = new Euler( 0, 0, 0, 'YXZ' );
    
	const player = this.player.object;
	const camera = this.camera;
	this.pointerSpeed = TUNABLE_VARIABLES.sensitivity;

	if ( this.isLocked === false ) return;
	const movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
	const movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

	let head = player.getObjectByName('Cube001');

	_euler.setFromQuaternion( camera.quaternion );

	_euler.y -= movementX * 0.002 * this.pointerSpeed;
	_euler.x -= movementY * 0.002 * this.pointerSpeed;
	_euler.x = Math.max( _PI_2 - this.maxPolarAngle, Math.min( _PI_2 - this.minPolarAngle, _euler.x ) );

	_eulerBody.setFromQuaternion( player.quaternion );
	
	_eulerBody.y -= movementX * 0.002 * this.pointerSpeed;
	
	camera.quaternion.setFromEuler( _euler );

	player.quaternion.setFromEuler( _eulerBody );

	this.dispatchEvent( _changeEvent );

}

function onPointerlockChange() {

	const menu = getMenu();

	const player = getPlayer();

	if ( this.domElement.ownerDocument.pointerLockElement === this.domElement ) {

		menu.hide();

		this.dispatchEvent( _lockEvent );

		this.isLocked = true;

	} else {
		this.dispatchEvent( _unlockEvent );
		
		menu.show();

		Object.keys(player.playerKeyMap).forEach(key => {
			player.playerKeyMap[key] = false;
		})

		player.characterController.input();
		this.isLocked = false;

	}

}

function onPointerlockError() {

	console.error( 'THREE.PointerLockControls: Unable to use Pointer Lock API' );

}

export { PointerLockControls };
