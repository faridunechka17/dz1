//dz1(1)

const input = document.querySelector('#gmail_input')
const button = document.querySelector('#gmail_button')
const result = document.querySelector('#gmail_result')

const regExp =/^\w[a-z][a-zA-Z0-9._]+@gmail.com$/i
button.onclick = () => {
    if (regExp.test(input.value)) {
        result.innerHTML = 'ok'
        result.style.color ='green'

    }
    else {
        result.innerHTML = 'not ok'
        result.style.color = 'red'
    }
}

// dz1(2)

const blockChild = document.querySelector('.child_block')
const blockParent = document.querySelector('.parent_block')
let positionX = 0
let positionY = 0
const mainWidth = blockParent.offsetWidth - blockChild.offsetWidth
const mainHeight = blockParent.offsetHeight - blockChild.offsetHeight


// const blockRed = blockParent.offsetWidth
let right = 0
const blockWidth = 448

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


// card dz

// const cardHome = document.querySelector('.card')
//
// const getCard = async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//     const data = await response.json()
//     console.log(data)
//
//     cardHome.innerHTML = `
//     <img src="${`https://avatanplus.com/files/resources/original/56db1074e856715347b848d8.png`}" alt="img">
//     <p>${data.title}</p>
//     <span>${data.body}</span>
//     `
// }


// getCard()



//
//
//
//


