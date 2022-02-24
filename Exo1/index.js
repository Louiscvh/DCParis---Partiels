'use strict'

let cards = document.querySelectorAll('.card')
let modal = document.querySelector('.modal')
console.log(cards)

cards.forEach(card => {
    card.addEventListener('click', displayModal)
})

const displayModal = () => {

}