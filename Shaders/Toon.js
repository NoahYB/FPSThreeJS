function bulletVertexShader() {
    return `
        varying vec3 vNormal;
        uniform vec3 direction;
        uniform float time;
        uniform vec3 origin;
        in vec2 texCoord;
        out vec2 texCoordV;
        uniform sampler2D noiseMap;
        void main() {
          vec3 newPos = position.xyz;
          texCoordV = uv;
          vec4 modelPosition = modelMatrix * vec4(newPos, 1.0);
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 clipPosition = projectionMatrix * viewPosition;
          vNormal = normalize(normalMatrix * normal);          
          gl_Position = clipPosition;
        }
    `
  }
function bulletFragmentShader() {
  return `
      #include <common>
      #include <lights_pars_begin>
      uniform vec3 uColor;
      in vec2 texCoordV;
      uniform float time;
      uniform sampler2D colorMap;
      uniform sampler2D noiseMap;
      void main() {
        vec4 color_out = texture2D(noiseMap, texCoordV);
        gl_FragColor = color_out;
        if(color_out.r - 0.5 < 0.0) {
          gl_FragColor.b = 1.0;
        }
        gl_FragColor.r = 1.0;
      }
  `
}
function baseVert() {
  return `
      varying vec3 vNormal;

      void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 clipPosition = projectionMatrix * viewPosition;
      
      vNormal = normalize(normalMatrix * normal);
      
      gl_Position = clipPosition;
      }
  `
}
function baseFrag() {
return `
    #include <common>
    #include <lights_pars_begin>
    
    uniform vec3 uColor;
    
    varying vec3 vNormal;
    
    void main() {
      vec3 col = 0.5 + 0.5*cos(position.x+uColor.xyx+vec3(0,2,4));
        gl_FragColor = vec4(col, 1.0);
    }
`
}