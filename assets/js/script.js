const cards = document.querySelectorAll('.card');
let selectedCard = false;
let firstClick;
let secondClick;

function selectCard() {
    this.classList.toggle('select'); //  this keyword relates to '.card' class, if the '.select' class is there remove it, if not add it 
  
    if (!selectedCard) { // if selectedcard equals false then the player has selected the first card
        selectedCard = true;
        firstClick = this;
        console.log({selectedCard, firstClick});
    } else {  // if selectedcard equals true then the player has selected the second card
        selectedCard = false;
        secondClick = this;
        console.log({selectedCard, secondClick});
    }
}

cards.forEach(card => card.addEventListener('click', selectCard)); // loop for each card click invoke the select card function