class RocketLauncher extends Item {
    constructor(type="Rocket",id, position){
        super(type, id, position);
        this.rocketGeometry = new THREE.BoxGeometry(1,1,1);
        this.rocketMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        this.projectiles = [];
        this.explosions = [];
        this.collisions = new Collisions();
        this.explosionTexture = new THREE.TextureLoader().load('../Icons/explosion.png'); 
        this.coolDownTimer = 0;
    }

    fire(velocity) {
        super.fire();
        if (this.coolDownTimer > 0) return;
        this.coolDownTimer = 4;
        if (this.heldBy === player) {
            webSocketHandler.sendMessage({
                action: 'PROJECTILE_DATA',
                projectileVelocity: this.directionalVelocity().multiplyScalar(5),
                itemId: this.id
            })
        }

        const projectile = new THREE.Mesh(this.rocketGeometry, this.rocketMaterial);
        this.projectiles.push(projectile);

        projectile.position.copy(this.model.position);
        projectile.geometry.computeBoundingBox();

        scene.add(projectile);

        projectile.userData.velocity = velocity ? velocity: this.directionalVelocity().multiplyScalar(5);

        if (projectile.userData.velocity) player.velocity.add(projectile.userData.velocity.clone().multiplyScalar(-.3));
        const bbox = new THREE.Box3();
        bbox.setFromObject(projectile);
        projectile.userData.bbox = bbox;

    }

    update() {
        this.coolDownTimer -= .05;
        console.log(this.coolDownTimer);
        super.update();
        const remove = [];
        this.projectiles = this.projectiles.filter(projectile => {
            projectile.userData.bbox.copy( projectile.geometry.boundingBox ).applyMatrix4( projectile.matrixWorld );

            let collided = this.collisions.projectileCollisionsOBB(projectile.userData.bbox, level.levelBBOX);
            projectile.position.add(projectile.userData.velocity);
            if (collided) {
                this.explosion(projectile.position);
                scene.remove(projectile);
                return false;
            }
            return true;
        });
        this.explosions = this.explosions.filter(explosion => {
            explosion.material.uniforms.time.value += 0.02;
            if (explosion.material.uniforms.time.value < 1) return true;
            scene.remove(explosion);
            return false;
        })
    }

    explosion(pos) {
        const explosionMaterial = new THREE.ShaderMaterial( {

            uniforms: {
                time: { value: 0 },
                uColor: {value: new THREE.Color('red')},
                tExplosion: {
                    type: "t",
                    value: this.explosionTexture
                },
            },
        
            vertexShader: this.shader(true),
            fragmentShader: this.shader(false)
        
        } );
        const geo = new THREE.SphereGeometry( 1, 32, 16 );
        const explosion = new THREE.Mesh(geo, explosionMaterial);
        scene.add(explosion);
        this.explosions.push(explosion);
        explosion.position.copy(pos);
        player.explosionDamage(pos, this.heldBy, 50)
    }

    spawn() {
        super.spawn();

        this.pickupRadius = 5;
        this.iconElement = document.createElement('img');
        this.iconElement.src = this.iconSrc;
        this.iconElement.classList.add('icon');
        this.model = createRocketLauncher();

        this.model.position.copy(this.position);
        this.model.position.y += 5;
        this.bbox = new THREE.Box3();
        this.bbox.setFromObject(this.model);
    }

    shader(v) {
        if (v){
            return `   
                varying vec3 vNormal;
                varying vec3 vUv; 
                uniform float time;
                varying float noise;
                ${classic3D()}
                float turbulence( vec3 p ) {

                    float w = 100.0;
                    float t = -.65;
                  
                    for (float f = 1.0 ; f <= 10.0 ; f++ ){
                      float power = pow( 2.0, f );
                      t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );
                    }
                  
                    return t;
                }

                void main() {
                    vUv = position; 
                    vNormal = normalize(normalMatrix * normal); 
                    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);

                    // get a turbulent 3d noise using the normal, normal to high freq
                    noise = 10.0 *  -.10 * turbulence( .5 * normal + time);
                    // get a 3d noise using the position, low frequency
                    float b = 5.0 * pnoise( 0.05 * position + vec3( 2.0 * time ), vec3( 100.0 ) );
                    // compose both noises
                    float displacement = noise * 40.0;

                    vec3 newPosition = position + normal * (displacement * time);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
                } `
            }
        else {
            return `
                #include <common>
                #include <lights_pars_begin>
                uniform vec3 uColor;
                uniform float time;
                varying vec3 vNormal;
                varying float noise;
                uniform sampler2D tExplosion;

                float random( vec3 scale, float seed ){
                    return fract( sin( dot( gl_FragCoord.xyz + seed, scale ) ) * 43758.5453 + seed ) ;
                }

                void main() {
                    // get a random offset
                    float r = .01 * random( vec3( 12.9898, 78.233, 151.7182 ), 0.0 );
                    // lookup vertically in the texture, using noise and offset
                    // to get the right RGB colour
                    vec2 tPos = vec2( 0, 1.3 * noise + r );
                    vec4 color = texture2D( tExplosion, tPos );
                  
                    gl_FragColor = vec4( color.rgb, 1.0 );
                }`
        }
    }
}


function createRocketLauncher() {
    // Create the base of the rocket launcher
    let baseGeometry = new THREE.BoxGeometry(10, 10, 10);
    let baseMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color('Blue'),
        roughness: 0.5,
        metalness: 0.0
    });
    let baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);
    console.log('adding mesh');
    baseMesh.position.copy(new THREE.Vector3(0,5,0));
    baseMesh.geometry.computeBoundingBox();

    // Create the rocket launcher components using object primitives
    const bodyGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 32);
    const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x444444 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);

    const nozzleGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.5, 32);
    const nozzleMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 });
    const nozzle = new THREE.Mesh(nozzleGeometry, nozzleMaterial);
    nozzle.position.y = 0.75;

    const scopeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const scopeMaterial = new THREE.MeshBasicMaterial({ color: 0x222222 });
    const scope = new THREE.Mesh(scopeGeometry, scopeMaterial);
    scope.position.y = 0.9;

    const stockGeometry = new THREE.BoxGeometry(0.1, 0.4, 0.2);
    const stockMaterial = new THREE.MeshBasicMaterial({ color: 0x666666 });
    const stock = new THREE.Mesh(stockGeometry, stockMaterial);
    stock.position.y = 0.4;

    body.add(scope);
    body.add(nozzle);
    body.add(stock);

    body.rotateZ(-Math.PI / 2);
    body.scale.set(4,4,4); 
    body.position.y += 8;
    scene.add(body);

    return body;
}

function createPistol() {
    // Create the barrel.
    let barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.2, 1), new THREE.MeshBasicMaterial({color: 0x000000}));
    // Create the grip.
    let grip = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.5), new THREE.MeshBasicMaterial({color: 0x000000}));
    // Create the trigger.
    let trigger = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.1), new THREE.MeshBasicMaterial({color: 0x000000}));

    // Attach the barrel to the grip.
    grip.add(barrel);
    // Attach the trigger to the grip.
    grip.add(trigger);

    return grip;
}