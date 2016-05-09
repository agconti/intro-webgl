import * as THREE from 'three'
import {vertexShader} from './morphingVertextShader'
import {fragmentShader} from './fakeLightFragmentShader'

export const morphingFakeLitMaterial = new THREE.ShaderMaterial({vertexShader, fragmentShader})
