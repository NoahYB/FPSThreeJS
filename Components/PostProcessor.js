class PostProcessingSetup {
    constructor() {
        this.width = window.innerHeight;
        this.height = window.innerHeight;
        this.renderPass = new THREE.RenderPass(scene, camera);

        // this.afterImagePass = new THREE.AfterimagePass();
        // this.afterImagePass.uniforms["damp"].value = 0.78;

        this.setUpBloom();

        this.finalPass = new THREE.ShaderPass(
            new THREE.ShaderMaterial( {
              uniforms: {
                baseTexture: { value: null },
                bloomTexture: { value: this.bloomComposer.renderTarget2.texture }
              },
              vertexShader: document.getElementById( 'vertexshader' ).textContent,
              fragmentShader: document.getElementById( 'fragmentshader' ).textContent,
              defines: {}
            } ), "baseTexture"
          );

        this.finalPass.needsSwap = true;
        
        this.composer = new THREE.EffectComposer(renderer);
        this.composer.addPass(this.renderPass);
        this.composer.addPass(this.finalPass);
    }
    
    setUpBloom() {
        this.bloomComposer = new THREE.EffectComposer(renderer);
        this.bloomPass = new THREE.UnrealBloomPass(
            new THREE.Vector2(this.width, this.height),
            .3,
            0,
            0
        )
        this.bloomComposer.addPass(this.renderPass);
        this.bloomComposer.addPass(this.bloomPass);
        // this.bloomComposer.addPass(this.afterImagePass);
        this.bloomComposer.renderToScreen = false;
    }

    selectivelyBloom() {
        const darkMaterial = new THREE.MeshBasicMaterial( { color: 'black' } );
        
        scene.traverse((obj) => {
            if (obj.isMesh && !obj.bloomEffectEnabled) {
                obj.restoreMaterialTo = obj.material.clone();
                obj.material = darkMaterial;
            }
        });

        this.bloomComposer.render();

        scene.traverse((obj) => {
            if (obj.isMesh && !obj.bloomEffectEnabled) {
                obj.material = obj.restoreMaterialTo;
            }
        });

    }

    bloomAll() {
        this.composer.addPass(this.bloomPass);
        this.bloomingAll = true;
    }

    update() {
        // this.selectivelyBloom();
        if(!this.bloomingAll) this.bloomAll();
        this.composer.render();
        // this.composer.render();
    }
}