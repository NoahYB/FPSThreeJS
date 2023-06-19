
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
