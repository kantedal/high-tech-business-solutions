let gl
let shaderProgram
let vertexBuffer
let indexBuffer
let width: number
let height: number
let time: number = 0.0

const vertices = [
  -1.0,  1.0, 0.0,
  -1.0, -1.0, 0.0,
   1.0, -1.0, 0.0,
   1.0,  1.0, 0.0 
]

const indices = [3, 2, 1, 3, 1, 0]

const mouse = [0, 0]
let mouseHold = 0.0
const mouseDelayed = [0, 0]
let isMobile = false
let firstRender = true

const onMouseDown = (e) => { 
  if (!e.target.className) {
    mouseHold = 1.0
  }
}
const onMouseUp = (e) => { 
  mouseHold = 0.0
}
const onMouseMove = (e) => { 
  mouse[0] = -e.clientX / (window.innerWidth)
  mouse[1] = -e.clientY / (window.innerHeight)
}

const onWindowResize = () => {
  width = window.innerWidth
  height = window.innerHeight
}

window.addEventListener('mousedown', onMouseDown, false)
window.addEventListener('mouseup', onMouseUp, false)
window.addEventListener('mousemove', onMouseMove, false)
window.addEventListener('resize', onWindowResize, false)

const animate = () => {
  if (!isMobile) {
    requestAnimationFrame(animate)
  }

  if (window.pageYOffset === 0 || firstRender) {
    mouseDelayed[0] = mouseDelayed[0] - 0.09 * (mouseDelayed[0] - mouse[0])
    mouseDelayed[1] = mouseDelayed[1] - 0.09 * (mouseDelayed[1] - mouse[1])

    gl.useProgram(shaderProgram)
  
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer) 

    const coord = gl.getAttribLocation(shaderProgram, 'coordinates')
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(coord)

    gl.uniform2fv(gl.getUniformLocation(shaderProgram, 'resolution'), [width, height])
    gl.uniform2fv(gl.getUniformLocation(shaderProgram, 'mouse'), mouse)
    gl.uniform2fv(gl.getUniformLocation(shaderProgram, 'mouseDelayed'), mouseDelayed)
    gl.uniform1f(gl.getUniformLocation(shaderProgram, 'time'), time += 0.005)
    gl.uniform1f(gl.getUniformLocation(shaderProgram, 'mouseHold'), 0.0)

    /*============= Drawing the Quad ================*/
    gl.clearColor(0.5, 0.5, 0.5, 0.9)
    gl.enable(gl.DEPTH_TEST)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.viewport(0, 0, width, height)
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0)

    firstRender = false
  } 
}

export const initThreeBackground = (threeContainer: any, mobile: boolean) => {
  isMobile = mobile
  gl = threeContainer.getContext('experimental-webgl')

  width = threeContainer.width 
  height = threeContainer.height

  vertexBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
  gl.bindBuffer(gl.ARRAY_BUFFER, null)

  indexBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW)
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)

  const vertCode = `
    attribute vec3 coordinates;
    void main() {
      gl_Position = vec4(coordinates, 1.0);
    }
  `
  
  const vertShader = gl.createShader(gl.VERTEX_SHADER)
  gl.shaderSource(vertShader, vertCode)
  gl.compileShader(vertShader)

  const fragCode = document.getElementById('fragmentShader3').textContent
  
  const fragShader = gl.createShader(gl.FRAGMENT_SHADER)
  gl.shaderSource(fragShader, fragCode)
  gl.compileShader(fragShader)

  shaderProgram = gl.createProgram()
  gl.attachShader(shaderProgram, vertShader)
  gl.attachShader(shaderProgram, fragShader)
  gl.linkProgram(shaderProgram)

  animate()
}
