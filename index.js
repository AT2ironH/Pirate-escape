let canvas = document.querySelector(`canvas`)
let ctx = canvas.getContext(`2d`)
canvas.style.border = `5px solid black`
let playerX = 360 
let playerY = 650
let playerWidth = 60
let playerHeight = 50
let playerIncrementX = 1.5
let playerDecrementY = 1.5
let playerDecrementX = 1.5
let playerIncrementY = 1.5
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
let playerShipIncrementY = 1
let playerShipDecrementY = 0.5
let timer = 30
let intervalId = 0
let score = 0
let timerId = 0



let countDown = document.getElementById(`countdown`)


let backgroundImg = document.createElement(`img`)
backgroundImg.src = "/imgs/waterBack.png"

let backgroundMusic = document.createElement(`audio`)
backgroundMusic.src = "/piratesSong.wav.wav"

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

const audio = document.querySelector("audio");
audio.src= "/piratesSong.wav"






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
    ctx.font = `25px Fantasy`
    ctx.fillText(`Broken chains: ` + score, 20, 400)

    if(isLeftArrow && playerX  > playerShipX -15){  
        playerX -= playerDecrementX
    }
    else if(isRightArrow && playerWidth + playerX < canvas.width - playerShipX +10){
        playerX += playerIncrementX
    }
    else if(isArrowUp && playerY > playerShipY -15){
        playerY -= playerDecrementY
    }
    else if (isArrowDown && playerY + playerHeight < playerShipY + playerShipHeight -2 ){
        playerY += playerIncrementY
    }
    

}

function breakTheChain(){
    
    if(playerX + playerImg.width > coordinatesX && playerX < coordinatesX && playerY < coordinatesY && playerY + playerImg.height > coordinatesY) { //breaks the chain
       chain.y = -500  //sets it back to this value
        coordinatesY = Math.floor(Math.random()*(playerShipY + playerShipHeight -playerShipY +1 )) + playerShipY  //
        coordinatesX = Math.floor(Math.random()*(playerShipX + playerShipWidth -playerShipX +1 )) + playerShipX     //  randomises chain down cause it was reset to come down from just one place
        chain.x = coordinatesX    // set
        playerShipY += playerShipIncrementY //
        playerY += playerShipIncrementY     
        score ++
        
        
    }
}


function platformMove(){
    
    if (chain.y + harpoonImg.height == coordinatesY || (chain.y + harpoonImg.height -0.5 == coordinatesY ||chain.y + harpoonImg.height -1 == coordinatesY)){
        
        playerShipY -= playerShipDecrementY
        coordinatesY -= playerShipDecrementY
        chain.y -= playerShipDecrementY 
        playerY -= playerShipDecrementY 
        
    }
}



function game(){
    elements()
    platformMove()
    audio.volume = 0.1;
    breakTheChain()
    // gameEnd()
    
}

function gameStart(){
    timer = 30
    timerId = setInterval (() => {
        let seconds =  timer
timer --
countDown.innerHTML = `${seconds}`
if (timer == -1){   
    timer = 0   
     clearInterval(timerId)      
    restartGame()
    clearInterval(intervalId)
}
    }, 1000)
    
    intervalId = setInterval (() => {
        requestAnimationFrame(game)
        
        }, 10)
}


window.addEventListener('load', () => {

})

