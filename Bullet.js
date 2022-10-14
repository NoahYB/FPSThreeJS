class Bullet {
    constructor(start, dir, player) {
        this.player = player;
        this.timer = 0;
        let points = [start,dir];

        this.colors = [
            '#EF9CDA',
            '#FECEF1',
            '#89A1EF',
            '#00A5E0',
            '#32CBFF',
        ];
        console.log('spawning');
        // console.log(this.colors[Math.round(Math.random() * this.colors.length)]);
        const material = new THREE.LineBasicMaterial({
            color: this.colors[ Math.round(Math.random() * this.colors.length - 1)  ],
        });
        const geometry = new THREE.BufferGeometry().setFromPoints( points );

        const line = new THREE.Line( geometry, material );
        this.object = line;
        scene.add( line );
    }

    update(delta) {
        this.timer += delta;
        if (this.timer > .5) {
            scene.remove(this.object);
        }
    }
}