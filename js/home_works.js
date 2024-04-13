//dz1(1)

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailSpan = document.querySelector('#gmail_result')


const regExp = /^\w[a-z0-9._]+@gmail.com$/i
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailSpan.innerHTML = 'ok'
        gmailSpan.style.color = 'green'
    }else {
        gmailSpan.innerHTML = 'not ok'
        gmailSpan.style.color = 'red'
    }
}

//dz1(2)

const blockChild = document.querySelector('.child_block')
const blockParent = document.querySelector('.parent_block')
let positionX = 0
let positionY = 0
const mainWidth = blockParent.offsetWidth - blockChild.offsetWidth
const mainHeight = blockParent.offsetHeight - blockChild.offsetHeight

//
// // const blockRed = blockParent.offsetWidth
// let right = 0
// const blockWidth = 448

const blockInput = () => {
    blockChild.style.left = `${positionX}px`
    blockChild.style.top = `${positionY}px`
    if (positionX < mainWidth && positionY === 0){
        positionX++
        setTimeout(blockInput, 4)
    }else if (positionX === mainWidth && positionY < mainHeight){
        positionY++
        setTimeout(blockInput, 4)
    }else if (positionY === mainHeight && positionX > 0){
        positionX--
        setTimeout(blockInput, 4)
    }else if (positionX === 0 && positionY > 0){
        positionY--
        setTimeout(blockInput, 4)
    }
}
blockInput()

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
const seconds = document.querySelector('#seconds')
let interval;

let count = 0
let time = false

const apdateTimer = () => {
  count++
    seconds.textContent = count
}

const startTimer = () => {
  if (time !== true){
      interval = setInterval(apdateTimer, 1000)
      time = true
  }
}
start.onclick =()=> startTimer()

const stopTimer = () => {
    clearInterval(interval)
    time = false
}
stop.onclick =() => stopTimer()

const resetTimer = () => {
    clearInterval(interval)
    count = 0
    seconds.textContent = count
    time = false
}
reset.onclick =() => resetTimer()


//
