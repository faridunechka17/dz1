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

// CONVERTER

const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')
const eurInput = document.querySelector('#eur')

somInput.addEventListener('input', () => {
    const request = new XMLHttpRequest()
    request.open('GET', ' ../data/converter.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        usdInput.value = (somInput.value / data.usd).toFixed(2)
    })
})

// DRY - don't repeat yourself (не повторять код)
const converter = (element, target, current) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            switch (current){
                case 'som':
                    target.value = (element.value / data.usd).toFixed(2)
                    break
                case 'usd':
                    target.value = (element.value * data.usd).toFixed(2)
                    break
                default:
                    break
            }
            element.value === '' && (target.value = '')
        }

    }
}
converter(somInput, usdInput, 'som')
converter(usdInput, somInput, 'usd')
// converter(eurInput, somInput, 'eur')
// converter(eurInput, usdInput, 'eur')


eurInput.addEventListener('input',  () => {
    const request = new XMLHttpRequest()
    request.open('GET', ' ../data/converter.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        usdInput.value = (eurInput.value / data.usd).toFixed(2)
        usdInput.value = (somInput.value / data.usd).toFixed(2)
        usdInput.value = (eurInput.value / data.usd).toFixed(2)
    })
})



// CARD SWITCHER

const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let count  = 1

const prev1 = (num) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then (response => response.json())
        .then (data =>{
            card.innerHTML =   `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
`
        })

}
prev1(count)

btnPrev.onclick = () => {
    count--
    if (count<1){
        count=200
    }
    prev1(count)
}
btnNext.onclick = () =>{
    count++
    if (count>200){
        count = 1
    }
    prev1(count)
}

// const fetch1 = async () => {
//    const response = await fetch`https://jsonplaceholder.typicode.com/posts` {
//        try {
//            const data = await response.json()
//                .then (response => response.json())
//                .then (data =>{
//                    console.log(data)
//                })
//        }catch (error){
//            console.log('error')
//        }
//     }
// }
// fetch1()


const asyncData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const responseData = await response.json()
        console.log(responseData)
    }catch (error){
        console.error('error')
    }
}
asyncData()

//
// let count = 0
// btnNext.onclick = () => {
//     if (count === 200){
//         count = 1
//     }else {
//         count++
//     }
//     count++
//     fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
//         .then(responce => responce.json())
//         .then(data => {
//             card.innerHTML = `
//             <p>${data.title}<p>
//             <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}<p>
//             <span>${data.id}</span>
//             `
//         })
// }
//
// let prev = 0
//
// btnPrev.onclick = () => {
//     if (prev === 200){
//         prev = 1
//     }else {
//         prev++
//     }
//     prev++
//     const request  = new XMLHttpRequest()
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/${prev}')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.onclick =() =>{
//         const data = JSON.parse(request.response)
//
//     }
// }
//     prev++
// }
// fetch(`https://jsonplaceholder.typicode.com/todos/${prev}`)
//     .then()



// WEATHER

const searchInput = document.querySelector(".cityName")
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")


const apiKey = 'e417df62e04d3b1b111abeab19cea714'
const URL = 'http://api.openweathermap.org/data/2.5/weather'
const citySearch = () => {
    searchInput.oninput = async (event) => {
        try {
            const response = await fetch(`${URL}?q=${event.target.value}&appid=${apiKey}`)
            const  data = await response.json()
            city.innerHTML = data.name ? data.name: 'Not found &iquest;'
            temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;C' : '...'}
        catch (error){
            console.log('error')
        }

    }
}
citySearch()



















