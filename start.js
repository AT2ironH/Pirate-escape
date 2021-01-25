let body = document.querySelector(`body`)

function remove (){
    let removeStart = document.querySelector(`section`)
    body.removeChild(removeStart)
}

function start(){
    let canvas = document.querySelector(`canvas`)
    canvas.style.display = `block`
    initial()    
}

function buttonStartsGame(){
    let gameButton = document.querySelector(`button`)
    gameButton.addEventListener(`click`, function(){
    remove()
    start()
})

}
window.addEventListener(`load`, () => {
    start()
})