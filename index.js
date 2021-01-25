let canvas = document.querySelector(`canvas`)
let ctx = canvas.getContext(`2d`)
canvas.style.border = `5px solid black`
let playerX = 360 
let playerY = 650
let playerWidth = 60
let playerHeight = 50
let playerIncrementX = 1
let playerDecrementY = 1
let playerDecrementX = 1
let playerIncrementY = 1
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
let chain = [{x:canvas.width /1.9 , y:-625 }]





 
let startScreen = document.createElement(`img`)
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



document.addEventListener(`keydown`, (event) => {
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
    ctx.drawImage(harpoonImg, canvas.width /1.9, -625)
    for (let i = 0; i<chain.length; i++){
        ctx.drawImage(harpoonImg, chain[i].x, chain[i].y) 
        chain[i].y ++
    
        if(chain[i].y > canvas.height / 8){
            chain[i] --
                                                   
        }
}
    
    ctx.drawImage(shipImg, pirateShipX, pirateShipY, shipImg.width *1.3, shipImg.height *1.3)
    ctx.drawImage(playerImg, playerX, playerY, playerWidth,playerHeight)
    ctx.drawImage(pirateImg, canvas.width /2 , 80)

    if(isLeftArrow){
        playerX -= playerDecrementX
    }
    else if(isRightArrow){
        playerX += playerIncrementX
    }
    else if(isArrowUp){
        playerY -= playerDecrementY
    }
    else if (isArrowDown){
        playerY += playerIncrementY
    }


    

    


}






function game(){
    elements()
    
}



window.addEventListener('load', () => {
intervalId = setInterval (() => {
    requestAnimationFrame(game)
    }, 1)
})