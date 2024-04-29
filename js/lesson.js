 //Phone Block
const  phoneInput = document.querySelector('#phone_input')
const  phoneButton = document.querySelector('#phone_button')
const  phoneSpan = document.querySelector('#phone_result')


const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)){
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'
    }else {
        phoneSpan.innerHTML = 'NOT OK'
        phoneSpan.style.color = 'red'
    }
}
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

// const tabContentBlocks = document.querySelectorAll('.tab_content_block')
// const tabContentItems = document.querySelectorAll('.tab_content_item')
// const tabParent = document.querySelector('.tab_content_items')
//
//
// const hideTabContent = () => {
//     tabContentBlocks.forEach((item) => {
//         item.style.display = 'none'
//
//     })
//     tabContentItems.forEach((item) => {
//         item.classList.remove('tab_content_item_active')
//     })
//
// }
// const showTabContent = (index = 0 ) => {
//
//     tabContentBlocks[index].style.display = 'block'
//     tabContentItems[index].classList.add('tab_content_item_active')
//
// }
// hideTabContent()
// showTabContent(0)
// tabParent.onclick = (event) => {
//     if (event.target.classList.contains('tab_content_item')){
//         tabContentItems.forEach((item,index) => {
//             if (event.target === item){
//                 hideTabContent()
//                 showTabContent(index)
//             }
//         })
//     }
// }
//
// const sliderTabs = (i = 0) => {
//     setInterval(() => {
//         i++
//         if (i > tabContentBlocks.length -1){
//             i = 0
//         }hideTabContent()
//         showTabContent(i)
//     },3000)
// }
// sliderTabs()


 // TAB SLIDER

 const tabContentItems = document.querySelectorAll('.tab_content_block')
 const tabItems = document.querySelectorAll('.tab_content_item')
 const tabContentParents = document.querySelector('.tab_content_items')

 let currentTab = 0
 // const
 const hideTabContent = () => {
     tabContentItems.forEach((item) => {
         item.style.display = 'none'
     })
     tabItems.forEach((item) => {
         item.classList.remove('tab_content_item_active')
     })
 }

 const showTabContent = (index = 0) => {
     tabContentItems[index].style.display = 'block'
     tabItems[index].classList.add('tab_content_item_active')
 }

 const switchTab = () => {
     hideTabContent()
     currentTab = (currentTab + 1) % tabItems.length
     showTabContent(currentTab)
 }

 hideTabContent()
 showTabContent()
 setInterval(switchTab, 3000)

 tabContentParents.onclick = (event) => {
     if (event.target.classList.contains('tab_content_item')) {
         tabItems.forEach((tabItems, tabindex) => {
             if (event.target === tabItems) {
                 hideTabContent()
                 currentTab = tabindex
                 showTabContent(currentTab)
             }
         })
     }
 }


// CONVERTER

// somInput.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', ' ../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.response)
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//     })
// })

// DRY - don't repeat yourself (не повторять код)
 const usdInput = document.querySelector('#usd');
 const somInput = document.querySelector('#som');
 const eurInput = document.querySelector('#eur');

 const converter = (element, target1, target2, current) => {
     element.oninput = async () => {
         try {
             const response = await fetch('../data/converter.json');
             const data = await response.json();
             switch (current) {
                 case 'som':
                     target1.value = (element.value / data.usd).toFixed(2);
                     target2.value = (element.value / data.eur).toFixed(2);
                     break;
                 case 'usd':
                     target1.value = (element.value * data.usd).toFixed(2);
                     target2.value = (element.value * data.usd / data.eur).toFixed(2);
                     break;
                 case 'eur':
                     target1.value = (element.value * data.eur).toFixed(2);
                     target2.value = (element.value * data.eur / data.usd).toFixed(2);
                     break;
                 default:
                     break;
             }
             element.value === '' && (target1.value = '');
         } catch (error) {
             console.error('Error fetching conversion data:', error);
         }
     };
 };

 converter(somInput, usdInput, eurInput, 'som');
 converter(usdInput, somInput, eurInput, 'usd');
 converter(eurInput, somInput, usdInput, 'eur');


// eurInput.addEventListener('input',  () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', ' ../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.response)
//         usdInput.value = (eurInput.value / data.usd).toFixed(2)
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//         usdInput.value = (eurInput.value / data.usd).toFixed(2)
//     })
// })



 // 2 var


//  const usdInput = document. querySelector('#usd')
//  const somInput = document. querySelector('#som')
//  const eurInput = document.querySelector('#eur')
//
//
//  somInput. addEventListener('input',() =>{
//      const request = new XMLHttpRequest()
//      request.open('GET', '../data/converter.json')
//      request.setRequestHeader('Content-type', 'application/json')
//      request.send()
//
//      request. addEventListener('load', () =>{
//          const data = JSON.parse(request.response)
//          usdInput.value = (somInput.value / data.usd).toFixed(2)
//      })
//
//
//  } )
//  //DRY - dont repeat yourself
//  const convert = (element, target, target2, current) =>{
//      element.oninput = () => {
//          const request = new XMLHttpRequest()
//          request.open('GET', '..data/converter/json')
//          request.setRequestHeader('Content-type', 'application/json')
//          request.send()
//          request.onload = () => {
//              const data = JSON.parse(request.response)
//              switch (current){
//                  case'som':
//                      target.value= (element.value / data.usd).toFixed(2)
//                      target2.value= (element.value / data.eur).toFixed(2)
//                      break
//                  case 'usd':
//                      target.value= (element.value * data.usd).toFixed(2)
//                      target2.value= (element.value  / data.usd / data .eur).toFixed(2)
//                      break
//                  // default:
//                  //     break
//                  case'eur':
//                      target2.value= (element.value * data.eur).toFixed(2)
//                      target.value= (element.value * data.eur / data.usd) .toFixed(2)
//                      break
//                  default:
//                      break
//
//              }
//              element.value === '' && (target.value = '')
//          }
//
//      }
//
//
//  }
//  convert(somInput,usdInput, eurInput,'som')
//  convert(usdInput, somInput, eurInput ,'usd')
//  convert(eurInput, somInput, usdInput,'usd')
//
//  eurInput. addEventListener('input',() =>{
//      const request = new XMLHttpRequest()
//      request.open('GET', '../data/converter.json')
//      request.setRequestHeader('Content-type', 'application/json')
//      request.send()
//
//      request.addEventListener('load', () =>{
//          const data = JSON.parse(request.response)
//          ( usdInput.value = somInput.value / data.usd).toFixed(2)
//          ( usdInput.value = eurInput.value / data.usd).toFixed(2)
//          ( somInput.value = eurInput.value / data.usd).toFixed(2)
//      })
//
//  })


// CARD SWITCHER

const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');
let count = 1;

const prev = async (num) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
        const data = await response.json();

        card.innerHTML =   `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `;
    } catch (error) {
        console.error('Error fetching todo:', error);
    }
};

prev(count);

btnPrev.onclick = () => {
    count--;
    if (count < 1) {
        count = 200;
    }
    prev(count);
};

btnNext.onclick = () => {
    count++;
    if (count > 200) {
        count = 1;
    }
    prev(count);
};

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



















