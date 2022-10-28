const canvas = document.
querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity) {

        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }

    update() {
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}


const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 
    30, 'blue')
player.draw()

function spawnEnemies() {
setInterval(() => {
    const radius = 30

    let x
    let y

    if (Math.random() < 0.5) {
x = Math.random() < 0.5 ? 0 - radius : canvas.width
     + radius
y = Math.random() * canvas.height
    } else {
        x = Math.random() * canvas.width
        y = Math.random() < 0.5 ? 0 - radius : canvas.height
        + radius
    }

}

function animate() {
    requestAnimationFrame(animate)
    projectile.draw()
    projectile.update()
}

addEventListener('click', () => 
 {

})

animate()