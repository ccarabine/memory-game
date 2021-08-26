//Modals
var newGameModal = document.getElementById("newGameModal");
var rulesModal = document.getElementById("rulesModal");
var confirmModal = document.getElementById("confirmModal");
var newGameBtn = document.getElementById("newGameBtn");
var rulesBtn = document.getElementById("rulesBtn");
var scoreboardmodal = document.getElementById("scoreboardmodal");
var span = document.getElementsByClassName("close")[0];
var closerules = document.getElementsByClassName("closerules")[0];
var closeScoreBoard = document.getElementsByClassName("closeScoreBoard")[0];
var con = "<tr><td colspan='2'></td></tr><tr><td>Name  </td><td>Score  </td></tr> ";

//Get Elements
const cards = document.querySelectorAll('.card');
let countermoves = document.getElementById("moves");
let countermatchedpairs = document.getElementById("matchedpairs");
let resultmoves = document.getElementById("resultmoves");
let resultscore = document.getElementById("resultscore");

//declare Variables
let moves = 0;
let matchedpairs = 0;
let score = 0;
let selectedCard = false;
let boardDisabled = false;
let firstClick;
let secondClick;
const names = document.getElementById('name');
//const scores =document.getElementById('score');

const highScore = [{
    knames: "chris",
    kscores: 15
},{
    knames: "chris",
    kscores: 15
},{
    knames: "chris",
    kscores: 15
},{
    knames: "chris",
    kscores: 15
}

]




/**
 * Function SelectCard 
 * 1.  boardDisabled: // if boardDisabled =true return so the rest doesnt get executed else disable board and enable it (in the match function) after the cards have been selected
 * 2. if statement to fix bug :if user clicks twice on a the same card, match will equal to true and it will remove the event listener so have incorporated this line of code
 *    solution: if its the first click then the (this) varaible holds the first card but the first card varaible is still unset so the condition is  going to evaluate to false and the function wil be executed normally.
 *   if its is the second card clicked then the (this) varaible holds the second card, if this equal first card then it will remove the "select" class therefore turning the card back over
 * 3. Turn the card over : this keyword relates to '.card' class, if the '.select' class is there remove it, if not add it 
 * 4. if selectedcard equals false then the player has selected the first card
 * 5. if selectedcard equals true then the player has selected the second card
 */
function selectCard() {
    if (boardDisabled) return; //1.
    if (this === firstClick) { //2.
        this.classList.remove('select');
        return;
    }
    this.classList.add('select'); // 3.

    if (!selectedCard) { // 4.
        selectedCard = true;
        firstClick = this;
        return;
    } else { // 5.
        selectedCard = false;
        secondClick = this;
        moveCounter();
        match();
    }
}

/**
 * Function - Match
 * 1.if first card equals second card then its a match, remove event listeners on first click and second click card
 * which will disabled the user from clickiing the matched pair of cars
 * 2. Call matchPairsCounter Function and resetBoard
 * 3. If match pairs equal 6, then call finishGame function
 * 4. Unlock the board and wait until they have turned back over
 * 5. Not a match,  set a delay 1000milseconds so we can see the 2nd clicked card, turn back over the cards(rotate by 180oc remove the classes '.select')
 */
function match() {
    if (firstClick.dataset.cardtype === secondClick.dataset.cardtype) { // 1. 
        firstClick.removeEventListener('click', selectCard);
        secondClick.removeEventListener('click', selectCard);
        matchPairsCounter(); //2.
        resetBoard();
        if (matchedpairs == 6) { //3.
            finishGame();
        }
    } else { //4.
        disabledBoard = true;
        setTimeout(() => { //5. 
            firstClick.classList.remove('select');
            secondClick.classList.remove('select');
            resetBoard();
        }, 1000);
    }
}
/**
 * Function - ShuffleCards, Reposition the order of the cards by order property and generating a random number to position it
 */
function shuffleCards() {
    for (let i = 0; i < cards.length; i++) {
        let position = Math.floor(Math.random() * 12);
        cards[i].style.order = position;
    }
}
/**
 * Function - reset boards and resets the values of selectedCard, boardDisabled, firstClick and secondClick
 */
