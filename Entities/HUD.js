class HUD {
    constructor(player) {
        this.player = player;
        this.html = document.getElementById('HUD');
        this.healthBar = document.getElementById('healthBar');
        this.updateHealthBar(player.health)
    }

    updateHealthBar(health) {
        this.healthBar.style.width = ((health / TUNABLE_VARIABLES.health )* 30) + '%';
    }

    updateHealthBar(health) {
        this.healthBar.style.width = ((health / TUNABLE_VARIABLES.health )* 30) + '%';
    }
}


