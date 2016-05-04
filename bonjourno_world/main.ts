import * as THREE from 'three'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const cameraRatio = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(75, cameraRatio, 1, 10000 )

const geometry = new THREE.BoxGeometry(200, 200, 200)
const vertexShader = document.getElementById('vertex-shader').innerText
const fragmentShader = document.getElementById('fragment-shader').innerText
const shaderMaterial = new THREE.ShaderMaterial({vertexShader, fragmentShader})
const mesh = new THREE.Mesh( geometry, shaderMaterial )


scene.add(mesh)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.z = 1000
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)
