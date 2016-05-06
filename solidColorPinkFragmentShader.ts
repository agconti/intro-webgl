export const fragmentShader =
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
