import * as THREE from 'three'

const vertexShader =
`
/**
 * Multiply each vertex by the model-view matrix
 * and the projection matrix (both provided by
 * Three.js) to get a final vertex position
 */
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
const fragmentShader =
`
/**
 * Set the colour to a lovely pink.
 * Note that the color is a 4D Float
 * Vector, R,G,B and A and each part
 * runs from 0.0 to 1.0
 */
void main() {
  gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
}
`

export const unlitMaterial = new THREE.ShaderMaterial({vertexShader, fragmentShader})
