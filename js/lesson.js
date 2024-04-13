// //Phone Block
// // const  phoneInput = document.querySelector('#phone_input')
// // const  phoneButton = document.querySelector('#phone_button')
// // const  phoneSpan = document.querySelector('#phone_result')
// //
// //
// // const regExp = /^\+996 {2579}\d{2} \d{2}-\d{2}-\d{2}$/i
// // phoneButton.onclick = () => {
// //     if (regExp.test(phoneInput.value)){
// //         phoneSpan.innerHTML = 'OK'
// //         phoneSpan.style.color = 'green'
// //     }else {
// //         phoneSpan.innerHTML = 'NOT OK'
// //         phoneSpan.style.color = 'red'
// //     }
// // }
//
// // основы синхронности
//
// //синхронный код
//
// // console.log(1)
// // console.log(2)
// // console.log(3)
//
// //асинхронных код
//
// setTimeout(() => {
//     console.log(1)
// }, 2000)
//
// console.log(2)
//
// setTimeout(() => {
//     console.log(3)
// }, 800)
//
// //
// setInterval(() => {
//     console.log('Hello!')
// }, 1000)
//
// //
// const interval = setInterval(() => {
//     console.log('Hello!')
// },1000)
//
// setTimeout(() => {
//     clearInterval(interval)
// }, 5000)
//
// // EVENT LOOP - цикл событий
// console.log(1)

//

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')


const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'

    })
    tabContentItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })

}
const showTabContent = (index = 0 ) => {

    tabContentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')

}
hideTabContent()
showTabContent(0)
tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabContentItems.forEach((item,index) => {
            if (event.target === item){
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}

const sliderTabs = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContentBlocks.length -1){
            i = 0
        }hideTabContent()
        showTabContent(i)
    },3000)
}
sliderTabs()

