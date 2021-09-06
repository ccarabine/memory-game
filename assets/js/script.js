//Modals
const newGameModal = document.getElementById("newgamemodal");
const finishGameModal = document.getElementById("finishgamemodal");
const rulesModal = document.getElementById("rulesmodal");
const confirmModal = document.getElementById("confirmmodal");
const scoreBoardModal = document.getElementById("scoreboardmodal");
const span = document.getElementsByClassName("close")[0];
const closeRules = document.getElementsByClassName("closerules")[0];
const closeScoreBoard = document.getElementsByClassName("closescoreboard")[0];
const matchedPairModal = document.getElementById("matchedpairmodal");

//Get Elements
const cards = document.querySelectorAll('.card');
const counterMoves = document.getElementById("moves");
const counterMatchedPairs = document.getElementById("matchedpairs");
const results = document.getElementById("results");
const winnerName = document.getElementById('winnername');
const saveBtn = document.getElementById("savebtn");

//declare Variables
let moves = 0;
let matchedPairs = 0;
let score = 0;
let selectedCard = false;
let boardDisabled = false;
let firstClick;
let secondClick;
let con = "<tr><td colspan='2'></td></tr><tr><td>Name  </td><td>Score  </td></tr>";
const highScore = [{
    knames: "Connie",
    kscores: 15
}];

/**
 * Function SelectCard 
 * 1.  boardDisabled: if boardDisabled =true return so the rest doesnt get executed else, disable board and enable it (in the verify match function) after the cards have been selected
 * 2.  Return false -  if its the first click then (this) holds the first card , return from function.
 *     Return True - if its the the second card clicked then  (this)  holds the second card, if this equal first card then it will remove the "select" class therefore turning the card back over
 * 3.  Turn the card over : this keyword relates to '.card' class, if the '.select' class is there remove it, if not add it 
 * 4.  if selectedcard equals false then the player has selected the first card
 * 5.  if selectedcard equals true then the player has selected the second card
 */
/* Credit I used the  following tutorial on YouTube to assist with creating the game and customised the code https://www.youtube.com/watch?v=ZniVgo8U7ek*/
function selectCard() {
    if (boardDisabled) return; //1.

    if (this === firstClick) //2.
        return;
    this.classList.add('select'); // 3.

    if (!selectedCard) { // 4.
        selectedCard = true;
        firstClick = this;
        return;
    } else { // 5.
        selectedCard = false;
        secondClick = this;
        moveCounter();
        verifyForMatch();
    }
}

/**
 * Function - verifyForMatch
 * If first card equals second card then its a match, true: call deActivateCards function if true, false call turncardsBackOver
 */

/* Credit I used the  following tutorial on YouTube to assist with creating the game and customised the code https://www.youtube.com/watch?v=ZniVgo8U7ek*/
function verifyForMatch() {
    let isMatch = firstClick.dataset.cardtype === secondClick.dataset.cardtype;
    isMatch ? deActivateCards() : turnCardsBackOver();
}

/**
 * Function - turnCardBackOver
 *  Not a match, 
 * Unlock the board and wait until they have turned back over after a 1 second delay so we can see the 2nd clicked card, turn back over the cards(rotate by 180oc) remove the classes '.select')
 * Credit I used the  following tutorial on YouTube to assist with creating the game and customised the code https://www.youtube.com/watch?v=ZniVgo8U7ek
 */

function turnCardsBackOver() {
    boardDisabled = true;
    setTimeout(() => {
        firstClick.classList.remove('select');
        secondClick.classList.remove('select');
        resetBoard();
    }, 1000);
}

/**
 * Function - deActivateCards
 * Match
 * Remove event listeners on first click and second click card
 * which will disabled the user from clickiing the matched pair of cars
 * Call matchPairsCounter Function and resetBoard
 */
// Credit I used the  following tutorial on YouTube to assist with creating the game and customised the code https://www.youtube.com/watch?v=ZniVgo8U7ek

function deActivateCards() {
    firstClick.removeEventListener('click', selectCard);
    secondClick.removeEventListener('click', selectCard);
    matchPairsCounter();
    matchedCards();
    resetBoard();
}

/**
 * Function - matchedCards
 *  Display matchedpairs modal for 1.5 seconds, then close the modal and continue
 *  If match pairs equal 6, then call finishGame function
 */
// Credit I used the  following tutorial on YouTube to assist with creating the game and customised the code https://www.youtube.com/watch?v=ZniVgo8U7ek

function matchedCards() {
    matchedPairModal.style.display = "block";
    finishGameModal.style.display = "none";
    setTimeout(() => {
        matchedPairModal.style.display = "none";
        finishGameModal.style.display = "none";
        if (matchedPairs == 6) { //4.
            finishGame();
        }
    }, 1500);
}

/**
 * Function - ShuffleCards, Reposition the order of the cards by order property and generating a random number to position it
 */
/* Credit I used the  following tutorial on YouTube to assist with creating the game and customised the code https://www.youtube.com/watch?v=ZniVgo8U7ek*/
function shuffleCards() {
    for (let i = 0; i < cards.length; i++) {
        let position = Math.floor(Math.random() * 12);
        cards[i].style.order = position;
    }
}
/**
 * Function - reset boards and resets the values of selectedCard, boardDisabled, firstClick and secondClick, and con to reset the scoreboard
 */
