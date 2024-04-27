const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = ()=>{
    modal.style.display = 'block'
    document.body.overflow = 'hidden'
}

const closeModal = () =>{
    modal.style.display = 'none'
    document.body.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal){
        closeModal()
    }
}

const modalEnd = () => {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
}

const modalEndScroll = () => {
    if (modalEnd()){
        openModal()
        window.removeEventListener("scroll", modalEndScroll)
    }
}

window.addEventListener("scroll", modalEndScroll)

setTimeout(openModal, 10000)


// TG BOT

const form = document.querySelector('form')

const TOKEN = "6372131032:AAHJeCgnbnF9nAhlPZhS9T77BBhcmJpCa6c"
const CHAT_ID = '@project_group_farida'
const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`

form.onsubmit = async (event) => {
    event.preventDefault()
    const result = event.target
    const {name, phone} = Object.fromEntries(new FormData(result).entries())
    const text = `ОТ: ${name}\n Номер: ${phone}`

    await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},

        body:JSON.stringify({
            chat_id: CHAT_ID,
            text
        })
    })
}










