const cards = document.querySelectorAll('.card');

function selectCard() {
       this.classList.toggle('select');    //  this keyword relates to '.card' class, if the '.select' class is there remove it, if not add it 
           }

cards.forEach(card => card.addEventListener('click', selectCard)); // loop for each card click invoke the select card function