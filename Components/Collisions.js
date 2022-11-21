class Collisions {
    constructor() {

    }
    
    checkVerticalCollisions(object1, object2, velocity) {
        const raycaster = new THREE.Raycaster();
        let rayPos = object1.position.clone();
        rayPos.y += 1;
        rayPos.y += velocity.y;
        raycaster.set(
            rayPos, 
            new THREE.Vector3(0,-3,0)
        );
        let intersect = raycaster.intersectObject(object2, true);
        let d = object1.position.y - intersect[0]?.point.y;
        if (intersect.length >= 1 && d < .5) {
            return intersect[0].point.y;
        }
        return false;
    }

    checkHorizontalCollisions(object1, object2, velocity) {
        const rayPos = object1.position.clone();
        rayPos.y += 2;
        const _vectorLookMovement = new THREE.Vector3(0,0,0);

        _vectorLookMovement.setFromMatrixColumn( object1.matrix, 0 );

        _vectorLookMovement.crossVectors( object1.up, _vectorLookMovement );

        _vectorLookMovement.multiplyScalar(velocity.z);

        const raycaster = new THREE.Raycaster();

        raycaster.set(
            rayPos, 
            _vectorLookMovement
        );

        let intersect = raycaster.intersectObject(object2, true);

        if (intersect.length >= 1 && intersect[0].distance < 2) {
            return intersect[0].point;
        }

        const _vectorStrafeMovement = new THREE.Vector3(0,0,0);

        _vectorStrafeMovement.setFromMatrixColumn(object1.matrix, 0);

        _vectorStrafeMovement.multiplyScalar(velocity.x);

        raycaster.set(
            rayPos, 
            _vectorStrafeMovement
        );

        intersect = raycaster.intersectObject(object2, true);

        if (intersect.length >= 1 && intersect[0].distance < 2) {
            return intersect[0].point;
        }
        return false;
    }

    checkBBOX(bbox1, bbox2) {

    }

    checkBBOXvArray(bbox1, boxArray) {
        bbox1.min.y -= .1;
        let vertical;
        let horizontal;
        for (let i = 0; i < boxArray.length; i ++) {
            const currentBox = boxArray[i];
            const intersect = bbox1.intersectsBox(currentBox);
            if(intersect) {
                if (currentBox.max.y - bbox1.min.y < 1) {
                    vertical = {
                        type: 'vertical',
                        point: currentBox.max,
                    }
                } else {
                    horizontal = currentBox;
                }
            }
        }
        return {horizontal, vertical};
        return false;
    }

    show(pos) {
        const geometry = new THREE.BoxGeometry( .1, .1, .1 );
        const material = new THREE.MeshBasicMaterial( {color: 'green'} );
        const cube = new THREE.Mesh( geometry, material );
        cube.position.copy(
            pos.clone());
        scene.add(cube);
        
    }
}