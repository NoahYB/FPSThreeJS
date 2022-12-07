class HUD {
    constructor(player) {
        this.player = player;
        this.html = document.getElementById('HUD');
        this.healthBar = document.getElementById('healthBar');
        this.respawnScreen = document.getElementById('respawnScreen');
        this.updateHealthBar(player.health)
    }

    updateHealthBar(health) {
        this.healthBar.style.width = ((health / TUNABLE_VARIABLES.health )* 30) + '%';
    }

    updateHealthBar(health) {
        this.healthBar.style.width = ((health / TUNABLE_VARIABLES.health )* 30) + '%';
    }

    hideHUD() {
        this.html.style.display = 'none';
    }

    showHUD() {
        this.html.style.display = 'block';
    }

    hideHealthBar() {
        this.healthBar.style.display = 'none';
    }

    showHealthBar() {
        this.healthBar.style.display = 'block';
    }

    hideRespawnScreen() {
        this.respawnScreen.style.display = 'none';
    }

    showRespawnScreen() {
        this.respawnScreen.style.display = 'block';
    }

    respawnTimer(time) {
        this.respawnScreen.innerHTML = 'Respawning... ' + Math.round(time);
    }

    onRespawn() {
        this.showHealthBar();
        this.hideRespawnScreen();
    }

    onDeath() {
        this.hideHealthBar();
        this.showRespawnScreen();
    }
}


