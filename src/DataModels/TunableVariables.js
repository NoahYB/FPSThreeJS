function sanitize(string) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
}

class Variables {
    constructor(params) {
        const {
               movementSpeed,
               playerName,
               jumpHeight,
               FOV,
               gravity,
               volume,
               sensitivity,
               teamKillEnabled,
               thirdPerson,
               health,
               respawnTime,
               headShotDamage,
               shotDamage,
        } = params;
        this.variableNames = [
            'movementSpeed',
            'playerName',
            'jumpHeight',
            'FOV',
            'gravity',
            'volume',
            'sensitivity',
            'thirdPerson',
            'health',
            'respawnTime',
            'headShotDamage',
            'shotDamage',
        ]
        this.set = {
            movementSpeed: this.setMovementSpeed,
            playerName: this.setPlayerName,
            jumpHeight: this.setJumpHeight,
            FOV: this.setFOV,
            gravity: this.setGravity,
            volume: this.setVolume,
            sensitivity: this.setSensitivity,
            thirdPerson: this.setThirdPerson,
            health: this.setHealth,
            respawnTime: this.setRespawnTime,
            headShotDamage: this.setHeadShotDamage,
            shotDamage: this.setShotDamage,
        }
        this.movementSpeed = movementSpeed;
        this.playerName = playerName;
        this.jumpHeight = jumpHeight;
        this.FOV = FOV;
        this.gravity = gravity;
        this.volume = volume;
        this.sensitivity = sensitivity;
        this.teamKillEnabled = teamKillEnabled;
        this.thirdPerson = thirdPerson;
        this.health = health;
        this.respawnTime = respawnTime;
        this.headShotDamage = headShotDamage;
        this.shotDamage = shotDamage;
    }

    setThirdPerson(thirdPerson) {
        const isTrueSet = (thirdPerson === 'true');
        TUNABLE_VARIABLES.thirdPerson = isTrueSet;
    }

    setRespawnTime(newRespawnTime) {
        if (newRespawnTime === '') return false;
        if (isNaN(newRespawnTime)) return false;
        TUNABLE_VARIABLES.respawnTime = newRespawnTime;
    }

    setHeadShotDamage(newHeadShotDamage) {
        if (newHeadShotDamage === '') return false;
        if (isNaN(newHeadShotDamage)) return false;
        TUNABLE_VARIABLES.headShotDamage = newHeadShotDamage;
    }

    setShotDamage(newShotDamage) {
        if (newShotDamage === '') return false;
        if (isNaN(newShotDamage)) return false;
        TUNABLE_VARIABLES.shotDamage = newShotDamage;
    }

    setHealth(newHealth) {
        if (newHealth === '') return false;
        if (isNaN(newHealth)) return false;
        TUNABLE_VARIABLES.health = newHealth;
    }


    setSensitivity(newSensitivity) {
        if (newSensitivity === '') return false;
        if (isNaN(newSensitivity)) return false;
        TUNABLE_VARIABLES.sensitivity = newSensitivity;
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
        const sanitizedName = sanitize(newPlayerName);
        // webSocketHandler.sendMessage({
        //     action: 'NAME_CHANGE',
        //     connectionDisplayName: sanitizedName,
        // })
        TUNABLE_VARIABLES.playerName = sanitize(sanitizedName);
    }

    setJumpHeight(newJumpHeight) {
        if (newJumpHeight === '') return false;
        if (isNaN(newJumpHeight)) return false;
        TUNABLE_VARIABLES.jumpHeight = newJumpHeight;
    }

    setGravity(newGravity) {
        if (newGravity === '') return false;
        if (isNaN(newGravity)) return false;
        TUNABLE_VARIABLES.gravity = newGravity;
    }

    setVolume(newVolume) {
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
        movementSpeed: 40,
        playerName: 'Donut',
        jumpHeight: 40,
        FOV: 120,
        gravity: .025,
        volume: .5,
        sensitivity: 1.75,
        teamKillEnabled: false,
        thirdPerson: false,
        health: 100,
        headShotDamage: 40,
        shotDamage: 30,
        respawnTime: 3,
    }
)
