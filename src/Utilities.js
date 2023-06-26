import {
    BoxGeometry,
    MeshBasicMaterial,
    ArrowHelper,
    Mesh,
    Vector3,
    Matrix4,
    Euler
  } from "three";
import { GlobalGame } from "./Game";

export function getTimeStampMili() {
    const d = new Date();
    let time = d.getTime();
    return time;
}

export function sanitize(string) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
}

export function showVector(v, o, c) {
    const dir = v;
    //normalize the direction vector (convert to vector of length 1)
    dir.normalize();
    const origin = o;
    const length = 100;
    const hex = c ? c: 0xffff00;
    const arrowHelper = new ArrowHelper( dir, origin, length, hex );
    GlobalGame.scene.add( arrowHelper );
}

export function threeVectorToRapier(vec3) {

}
export function randomSpherePoint(x0,y0,z0,radius){
    let u = Math.random();
    let v = Math.random();
    let theta = 2 * Math.PI * u;
    let phi = Math.acos(2 * v - 1);
    let x = x0 + (radius * Math.sin(phi) * Math.cos(theta));
    let y = y0 + (radius * Math.sin(phi) * Math.sin(theta));
    let z = z0 + (radius * Math.cos(phi));
    return new Vector3(x,y,z);
 }

export function showOBB(obb, child) {
    const geometry = new BoxGeometry( obb.halfSize.x * 2, obb.halfSize.y * 2, obb.halfSize.z * 2);
    const material = new MeshBasicMaterial( {color: 'green', wireframe: true} );
    const cube = new Mesh( geometry, material );
    cube.position.copy(obb.center);
    const euler = new Euler().setFromRotationMatrix(new Matrix4().setFromMatrix3(obb.rotation));
    cube.quaternion.setFromEuler(euler);
    GlobalGame.scene.add(cube);
}

export function showRapierCollider(halfSize, position, rotation) {
    const geometry = new BoxGeometry( halfSize.x * 2, halfSize.y * 2, halfSize.z * 2);
    const material = new MeshBasicMaterial( {color: 'green', wireframe: true} );
    const cube = new Mesh( geometry, material );
    cube.position.copy(position);
    cube.quaternion.copy(rotation);
    GlobalGame.scene.add(cube);
}
export function getAABBHalfSize(aabb) {
    const vector = new Vector3(0,0,0);
    aabb.getSize(vector).multiplyScalar(0.5);
    return vector;
    return {
        x: (aabb.max.x - aabb.min.x) / 2,
        y: (aabb.max.y - aabb.min.y) / 2,
        z: (aabb.max.z - aabb.min.z) / 2
    }
}

export function showAABB(aabb, child) {
    const geometry = new BoxGeometry(
        (aabb.max.x-aabb.min.x) / 2, 
        (aabb.max.y-aabb.min.y) / 2, 
        (aabb.max.z-aabb.min.z) / 2
        );
    const material = new MeshBasicMaterial( {color: 'green', wireframe: true} );
    const cube = new Mesh( geometry, material );
    const center = new Vector3();
    aabb.getCenter(center);
    cube.position.copy(center);
    GlobalGame.scene.add(cube);
}