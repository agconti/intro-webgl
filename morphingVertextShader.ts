export const vertexShader =
`
// create a shared variable for the
// VS and FS containing the normal
attribute float displacement;
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
  vec3 newPosition = position + normal * vec3(displacement);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
