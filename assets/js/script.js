const cards = document.querySelectorAll('.card');
// Get the modal
var newGameModal = document.getElementById("newGameModal");

var rulesModal = document.getElementById("rulesModal");
// newGamebutton 
var newGameBtn = document.getElementById("newGameBtn");
var rulesBtn = document.getElementById("rulesBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var closerules = document.getElementsByClassName("closerules")[0];
//declare move varaible
let countermoves = document.getElementById("moves");
let countermatchedpairs = document.getElementById("matchedpairs");
let moves = 0;
let matchedpairs = 0;

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
        moveCounter();
        match();
    }
}




function match() {
    if (firstClick.dataset.cardtype === secondClick.dataset.cardtype) { // if first card equals second card then its a match
        firstClick.removeEventListener('click', selectCard); // disabled the user from clickiing the matched pair of cars
        secondClick.removeEventListener('click', selectCard);
        matchPairsCounter();
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

    for (let i = 0; i < cards.length; i++) {
        let position = Math.floor(Math.random() * 12);
        cards[i].style.order = position;
    }
}

function resetBoard() {

    selectedCard = false;
    boardDisabled = false;
    firstClick = null;
    secondClick = null;
}

function moveCounter() {
    moves++
    countermoves.innerHTML = `Moves: ${moves} `;
    console.log(moves);
}

function matchPairsCounter() {
    matchedpairs++
    countermatchedpairs.innerHTML = `Matched Pairs: ${matchedpairs} `;
    console.log(moves);
}

function playNewGame() {
    //reset game
    // When the user clicks on the button, close the modal and start game
    newGameModal.style.display = "none";
    shuffleCards();
    cards.forEach(card => card.addEventListener('click', selectCard)); // loop for each card click invoke the select card function
}

function rules() {
    newGameModal.style.display = "none";
    rulesModal.style.display = "block";
}


// When the user clicks on (x), close the modal and open the newGame Modal
closerules.onclick = function () {
    rulesModal.style.display = "none";
    newGameModal.style.display = "block";

}
// When the user clicks anywhere outside of the rulesModal, close it
window.onclick = function (event) {
    if (event.target == rulesModal) {
        rulesModal.style.display = "none";
    }
}

//OPENS new Game Modal at the begining
newGameModal.style.display = "block";