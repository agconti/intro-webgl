export const fragmentShader =
`
varying vec3 vNormal;

/**
 * Set the colour to a lovely pink.
 * Note that the color is a 4D Float
 * Vector, R,G,B and A and each part
 * runs from 0.0 to 1.0
 */
void main() {
  vec3 color = vec3(0.0, 0.0, 1.0);
  vec3 lightSource = vec3(0.5, 0.2, 1.0);
  lightSource = normalize(lightSource);
  float exposureToLight = max(0.0, dot(vNormal, lightSource));

  gl_FragColor = vec4(color * exposureToLight, 1.0);
}
`
