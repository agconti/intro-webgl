import * as THREE from 'three'
import {unlitMaterial} from './unlitMaterial'
import {fakeLitMaterial} from './fakeLitMaterial'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const cameraRatio = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(75, cameraRatio, 1, 10000)

const sphereRadius:number = 100
const sphereDiameter:number = sphereRadius * 2
const numSegments:number = 32
const geometry = new THREE.SphereGeometry(sphereRadius, numSegments, numSegments)
const sceneObjects = [
  , new THREE.Mesh(geometry, unlitMaterial)
  , new THREE.Mesh(geometry, fakeLitMaterial)
]
const sceneObjectOffset = 50
const centeredContentOffset = Math.floor(sceneObjects.length / 2) * sphereDiameter * -1

sceneObjects.reduce((offset, mesh) => {
  mesh.position.set(offset, 100, 100)
  scene.add(mesh)

  offset += sphereDiameter + sceneObjectOffset
  console.log(mesh)
  return offset

}, centeredContentOffset)

renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.z = 500
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)
