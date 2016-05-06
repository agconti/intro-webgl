export const fragmentShader =
`
// same name and type as VS
varying vec3 vNormal;

/**
 * Set the colour to a lovely pink.
 * Note that the color is a 4D Float
 * Vector, R,G,B and A and each part
 * runs from 0.0 to 1.0
 */
void main() {
  // calc the dot product and clamp
  // 0 -> 1 rather than -1 -> 1
  vec3 light = vec3(0.5,0.2,1.0);

  // ensure it's normalized
  light = normalize(light);

  // calculate the dot product of
  // the light to the vertex normal
  float dProd = max(0.0, dot(vNormal, light));

  gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
}
`
