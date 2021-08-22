const cards = document.querySelectorAll('.card');

function selectCard() {
   
    this.classList.toggle('select');    //  this relates to card class, if it is true add the flip card, if false set it to turn  
  
    
    
      }

cards.forEach(card => card.addEventListener('click', selectCard)); // loop for each card click envoke the select card function