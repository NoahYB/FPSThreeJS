class Variables {
    constructor(params) {
        const {movementSpeed,
               playerName,
               jumpHeight,
               FOV
        } = params;
        this.variableNames = [
            'movementSpeed',
            'playerName',
            'jumpHeight',
            'FOV'
        ]
        this.set = {
            movementSpeed: this.setMovementSpeed,
            playerName: this.setPlayerName,
            jumpHeight: this.setJumpHeight,
            FOV: this.setFOV
        }
        this.movementSpeed = movementSpeed;
        this.playerName = playerName;
        this.jumpHeight = jumpHeight;
        this.FOV = FOV;
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

    }

    setJumpHeight(newJumpHeight) {

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
        FOV: 50
    }
)