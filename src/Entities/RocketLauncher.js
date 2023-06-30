import { Item } from '../Components/Item';
import {
    BoxGeometry,
    MeshBasicMaterial,
    TextureLoader,
    Color,
    Mesh,
    Box3,
    SphereGeometry,
    ShaderMaterial,
    CylinderGeometry,
    Vector3
} from 'three';
import { getPlayer, getScene, getRapier, getPhysicsWorld } from '../Game';
import { classic3D } from '../libs/shader.noise';

export class RocketLauncher extends Item {
    constructor(type="Rocket", id, position, webSocketHandler){
        super(type="Rocket", id, position, webSocketHandler);

        this.RAPIER = getRapier();
        this.physicsWorld = getPhysicsWorld();

        this.rocketGeometry = new BoxGeometry(1,1,1);
        this.rocketMaterial = new MeshBasicMaterial({ color: 0xff0000 });
        this.projectiles = [];
        this.explosions = [];
        this.explosionTexture = new TextureLoader().load('../Icons/explosion.png'); 
        this.coolDownTimer = 0;
    }

    fire(velocity) {
        super.fire();
        if (this.coolDownTimer > 0) return;
        this.coolDownTimer = 4;
        this.model.material.color = new Color('red');

        const player = getPlayer();

        if (this.heldBy === player) {
            this.webSocketHandler.sendMessage({
                action: 'PROJECTILE_DATA',
                projectileVelocity: this.directionalVelocity(),
                itemId: this.id
            })
        }

        const projectile = new Mesh(this.rocketGeometry, this.rocketMaterial);

        let rigidBodyDesc = new this.RAPIER.RigidBodyDesc(this.RAPIER.RigidBodyType.Dynamic)
            .setTranslation(...this.model.position)
            .setRotation(this.model.quaternion)
            .setGravityScale(3)

        const rigidBody = this.physicsWorld.createRigidBody(rigidBodyDesc)

        let colliderDesc = this.RAPIER.ColliderDesc.cuboid(1.0, 1.0, 1.0)
                                .setDensity(1.3)
                                .setFriction(0.1)
                                .setCollisionGroups(0x00040001);

        this.physicsWorld.createCollider(colliderDesc, rigidBody);

        this.projectiles.push({
            mesh: projectile,
            rigidBody
        });

        projectile.position.copy(this.model.position);
        projectile.geometry.computeBoundingBox();

        getScene().add(projectile);

        projectile.userData.velocity = velocity ? new Vector3(velocity.x, velocity.y, velocity.z) : this.directionalVelocity();

        const projectileVelocity = projectile.userData.velocity;

        rigidBody.addForce(projectileVelocity.multiplyScalar(2000), true);

        if (!velocity) player.characterController.velocity.add(projectileVelocity.multiply(new Vector3(.0001,-.0005,.0001)));

        const bbox = new Box3();

        bbox.setFromObject(projectile);

        projectile.userData.bbox = bbox;

    }

    update() {
        this.coolDownTimer -= .05;
        if (this.coolDownTimer < 0 && this.model) {
            this.model.material.color = new Color(0x444444);
        }
        super.update();
        const remove = [];
        this.projectiles = this.projectiles.filter(projectile => {
            projectile.mesh.position.copy(projectile.rigidBody.translation());
            return true;
        });
        this.explosions = this.explosions.filter(explosion => {
            explosion.material.uniforms.time.value += 0.02;
            if (explosion.material.uniforms.time.value < 1) return true;
            this.scene.remove(explosion);
            return false;
        })
    }

    explosion(pos) {
        const player = getPlayer();

        const explosionMaterial = new ShaderMaterial( {

            uniforms: {
                time: { value: 0 },
                uColor: {value: new Color('red')},
                tExplosion: {
                    type: "t",
                    value: this.explosionTexture
                },
            },
        
            vertexShader: this.shader(true),
            fragmentShader: this.shader(false)
        
        } );
        const geo = new SphereGeometry( 1, 32, 16 );
        const explosion = new Mesh(geo, explosionMaterial);
        this.scene.add(explosion);
        this.explosions.push(explosion);
        explosion.position.copy(pos);
        player.explosionDamage(pos, this.heldBy, 10)
    }

    spawn() {
        super.spawn();

        this.pickupRadius = 10;
        this.iconElement = document.createElement('img');
        this.iconElement.src = this.iconSrc;
        this.iconElement.classList.add('icon');
        this.model = this.createRocketLauncher();

        this.model.position.copy(this.position);
        this.model.position.y += 5;
        this.bbox = new Box3();
        this.bbox.setFromObject(this.model);
    }

    createRocketLauncher() {
        // Create the base of the rocket launcher
        let baseGeometry = new BoxGeometry(10, 10, 10);
        let baseMaterial = new MeshBasicMaterial({
            color: new Color('Blue'),
        });
        let baseMesh = new Mesh(baseGeometry, baseMaterial);
        baseMesh.position.copy(new Vector3(0,5,0));
        baseMesh.geometry.computeBoundingBox();
    
        // Create the rocket launcher components using object primitives
        const bodyGeometry = new CylinderGeometry(0.2, 0.2, 1, 32);
        const bodyMaterial = new MeshBasicMaterial({ color: 0x444444 });
        const body = new Mesh(bodyGeometry, bodyMaterial);
    
        const nozzleGeometry = new CylinderGeometry(0.08, 0.08, 0.5, 32);
        const nozzleMaterial = new MeshBasicMaterial({ color: 0x888888 });
        const nozzle = new Mesh(nozzleGeometry, nozzleMaterial);
        nozzle.position.y = 0.75;
    
        const scopeGeometry = new BoxGeometry(0.1, 0.1, 0.1);
        const scopeMaterial = new MeshBasicMaterial({ color: 0x222222 });
        const scope = new Mesh(scopeGeometry, scopeMaterial);
        scope.position.y = 0.9;
    
        const stockGeometry = new BoxGeometry(0.1, 0.4, 0.2);
        const stockMaterial = new MeshBasicMaterial({ color: 0x666666 });
        const stock = new Mesh(stockGeometry, stockMaterial);
        stock.position.y = 0.4;
    
        body.add(scope);
        body.add(nozzle);
        body.add(stock);
    
        body.rotateZ(-Math.PI / 2);
        body.scale.set(4,4,4); 
        body.position.y += 8;
        getScene().add(body);
    
        return body;
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


function createPistol() {
    // Create the barrel.
    let barrel = new Mesh(new CylinderGeometry(0.5, 0.2, 1), new MeshBasicMaterial({color: 0x000000}));
    // Create the grip.
    let grip = new Mesh(new BoxGeometry(0.2, 0.2, 0.5), new MeshBasicMaterial({color: 0x000000}));
    // Create the trigger.
    let trigger = new Mesh(new BoxGeometry(0.1, 0.1, 0.1), new MeshBasicMaterial({color: 0x000000}));

    // Attach the barrel to the grip.
    grip.add(barrel);
    // Attach the trigger to the grip.
    grip.add(trigger);

    return grip;
}