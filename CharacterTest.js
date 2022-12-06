
function newCharacterTest() {
    const PARENT = new THREE.Group();
    console.log('CREATING CHARACTER');
    // Create the character's body using a cube geometry
    let bodyGeometry = new THREE.BoxGeometry(1, 1, 1);
    let bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    let body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y += 11;
    PARENT.add(body);

    // Create the character's head using a sphere geometry
    let headGeometry = new THREE.SphereGeometry(0.5);
    let headMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0, 2 + 10, 0);
    PARENT.add(head);

    // Create the character's left arm using a cube geometry
    let leftArmGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
    let leftArmMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    let leftArm = new THREE.Mesh(leftArmGeometry, leftArmMaterial);
    leftArm.position.set(-0.75, 1 + 10, 0);
    PARENT.add(leftArm);

    // Create the character's right arm using a cube geometry
    let rightArmGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
    let rightArmMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    let rightArm = new THREE.Mesh(rightArmGeometry, rightArmMaterial);
    rightArm.position.set(0.75, 1 + 10, 0);
    PARENT.add(rightArm);

    // Create the character's left leg using a cube geometry
    let leftLegGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
    let leftLegMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    let leftLeg = new THREE.Mesh(leftLegGeometry, leftLegMaterial);
    leftLeg.position.set(-0.25, 0 + 10, 0);
    PARENT.add(leftLeg);

    // Create the character's right leg using a cube geometry
    let rightLegGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
    let rightLegMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    let rightLeg = new THREE.Mesh(rightLegGeometry, rightLegMaterial);
    rightLeg.position.set(0.25, 0 + 10, 0);
    PARENT.add(rightLeg);

    scene.add(PARENT);
    return PARENT;
}
