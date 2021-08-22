const cards = document.querySelectorAll('.card');
let selectedCard = false;
let firstClick;
let secondClick;

function selectCard() {
    this.classList.toggle('select'); //  this keyword relates to '.card' class, if the '.select' class is there remove it, if not add it 

    if (!selectedCard) { // if selectedcard equals false then the player has selected the first card
        selectedCard = true;
        firstClick = this;
    } else { // if selectedcard equals true then the player has selected the second card
        selectedCard = false;
        secondClick = this;
        match();
    }
}




function match() {
    if (firstClick.dataset.cardtype === secondClick.dataset.cardtype) { // if first card equals second card then its a match
        firstClick.removeEventListener('click', selectCard); // disabled the user from clickiing the matched pair of cars
        secondClick.removeEventListener('click', selectCard);
    } else { //Not a match,  set a delay so we can see the 2nd clicked card, unclick the cards - remove the classes '.select'
        setTimeout(() => {
            firstClick.classList.remove('select');
            secondClick.classList.remove('select');
        }, 1000);
    }
}
cards.forEach(card => card.addEventListener('click', selectCard)); // loop for each card click invoke the select card function