varying vec3 vNormal;
uniform vec3 direction;
uniform float time;
uniform vec3 origin;
void main() {
    vec3 newPos = position.xyz;
    if (newPos.y < 0.0) {
        newPos.y += time * (direction.y);
        newPos.x += time * (direction.x);
        newPos.z += time * (direction.z);
    }
    vec4 modelPosition = modelMatrix * vec4(newPos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 clipPosition = projectionMatrix * viewPosition;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = clipPosition;
}