/* Credit I used the  following tutorial on YouTube to assist with creating the game and customised the code https://www.youtube.com/watch?v=ZniVgo8U7ek*/
function resetBoard() {
    selectedCard = false;
    boardDisabled = false;
    firstClick = null;
    secondClick = null;
    con = "<tr><td colspan='2'></td></tr><tr><td>Name  </td><td>Score  </td></tr>";
    winnerName.value = null;
}
/**
 * Function - increments number of moves the player has made by 1 and displays the result in the main window
 */
function moveCounter() {
    moves++;
    counterMoves.innerHTML = `Moves: ${moves}   `;
}

/**
 * Function - increments number of matched pairs the player has completed by 1 and displays the result in the main window
 */
function matchPairsCounter() {
    matchedPairs++;
    counterMatchedPairs.innerHTML = `Matched Pairs: ${matchedPairs} `;
}

/**
 * Function - Adds the players name and score to the addscore array
 */
/* Credit I used the site on YouTube to assist with adding to the array and customised the code https://www.youtube.com/watch?v=NxVCq4p0Kb0 */
function addToArray() {
    const addScore = {
        knames: winnerName.value,
        kscores: parseInt((score), 10)
    };
    con = "<tr><td colspan='2'></td></tr><tr><td>Name  </td><td>Score  </td></tr>";
    highScore.push(addScore);
}

/**
 * Function - Sorts highscore Array by score from highest to lowest and displays the scoreboard
 */
/* Credit I used the site to assist with creating the scoreboard and customised the code https://www.chegg.com/homework-help/questions-and-answers/exercise-ll-work-array-ll-add-nodes-dom-display-results-scores-run-application-see-user-in-q24972694*/
function displayScores() {
    highScore.sort((a, b) => (b.kscores > a.kscores) ? 1 : -1);
    for (let i = 0; i < highScore.length; i++) {
        con = con + "<tr><td>" + highScore[i].knames + "</td><td>" + highScore[i].kscores + "</td></tr>";
    }
    return con;
}

/**
 * Function Calls add to array function which saves the players name and score to the score board
 */
function saveDetails() {
    if (winnerName.value === "") {
        return false;
    } else {
        event.preventDefault();
        finishGameModal.style.display = "none";
        addToArray();
        displayScores();
        document.getElementById('scoretable').innerHTML = con;
        displayScoreBoardModal();
    }
}

/**
 * Function - closes new game modal, calls reset game function and listens out for click on card, then calls select card function
 */
function playNewGame() {
    scoreBoardModal.style.display = "none";
    newGameModal.style.display = "none";
    resetGame();
    cards.forEach(card => card.addEventListener('click', selectCard));
}

/**
 * Function - Reset scores to zero and calls remove select and shuffle card functions
 */
function resetGame() {
    moves = 0;
    matchedPairs = 0;
    score = 0;
    counterMatchedPairs.innerHTML = `Matched Pairs: ${matchedPairs} `;
    counterMoves.innerHTML = `Moves: ${moves}   `;
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
    });
}

/**
 * This Function calculates the final score and puts the values in the finish game modal
 */
function finishGame() {
    if (moves <= 9) {
        score = 80;
    } else if (moves <= 12) {
        score = 60;
    } else if (moves <= 14) {
        score = 40;
    } else if (moves <= 16) {
        score = 30;
    } else if (moves <= 18) {
        score = 20;
    } else if (moves <= 20) {
        score = 10;
    } else if (moves >= 21) {
        score = 5;
    }
    results.innerHTML = `You made ${moves} moves. Well done, your score is ${score} points`;
    finishGameModal.style.display = "block";
}


/** Modal Section */

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
    finishGameModal.style.display = "none";
    newGameModal.style.display = "block";
}

/**
 * This Function closes finish game modal,displays  scoreboard
 */
function displayScoreBoardModal() {
    finishGameModal.style.display = "none";
    scoreBoardModal.style.display = "block";
}

/**
 *  This function brings up the confirm modal which allows the user to either the restart a new Game or continue with the game 
 */
function confirmDecision() {
    confirmModal.style.display = "block";
}

/**
 * This function calls the new game function and closes the confirm modal  
 */
function restartGame() {
    confirmModal.style.display = "none";
    playNewGame();
}
/**
 * Function Click no on the Confirmation modal and it closes the confirmation modal and continues game
 */
function continueGame() {
    confirmModal.style.display = "none";
}

/**
 *  Function When the user clicks on (x), close the modal and open the newGame Modal
 */
closeRules.onclick = function () {
    rulesModal.style.display = "none";
    newGameModal.style.display = "block";
};
/** 
 *  Function When the user clicks on (x), close the modal 
 */
closeScoreBoard.onclick = function () {
    scoreBoardModal.style.display = "none";
};

/**
 * Function When the user clicks anywhere outside of the rulesModal, close it
 * */
window.onclick = function (event) {
    if (event.target == rulesModal) {
        rulesModal.style.display = "none";
    }
};

//The DOMContentLoaded fires when the DOM content is loaded, without waiting for images and stylesheets to finish loading. Opens new Game Modal at the beginning
document.addEventListener('DOMContentLoaded', () => {
    newGameModal.style.display = "block";
});