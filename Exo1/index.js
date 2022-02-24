'use strict'

let cards = document.querySelectorAll('.card')
let modal = document.querySelector('.modal')
const displayModal = () => {
    modal.classList.toggle('active')
}

document.querySelector('.modal h2').addEventListener('click', displayModal)

cards.forEach(card => {
    card.addEventListener('click', displayModal)
})

