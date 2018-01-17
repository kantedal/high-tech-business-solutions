import * as THREE from 'three'

let camera
let scene
let renderer
const clock = new THREE.Clock()
const mouse = new THREE.Vector2(0, 0)
let mouseHold = 0.0
const mouseDelayed = new THREE.Vector2(0, 0)
let mesh
let uniforms

const onMouseDown = (e) => { 
  if (!e.target.className) {
    mouseHold = 1.0
  }
}
const onMouseUp = (e) => { 
  mouseHold = 0.0
}
const onMouseMove = (e) => { 
  mouse.x = e.clientX / (window.innerWidth)
  mouse.y = -e.clientY / (window.innerHeight)
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('mousedown', onMouseDown, false)
window.addEventListener('mouseup', onMouseUp, false)
window.addEventListener('mousemove', onMouseMove, false)
window.addEventListener('resize', onWindowResize, false)

init()
animate()

function init() {
  camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    1,
    1000
  )
  camera.position.z = 1
  scene = new THREE.Scene()
  const geometry = new THREE.PlaneGeometry(2.65, 2.375, 1)

  uniforms = {
    resolution: {
      value: new THREE.Vector2(window.innerWidth, window.innerHeight)
    },
    mouse: { value: new THREE.Vector2(1, 0) },
    mouseDelayed: { value: new THREE.Vector2(1, 0) },
    time: { value: 1.0 },
    mouseHold: { value: 0.0 }
  }

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {uniforms},
    // Shader is located in index.html
    fragmentShader: document.getElementById('fragmentShader3').textContent,
    wireframe: false
  })

  mesh = new THREE.Mesh(geometry, shaderMaterial)

  scene.add(mesh)
  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  const container = document.getElementById('container')
  container.appendChild(renderer.domElement)
}

function animate() {

  requestAnimationFrame(animate)
  mouseDelayed.x = mouseDelayed.x - 0.09 * (mouseDelayed.x - mouse.x)
  mouseDelayed.y = mouseDelayed.y - 0.09 * (mouseDelayed.y - mouse.y)
  camera.updateMatrixWorld()
  const delta = 0.02 * clock.getDelta()
  uniforms.time.value += delta * (1.0 + mouseHold * 10.0)
  uniforms.mouse.value = mouse
  uniforms.mouseHold.value = mouseHold
  uniforms.mouseDelayed.value = mouseDelayed
  renderer.render(scene, camera)
}
