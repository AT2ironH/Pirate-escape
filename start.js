let body = document.querySelector(`body`)

function remove (){
    let removeStart = document.querySelector(`section`)
    body.removeChild(removeStart)
    
}

function showCanvas(){
    let canvas = document.querySelector(`canvas`)
    canvas.style.display = `block`
        
}

function buttonStartsGame(){
    let gameButton = document.querySelector(`button`)
    gameButton.addEventListener(`click`, function(){
    remove()
    showCanvas()
    audio.play()  
    gameStart()
    
    
    
})
}

function restartGame(){
    let getDiv = document.querySelector(`.restart`)
    canvas.style.display = `none`
    getDiv.style.display = `block`
    
}
let getDiv = document.querySelector(`.restart`)
let restartButton = getDiv.querySelector(`.btn`)
    restartButton.addEventListener(`click`, function(){
        getDiv.style.display = `none`
        showCanvas() 
        resetVariables()
        gameStart()
        
    })

function restartGameIfWin(){
    let getAnotherDiv = document.querySelector(`.goodEnd`)
    canvas.style.display = `none`
    getAnotherDiv.style.display = `block`
    
}
let goodWinRestartButton = document.querySelector(`#thirdButton`)
    goodWinRestartButton.addEventListener(`click`, function(){
        let getAnotherDiv = document.querySelector(`.goodEnd`)
        getAnotherDiv.style.display = `none`
        showCanvas() 
        resetVariables()
        gameStart()

    })


window.addEventListener(`load`, () => {
    showCanvas()
    buttonStartsGame()
    
    
})