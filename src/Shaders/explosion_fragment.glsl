#include <common>
#include <lights_pars_begin>
uniform vec3 uColor;
uniform float time;
varying vec3 vNormal;
void main() {
    vec3 col = 0.5 + 0.5 * cos((time/200.0)+uColor.xyx+vec3(0,2,4));
    // col.x *= 1.0/time;
    gl_FragColor = vec4(col, 1.0);
}