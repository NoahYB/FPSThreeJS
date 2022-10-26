class Variables {
    constructor(params) {
        const {
               movementSpeed,
               playerName,
               jumpHeight,
               FOV,
               gravity,
               volume
        } = params;
        this.variableNames = [
            'movementSpeed',
            'playerName',
            'jumpHeight',
            'FOV',
            'gravity',
            'volume'
        ]
        this.set = {
            movementSpeed: this.setMovementSpeed,
            playerName: this.setPlayerName,
            jumpHeight: this.setJumpHeight,
            FOV: this.setFOV,
            gravity: this.setGravity,
            volume: this.setVolume,
        }
        this.movementSpeed = movementSpeed;
        this.playerName = playerName;
        this.jumpHeight = jumpHeight;
        this.FOV = FOV;
        this.gravity = gravity;
        this.volume = volume;
    }

    setFOV(newFOV) {
        if (newFOV === '') return false;
        if (isNaN(newFOV)) return false;
        TUNABLE_VARIABLES.FOV = newFOV;
        if(camera) {
            camera.fov = newFOV;
            camera.updateProjectionMatrix();
        }
    }

    setPlayerName(newPlayerName) {
        if (newPlayerName === '') return false;
        TUNABLE_VARIABLES.playerName = sanitize(newPlayerName);
    }

    setJumpHeight(newJumpHeight) {

    }

    setGravity(newGravity) {
        if (newGravity === '') return false;
        if (isNaN(newGravity)) return false;
        TUNABLE_VARIABLES.gravity = newGravity;
    }

    setVolume(newVolume) {
        console.log(newVolume);
        if (newVolume === '') return false;
        if (isNaN(newVolume)) return false;
        TUNABLE_VARIABLES.volume = newVolume / 100;
    }

    setMovementSpeed(newMovementSpeed) {
        if (newMovementSpeed === '') return false;
        if (isNaN(newMovementSpeed)) return false;
        TUNABLE_VARIABLES.movementSpeed = newMovementSpeed;
        if (player)
            player.movementSpeed = newMovementSpeed;
    }
}
const HTML_INPUT_FIELDS = [];
const TUNABLE_VARIABLES = new Variables(
    {
        movementSpeed: 20,
        playerName: 'default-name',
        jumpHeight: 30,
        FOV: 50,
        gravity: .008,
        volume: .5,
    }
)