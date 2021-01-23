let canvas = document.querySelector(`canvas`)
let ctx = canvas.getContext(`2d`)
canvas.style.border = `5px solid black`
 

let backgroundImg = document.createElement(`img`)
backgroundImg.src = "/imgs/waterBack.png"

let shipImg = document.createElement(`img`)
shipImg.src = "/imgs/pirate-ship.png"

let playerShipImg = document.createElement(`img`)
playerShipImg.src = "/imgs/player-ship1.png"

let harpoonImg = document.createElement(`img`)
harpoonImg.src = "/imgs/chain.png"

let playerImg = document.createElement(`img`)
playerImg.src = "/imgs/player.png"

let pirateImg = document.createElement(`img`)
pirateImg.src = "/imgs/pirate.png"

function elements(){
    ctx.drawImage(backgroundImg, 0, 0)
    ctx.drawImage(playerShipImg, 220, canvas.height - playerShipImg.height)
    ctx.drawImage(harpoonImg, 320, 0)
    ctx.drawImage(shipImg, 180, -50)
    ctx.drawImage(playerImg, 220, canvas.height - playerShipImg.height)
    ctx.drawImage(pirateImg, 430, 40)
    
    
}

function game(){
    elements()
    
}


intervalId = setInterval (() => {
    requestAnimationFrame(game)
    }, 50)