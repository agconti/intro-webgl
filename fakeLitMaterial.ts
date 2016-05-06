import * as THREE from 'three'
import {vertexShader} from './simpleVertexShader'
import {fragmentShader} from './fakeLightFragmentShader'

export const fakeLitMaterial = new THREE.ShaderMaterial({vertexShader, fragmentShader})
