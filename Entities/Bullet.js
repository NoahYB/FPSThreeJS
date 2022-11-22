class Bullet {
    constructor(start, dir, player) {
        this.player = player;
        this.timer = 0;
        this.dir = dir;
        const material = new THREE.ShaderMaterial( {
            uniforms: {
                time: { value: 0.01 },
                resolution: { value: new THREE.Vector2() },
                direction: {value: dir.clone().normalize()},
                uColor: {value: new THREE.Color('red')},
                origin: {value: start},
                colorMap: {
                    value: layer01
                },
                noiseMap: {
                    value: layer02
                },
            },
            vertexShader: bulletVertexShader(),
            fragmentShader: bulletFragmentShader()
        } ); 

        material.transparent = true;
        material.side = THREE.DoubleSide;
        const geometry = new THREE.BoxGeometry( .1, .1, 400);
        const cube = new THREE.Mesh( geometry, material );
        cube.lookAt(dir);
        const look = dir.normalize();

        this.object = cube;
        cube.position.copy(start);
        cube.position.x += look.x * 201;
        cube.position.y += look.y * 201;
        cube.position.z += look.z * 201;
        scene.add(cube);

    }

    update(delta) {
        this.object.material.uniforms.time.value += delta;
        this.timer += delta;
        if (this.timer > .13) {
            scene.remove(this.object);
        }
    }
}