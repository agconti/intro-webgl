export const vertexShader =
`
// create a shared variable for the
// VS and FS containing the normal
varying vec3 vNormal;

/**
 * Multiply each vertex by the model-view matrix
 * and the projection matrix (both provided by
 * Three.js) to get a final vertex position
 */
void main() {
  // set the vNormal value with
  // the attribute value passed
  // in by Three.js
  vNormal = normal;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
