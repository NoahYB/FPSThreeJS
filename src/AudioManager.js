export class AudioManager {
    constructor() {
        this.walking = new Audio('Audio/walkingsoft.mp3');
        this.walking.loop = true;
    }

    music() {
        // const audio = new Audio('Audio/background.mp3');
        // audio.loop = true;
        // audio.volume = .3;
        // audio.play();
    }

    hit() {
        this.play(
            'Audio/shoot.mp3',
            false,
            .8 * TUNABLE_.volume
        )
    }

    shoot() {
        this.play(
            'Audio/hit.mp3',
            false,
            .1 * TUNABLE_VARIABLES.volume
        )
    }

    startWalking() {
        // this.walking.play();
    }
    stopWalking() {
        // this.walking.pause();
    }

    play(path, loop, volume) {
        const audio = new Audio(path);
        audio.loop = loop;
        audio.volume = volume;
        audio.play();
    }
}