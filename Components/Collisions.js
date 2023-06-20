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

    getOBBMax(obb) {
        const max = obb.center.clone().add(obb.halfSize.clone());
        // console.log(max);
        return  max;
    }

    getGroundHeight(mesh, origin, dir=new THREE.Vector3(0,-1,0)) {
        const raycaster = new THREE.Raycaster();
        const rayPos = origin;
        raycaster.set(
            rayPos, 
            dir
        );
        const intersect = raycaster.intersectObject(mesh, true);
        if (intersect.length > 0) {
            return intersect[0].point;
        }
        return false;
    }

    checkBBOXvArray(bbox1, boxArray, vertical) {
        // bbox1.min.y -= .1;
        for (let i = 0; i < boxArray.length; i ++) {
            const currentBox = boxArray[i].box;
            const intersect = currentBox.intersectsOBB(bbox1);
            if(intersect && 
                vertical &&
                (currentBox.center.y + currentBox.halfSize.y) - (bbox1.center.y - bbox1.halfSize.y) < 30
            ) {
                    //console.log('colliding');
                    return {
                        point: this.getOBBMax(currentBox),
                        mesh: boxArray[i].object
                    }
            } else if (!vertical && intersect) {
                return boxArray[i];
            }
        }
        return false;
    }

    checkBBOXvArrayFaces(bbox1, boxArray, vertical) {
        // bbox1.min.y -= .1;
        for (let i = 0; i < boxArray.length; i ++) {
            const currentBox = boxArray[i].box;
            const intersect = bbox1.intersectsBox3(currentBox);
            if(intersect && vertical &&
                currentBox.max.y - (bbox1.center.y - bbox1.halfSize.y) < 10) {
                    return {
                        point: currentBox.max,
                    }
            } else if (!vertical && intersect) {
                return {
                    point: boxArray[i],
                }
            }
        }
        return false;
    }

    projectileCollisionsOBB(bbox, boxArray) {
        //showAABB(bbox);
        for (let i = 0; i < boxArray.length; i ++) {
            const currentBox = boxArray[i].box;
            const intersect = currentBox.intersectsBox3(bbox);
            if (intersect) return true;
        }
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

    getFace(dir, origin, object, d) {
        const raycaster = new THREE.Raycaster();
        const rayPos = origin;
        const distance = d;
        raycaster.set(
            rayPos, 
            dir
        );
        const intersect = raycaster.intersectObject(object, true);
        if (intersect.length > 0 && intersect[0].face) {
            return intersect[0].face;
        }
        return false;
    }

}