// Handle Open/Close Buy Ticket Modal
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const closeBtn = document.querySelector('.modal-close');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');

function showModalBuyTicket() {
    modal.classList.add('open');
}

function closeModalBuyTicket() {
    modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModalBuyTicket)
}
closeBtn.addEventListener('click', closeModalBuyTicket);
modal.addEventListener('click', closeModalBuyTicket);
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})