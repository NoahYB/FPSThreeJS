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