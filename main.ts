import * as THREE from 'three'
import {unlitMaterial} from './unlitMaterial'
import {fakeLitMaterial} from './fakeLitMaterial'
import {morphingFakeLitMaterial} from './morphingFakeLitMaterial'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const viewAngle:number = 75
const aspectRatio:number = window.innerWidth / window.innerHeight
const near:number = 1
const far:number = 10000
const camera = new THREE.PerspectiveCamera(viewAngle, aspectRatio, near, far)

const sphereRadius:number = 5
const sphereDiameter:number = sphereRadius * 2
const numSegments:number = 32
const geometry = new THREE.SphereGeometry(sphereRadius, numSegments, numSegments)
const attributes = {
  displacement: {
    type: 'f'
  , value: []
  }
}


const sceneObjects = [
  , new THREE.Mesh(geometry, unlitMaterial)
  , new THREE.Mesh(geometry, fakeLitMaterial)
  , new THREE.Mesh(attributes, geometry, morphingFakeLitMaterial)
]
const sceneObjectOffset:number = 50
const centeredContentOffset:number = Math.floor(sceneObjects.length / 2) * sphereDiameter * -1
sceneObjects.reduce((offset, mesh) => {
  mesh.position.set(offset, 100, 100)
  scene.add(mesh)

  offset += sphereDiameter + sceneObjectOffset
  return offset

}, centeredContentOffset)

attributes.displacement.value = geometry.vertices.map(() => Math.random() * 30)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.z = 500
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)
