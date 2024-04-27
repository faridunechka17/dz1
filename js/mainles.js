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


// 8dz


const ccg = document.querySelector('.ccg')
const request = async () => {
    try {
        const fetchRequest = await fetch ('https://jsonplaceholder.typicode.com/posts')
        const data = await fetchRequest.json()
        data.forEach(card => {
            const change = document.createElement('div')
            change.setAttribute('class', "card")
            change.innerHTML = `
                <img src='https://s0.rbk.ru/v6_top_pics/media/img/1/46/754788766685461.jpeg' alt='img'/>
                  <p>:${card.title}</p>
                  <p>${card.body}</p>
                `
            ccg.append(change)

        })
    }catch (error){
        console.log('err')
    }
}
request()



