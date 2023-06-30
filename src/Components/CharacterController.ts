import { PointerLockControls } from "./PointerLockControlsCustom";
import { getRenderer, getRapier, getPhysicsWorld, getPlayer, getTeamSelected } from "../Game";
import { Player } from "../Entities/Player";
import { Vector3 } from 'three';
import { showRapierCollider, getAABBHalfSize, createCollisionMask } from "../Utilities";
import { TUNABLE_VARIABLES } from "../DataModels/TunableVariables";

export class CharacterController {
    RAPIER: any;
    physicsWorld: any;
    characterCollider: any;
    rapierController: any;

    pointerLockControls: PointerLockControls;
    player: Player;

    velocity: Vector3 = new Vector3(0,0,0);

    constructor() {

        this.RAPIER = getRapier();
        this.physicsWorld = getPhysicsWorld();
        this.player = getPlayer();

        this.addCharacterController();

        this.pointerLockControls = new PointerLockControls(
            this.player, 
            getRenderer().domElement,
        );

    }
    
    addCharacterController() {
        this.player.collisionObject.geometry.computeBoundingBox();

        let halfSize = getAABBHalfSize( this.player.collisionObject.geometry.boundingBox );


        let colliderDesc = this.RAPIER.ColliderDesc.cuboid(
            halfSize.x, 
            halfSize.y, 
            halfSize.z
        ).setCollisionGroups(0x00020001);

        this.characterCollider = this.physicsWorld.createCollider(colliderDesc);
        
        showRapierCollider(
            halfSize, 
            this.player.collisionObject.position, 
            this.player.collisionObject.rotation, 
        );
        // The gap the controller will leave between the character and its environment.
        let offset = 0.2;
        // Create the controller.
        this.rapierController = this.physicsWorld.createCharacterController(offset);
        this.rapierController.enableAutostep(3.0, 0.0, true);
    }

    jump() {

        if (this.rapierController.computedGrounded())
            this.velocity.y = TUNABLE_VARIABLES.jumpHeight * TUNABLE_VARIABLES.gravity;
    }

    move() {
        if (!this.rapierController) return;

        if (this.rapierController.computedGrounded()) this.velocity.y = Math.max(this.velocity.y, 0);

        else this.velocity.y -= TUNABLE_VARIABLES.gravity;

        const movementToCorrect = new Vector3(0,0,0);

        if (this.velocity.z !== 0) movementToCorrect.add(this.pointerLockControls.moveForward(this.velocity.z));
        if (this.velocity.x !== 0) movementToCorrect.add(this.pointerLockControls.moveRight(this.velocity.x));
        movementToCorrect.add(this.pointerLockControls.moveDown(this.velocity.y));

        this.rapierController.computeColliderMovement(
            this.characterCollider,           // The collider we would like to move.
            movementToCorrect, // The movement we would like to apply if there wasn’t any obstacle.
            undefined,
            0x00020001
        );
        // Read the result.
        let correctedMovement = this.rapierController.computedMovement();

		this.player.object.position.add( correctedMovement );
        this.characterCollider.setRotation(this.player.object.quaternion);
        this.characterCollider.setTranslation(this.player.object.position);
    }

    input() {
        const playerKeyMap = this.player.playerKeyMap;
                
        const s = playerKeyMap['shift'] ? 2 : 1;

        const ms = TUNABLE_VARIABLES.movementSpeed * s;

        if (playerKeyMap[' ']) this.jump();

        if(playerKeyMap['w']) this.velocity.z = -ms;

        if(playerKeyMap['s']) this.velocity.z = ms;

        if(playerKeyMap['a'])this.velocity.x = ms;

        if(playerKeyMap['d']) this.velocity.x = -ms;

        if (!playerKeyMap['w'] && !playerKeyMap['s']
        ) this.velocity.z = 0;

        if (!playerKeyMap['a'] && !playerKeyMap['d'] 
        ) this.velocity.x = 0;
        
    }

}

document.addEventListener('click', lockControls);

function lockControls(e) {
    const player = getPlayer();
    if (player?.menu?.opened || !getTeamSelected()) return;
    player.characterController.pointerLockControls.lock();
}