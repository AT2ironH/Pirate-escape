let body = document.querySelector(`body`)

function remove (){
    let removeStart = document.querySelector(`section`)
    body.removeChild(removeStart)
    
}

function start(){
    let canvas = document.querySelector(`canvas`)
    canvas.style.display = `block`
        
}

function buttonStartsGame(){
    let gameButton = document.querySelector(`button`)
    gameButton.addEventListener(`click`, function(){
    remove()
    start()
    // audio.play()   //starts audio
    
    
    
})
}

function restartGame(){
    let getDiv = document.querySelector(`.restart`)
    canvas.style.display = `none`
    getDiv.style.display = `block`
    let restartButton = document.querySelector(`.btn btn-outline-dark`)
    restartButton.addEventListener(`click`, function(){
        getDiv.style.display = `none`
        start()
        
    })
}

window.addEventListener(`load`, () => {
    start()
    buttonStartsGame()
    
    
})