function resetBoard() {

    selectedCard = false;
    boardDisabled = false;
    firstClick = null;
    secondClick = null;
}
/**
 * Function - increments moves variable by 1 and displays the result in the main window
 */
function moveCounter() {
    moves++
    countermoves.innerHTML = `Moves: ${moves}   `;
}
/**
 * Function - increments matchpairs variable by 1 and displays the result in the main window
 */
function matchPairsCounter() {
    matchedpairs++
    countermatchedpairs.innerHTML = `Matched Pairs: ${matchedpairs} `;
}


function addToArray() {

    const addScore = {
        knames: names.value,
        kscores: parseInt((score), 10)
    }
    highScore.push(addScore);

}

function displayScores() {
    highScore.sort((a, b) => (b.kscores > a.kscores) ? 1 : -1);
 
        for (i = 0; i < highScore.length; i++)  
        {
            con = con + "<tr><td>" + highScore[i].knames + "</td><td>" + highScore[i].kscores + "</td></tr>"
        }
   return con;
   
}

/**
 * Function - closes new game modal, calls reset game function and listens out for click on card, then calls select card function
 */
function playNewGame() {
    newGameModal.style.display = "none";
    resetGame();
    cards.forEach(card => card.addEventListener('click', selectCard)); // loop for each card click invoke the select card function
}

/**
 * Function - Reset scores to zero and calls remove select and shuffle card functions
 */
function resetGame() {
    moves = 0;
    matchedpairs = 0;
    score = 0;
    countermatchedpairs.innerHTML = `Matched Pairs: ${matchedpairs} `;
    countermoves.innerHTML = `Moves: ${moves}   `;
    removeSelect();
    shuffleCards();
}

/**
 * Function - Removes '.select' from all cards, so they show the back card
 */
function removeSelect() {
    let selectCards = Array.from(document.querySelectorAll('.select'));

    selectCards.forEach(function (selectCard) {
        selectCard.classList.remove('select');
    })
};

/**
 * This Function closes the new game modal and displays the new rule modal
 */
function rules() {
    newGameModal.style.display = "none";
    rulesModal.style.display = "block";
}

/**
 * This Function closes the finishgamemodal and displays the new game modal
 */
function displayNewGameModal() {
    finishgamemodal.style.display = "none";
    newGameModal.style.display = "block";

}
function displayScoreBoardModal() {
    finishgamemodal.style.display = "none";
    addToArray();
    displayScores(con);
    document.getElementById('scoretable').innerHTML = con;
    scoreboardmodal.style.display = "block";

}

/**
 * This Function calcualtes the final score and puts the values in the finish game modal
 */
function finishGame() {
    if (moves <= 7) {
        score = 50
    } else if (moves <= 10) {
        score = 40
    } else if (moves <= 13) {
        score = 30
    } else if (moves <= 16) {
        score = 20
    } else if (moves <= 19) {
        score = 10
    } else if (moves >= 20) {
        score = 0
    }
    resultmoves.innerHTML = `You have made ${moves} moves`;
    resultscore.innerHTML = `Your score is ${score} moves`;
  
    finishgamemodal.style.display = "block";
}

/**
 *  This function allows the user clicks on restart Game, the confirmation opens modal 
 */
function confirmDecision() {
    confirmmodal.style.display = "block";
}

/**
 * This function calls the new game function and closes the confirm modal  
 */
function restartGame() {
    displayNewGameModal()
    confirmmodal.style.display = "none";
}
/**
 * Function Click no on the Confirmation modal and it closes the confirmation modal and continues game
 */
function continueGame() {
    confirmmodal.style.display = "none";
}
// When the user clicks on (x), close the modal and open the newGame Modal
closerules.onclick = function () {
    rulesModal.style.display = "none";
    newGameModal.style.display = "block";

}
// When the user clicks on (x), close the modal 
closeScoreBoard.onclick = function () {
    scoreboardmodal.style.display = "none";
    

}


// When the user clicks anywhere outside of the rulesModal, close it
window.onclick = function (event) {
    if (event.target == rulesModal) {
        rulesModal.style.display = "none";
    }
}

//OPENS new Game Modal at the begining
//newGameModal.style.display = "block";
/*finishgamemodal.style.display = "block";*/
displayScoreBoardModal();