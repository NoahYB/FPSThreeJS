function getTimeStampMili() {
    const d = new Date();
    let time = d.getTime();
    return time;
}
function sanitize(string) {
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
function showVector(v, o, c) {
    const dir = v;
    //normalize the direction vector (convert to vector of length 1)
    dir.normalize();
    const origin = o;
    const length = 100;
    const hex = c ? c: 0xffff00;
    const arrowHelper = new THREE.ArrowHelper( dir, origin, length, hex );
    scene.add( arrowHelper );
}
function randomSpherePoint(x0,y0,z0,radius){
    let u = Math.random();
    let v = Math.random();
    let theta = 2 * Math.PI * u;
    let phi = Math.acos(2 * v - 1);
    let x = x0 + (radius * Math.sin(phi) * Math.cos(theta));
    let y = y0 + (radius * Math.sin(phi) * Math.sin(theta));
    let z = z0 + (radius * Math.cos(phi));
    return new THREE.Vector3(x,y,z);
 }
