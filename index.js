const sizex = 60
const sizey = 20

let x = parseInt(Math.random() * sizex)
let y = parseInt(Math.random() * sizey)

let vx = 2
let vy = 1

move()

function move() {
    x += vx
    y += vy
    changeMove()
    printMove()
    setTimeout(() => {
        move()
    }, 80)
}

function changeMove() {
    if (x < 0 || x > sizex) vx *= -1
    if (y < 0 || y > sizey) vy *= -1
}

function printMove() {
    console.clear()
    for (let j = 0; j <= sizey; j++) {
        let px = ""
        for (let i = 0; i <= sizex; i++) {
            px += i == x ? "WINDOWS" : " "
        }
        if (j == y) console.log(px)
        if (j != y) console.log("")
    }
}

