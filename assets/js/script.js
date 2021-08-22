const cards = document.querySelectorAll('.card');
let selectedCard = false;
let boardDisabled = false;
let firstClick;
let secondClick;

function selectCard() {
    if (boardDisabled) return; // if boardDisabled =true return so the rest doesnt get executed else disable board and enable it (in the match function) after the cards have been selected
    if (this === firstClick) return;
    // if we click twice on a the same card, match will equal to true and it will remove the event listener so have incorporated this line of code
    //if its the first click then the (this) varaible holds the first card but the first card varaible is still unset so the condition is  going to evaluate to false and the function wil be executed normally.
    //if its is the second car clicked then the (this) varaible holds the second card, if this equal first card then it will return from the function


    this.classList.toggle('select'); //  this keyword relates to '.card' class, if the '.select' class is there remove it, if not add it 

    if (!selectedCard) { // if selectedcard equals false then the player has selected the first card
        selectedCard = true;
        firstClick = this;
        return;
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
        resetBoard();
        console.log("match");
    } else { //Not a match,  set a delay 1000milseconds so we can see the 2nd clicked card, turn back over the cards(rotate by 180oc remove the classes '.select')
        disabledBoard = true; //unlock the board and wait until they have turned back over
        setTimeout(() => {
            firstClick.classList.remove('select');
            secondClick.classList.remove('select');
            resetBoard();

            //  disabledBoard = true;
        }, 1000);
        console.log("matc111h");
    }
}

function shuffleCards() {
    cards.forEach(card => {
        let position = Math.floor(Math.random() * 12);
        card.style.order = position;
    })
}

function resetBoard() {
    
    selectedCard = false;
    boardDisabled = false;
    firstClick = null;
    secondClick = null;
}
cards.forEach(card => card.addEventListener('click', selectCard)); // loop for each card click invoke the select card function