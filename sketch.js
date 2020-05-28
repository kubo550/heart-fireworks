let fireworks = []
let gravity, lightGravity
function setup() {
  createCanvas(windowWidth, windowHeight)
  gravity = createVector(0, 0.1)
}
setInterval(() => {
  fireworks.push(new Firework())

}, 1000);
function draw() {
  background(31)



  fireworks.forEach(f => f.update())
  fireworks = fireworks.filter(f => !f.isDead())
}
