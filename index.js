let canvas = document.querySelector(`canvas`)
let ctx = canvas.getContext(`2d`)
canvas.style.border = `5px solid black`
let playerX = 360 
let playerY = 650
let playerWidth = 60
let playerHeight = 50
let playerIncrementX = 3
let playerDecrementY = 3
let playerDecrementX = 3
let playerIncrementY = 3
let isLeftArrow = false;
let isRightArrow = false;
let isArrowUp = false;
let isArrowDown = false;
let playerShipWidth = 440
let playerShipHeight = 240
let playerShipX = canvas.width / 4
let playerShipY = canvas.height - playerShipHeight
let pirateShipX = canvas.width / 6
let pirateShipY = -80
let coordinatesY = Math.floor(Math.random()*(playerShipY + playerShipHeight -playerShipY +1 )) + playerShipY
let coordinatesX = Math.floor(Math.random()*(playerShipX + playerShipWidth -playerShipX +1 )) + playerShipX
let chain = {x:coordinatesX , y:-200 }
let playerShipIncrementY = 2
let playerShipDecrementY = 1
let timer = 0


 
let startScreen = document.createElement(`img`)     //FINISHED
startScreen.src = "/imgs/startScreen.png"


let backgroundImg = document.createElement(`img`)
backgroundImg.src = "/imgs/waterBack.png"

let backgroundMusic = document.createElement(`audio`)
backgroundMusic.src = "/Background-TidesLoop.wav"

let shipImg = document.createElement(`img`)
shipImg.src = "/imgs/pirate-ship.png"

let playerShipImg = document.createElement(`img`)
playerShipImg.src = "/imgs/player-ship1.png"

let harpoonImg = document.createElement(`img`)
harpoonImg.src = "/imgs/chain1.png"

let playerImg = document.createElement(`img`)
playerImg.src = "/imgs/player.png"

let pirateImg = document.createElement(`img`)
pirateImg.src = "/imgs/pirate.png"







document.addEventListener(`keydown`, (event) => {  //FINISHED
    if (event.key == `ArrowRight`){
        isRightArrow = true;
        isLeftArrow = false;
        isArrowUp = false;
        isArrowDown = false;
        
    }
    else if (event.key == `ArrowLeft`){
        isLeftArrow = true;
        isArrowUp = false;
        isArrowDown = false;
        isRightArrow = false;
    }
    else if (event.key == `ArrowUp`){
        isLeftArrow = false;
        isArrowUp = true;
        isArrowDown = false;
        isRightArrow = false;
        
    }
    else if (event.key == `ArrowDown`){
        isLeftArrow = false;
        isArrowUp = false;
        isArrowDown = true;
        isRightArrow = false;
    }
    })

    document.addEventListener(`keyup`, (event) => {
        isLeftArrow = false;
        isArrowUp = false;
        isArrowDown = false;
        isRightArrow = false;
    
    })






function elements(){
    ctx.drawImage(backgroundImg, 0, 0)
    ctx.drawImage(playerShipImg, playerShipX, playerShipY, playerShipWidth, playerShipHeight )
    if (chain.y + harpoonImg.height > coordinatesY){
        ctx.drawImage(harpoonImg, chain.x, chain.y)
       }
        else {
        ctx.drawImage(harpoonImg, chain.x, chain.y) 
        chain.y ++
    }
    ctx.drawImage(shipImg, pirateShipX, pirateShipY, shipImg.width *1.3, shipImg.height *1.3)
    ctx.drawImage(playerImg, playerX, playerY, playerWidth,playerHeight)
    ctx.drawImage(pirateImg, canvas.width /2 , 80)

    if(isLeftArrow && playerX  > playerShipX -15){  
        playerX -= playerDecrementX
    }
    else if(isRightArrow && playerWidth + playerX < canvas.width - playerShipX +10){
        playerX += playerIncrementX
    }
    else if(isArrowUp && playerY > playerShipY -15){
        playerY -= playerDecrementY
    }
    else if (isArrowDown && playerY + playerHeight < playerShipY + playerShipHeight -5 ){
        playerY += playerIncrementY
    }
    
    


}

function breakTheChain(){
    if(playerX + playerWidth && playerY == chain.y) {
        harpoonImg = 0
    }
}

function platformMove(){
    
    if (chain.y + harpoonImg.height == coordinatesY || chain.y + harpoonImg.height -1 == coordinatesY){
        playerShipY -= playerShipDecrementY
        coordinatesY -= playerShipDecrementY
        chain.y -= playerShipDecrementY
        playerY -= playerShipDecrementY
    }
}

// function audio() { 
//     document.sound.src = song

    
//     window.onload = audio;
// } 


function game(){
    elements()
    platformMove()
    // audio()
}



window.addEventListener('load', () => {
intervalId = setInterval (() => {
    requestAnimationFrame(game)
    }, 20)
})