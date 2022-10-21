function vertexShader() {
    return `
    varying vec3 vNormal;
    varying vec3 vViewDir; 
    
    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 clipPosition = projectionMatrix * viewPosition;
      
      vNormal = normalize(normalMatrix * normal);
      vViewDir = normalize(-viewPosition.xyz);
    
      gl_Position = clipPosition;
    }
    `
  }
function fragmentShader() {
  return `
  uniform float uGlossiness;
  varying vec3 vViewDir;
  
  // other includes, uniforms and varyings...
  
  void main() {
    // directional light ...
    
    // specular reflection
    vec3 halfVector = normalize(directionalLights[0].direction + vViewDir);
    float NdotH = dot(vNormal, halfVector);
  
    float specularIntensity = pow(NdotH * lightIntensity, 1000.0 / uGlossiness);
    float specularIntensitySmooth = smoothstep(0.05, 0.1, specularIntensity);
  
    vec3 specular = specularIntensitySmooth * directionalLights[0].color;
    
    gl_FragColor = vec4(uColor * (directionalLight + ambientLightColor + specular), 1.0);
  }
  `
}