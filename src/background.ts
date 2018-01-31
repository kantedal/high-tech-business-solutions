let gl
let shaderProgram
let vertexBuffer
let indexBuffer
let width: number
let height: number
let time: number = 0.0

const frag = `
  precision highp float;
  uniform vec2 mouseDelayed;
  uniform vec2 resolution;
  uniform float time;

  const float EPSILON = 0.1;

  float intersectSDF(float distA, float distB) {
    return max(distA, distB);
  }

  float unionSDF(float distA, float distB) {
    return min(distA, distB);
  }

  float differenceSDF(float distA, float distB) {
    return max(distA, -distB);
  }

  float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }

  float sphereSDF(vec3 p) {
    return length(p) - 1.0;
  }

  float cubeSDF(vec3 p, vec3 b, float r) {
    return length(max(abs(p)-b,0.0)) - r;
  }

  float waterSDF(vec3 p) {
    float surface = 0.01*(sin(20.0*p.x + 50.0*time) + sin(20.0*p.z + 30.0*time) + 10.0 * sin(p.x * p.z + 4.0*time));
    return p.y - surface;
  }

  float sceneSDF(vec3 p) {
    return waterSDF(p);
  }

  vec3 estimateNormal(vec3 p) {
    return normalize(vec3(
        sceneSDF(vec3(p.x + EPSILON, p.y, p.z)) - sceneSDF(vec3(p.x - EPSILON, p.y, p.z)),
        sceneSDF(vec3(p.x, p.y + EPSILON, p.z)) - sceneSDF(vec3(p.x, p.y - EPSILON, p.z)),
        sceneSDF(vec3(p.x, p.y, p.z  + EPSILON)) - sceneSDF(vec3(p.x, p.y, p.z - EPSILON))
    ));
  }

  void main() {
    vec3 camPos = vec3(10.0 - 0.30 * mouseDelayed.x, 4.0 + 0.5 * mouseDelayed.y, 7.0 + 1.5 * mouseDelayed.x);
    vec3 normal = vec3(0.0);
    vec3 light = normalize(vec3 (1.0, 1.0, 1.0));

    vec3 camDirection = normalize(-camPos); // Point camera towards origo

    // Calculate camera orientation
    vec3 up = vec3(0.0, 1.0 ,0.0);
    vec3 right = normalize(cross(camDirection, up));
    up = normalize(cross(right, camDirection));

    float x = 2.0 * gl_FragCoord.x / resolution.x - 1.0;
    float y = 2.0 * gl_FragCoord.y / resolution.y - 1.0;

    float screenRatio = resolution.x / resolution.y; 
    
    float nearClip = 2.0;

    // Pixel position
    float randomStart = 0.01 * rand(vec2(x, y));
    randomStart = 0.9;
    vec3 pixelPos = camPos + camDirection * (nearClip + randomStart) + x * screenRatio * right + y * up;

    // Ray starting position
    vec3 ray = pixelPos;
    vec3 rayDirection = normalize(pixelPos - camPos);

    const float MAX_MARCHING_STEPS = 10.0;

    float v = 0.0; 
    for(float i = 0.0; i < MAX_MARCHING_STEPS; i++){

      float dist = sceneSDF(ray);

      if (dist < EPSILON){ // Hit surface
        normal = estimateNormal(ray);

        float diffuse = max(dot(normal, light), 0.0);
        float ambient = 0.00;
        vec3 R = reflect(-light, normal);
        vec3 V = normalize(camPos - ray); // View direction
        float specular = pow(max(dot(R, V), 0.0), 5.0);
        float specular2 = pow(max(dot(R, V), 0.0), 100.0);
        v +=  ambient +  0.44 * diffuse + 0.2 * specular;
      }
      ray += dist * rayDirection;
      
    }
    
    gl_FragColor = vec4(vec3(0.8) - 0.08 * vec3(1.3 * v, 1.3 * v, v), 1.0);
  }
`

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

  const fragCode = frag
  
  const fragShader = gl.createShader(gl.FRAGMENT_SHADER)
  gl.shaderSource(fragShader, fragCode)
  gl.compileShader(fragShader)

  shaderProgram = gl.createProgram()
  gl.attachShader(shaderProgram, vertShader)
  gl.attachShader(shaderProgram, fragShader)
  gl.linkProgram(shaderProgram)

  animate()
}
