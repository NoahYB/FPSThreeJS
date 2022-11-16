class Guntweaker {
    constructor() {

    }
    set() {
        this.element = document.getElementById('guntweaker');
        this.children = this.element.children;
        const settings = {};
        for(let i=0; i< this.children.length; i++){
            let child = this.children[i];
            if (child.nodeName === 'INPUT') {
                if (child.id === 'KILL') {
                    if (child.checked) {
                        projectilesOff = true;
                        this.closeMenu();
                        controls.lock();
                        return;
                    }
                }
                if (child.id === 'AUTOMATIC') {
                    const oz = child.value;
                    if (oz === '0') settings[child.id] = false;
                    if (oz === '1') settings[child.id] = true;
                } else {
                    settings[child.id] = parseFloat(
                        sanitize(child.value)
                    );
                }
            }   
        }
        this.createGunAndProjectile(settings);
        this.closeMenu();
        controls.lock();
    }

    createGunAndProjectile(settings) {
        const customGun = new Gun(
            settings, 
            settings.NUMBER_OF_PROJECTILES, 
            settings.SPREAD, 
            settings.AUTOMATIC
        )
        player.equippedGun = customGun;
    }

    openMenu() {
        if (!this.element) this.element = document.getElementById('guntweaker');
        this.element.style.display = 'flex';
    }

    closeMenu() {
        if (!this.element) this.element = document.getElementById('guntweaker');
        this.element.style.display = 'none';
    }
}
const guntweaker = new Guntweaker();
