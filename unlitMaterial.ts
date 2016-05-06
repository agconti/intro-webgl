import * as THREE from 'three'
import {vertexShader} from './simpleVertexShader'
import {fragmentShader} from './solidColorPinkFragmentShader'

export const unlitMaterial = new THREE.ShaderMaterial({vertexShader, fragmentShader})
