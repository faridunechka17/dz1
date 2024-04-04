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

// function blockInput(){
//
// }
// const blockParent = document.querySelector('#parent_block')
const blockChild = document.querySelector('.child_block')

// const blockRed = blockParent.offsetWidth
let right = 0
const blockWidth = 448

const blockInput = () => {
    blockChild.style.left = `${right}px`
    if (right !== blockWidth){
        right++
        setTimeout(blockInput, 4)
    }
}
blockInput()
