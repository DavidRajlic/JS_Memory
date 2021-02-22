const cards = Array.from(document.querySelectorAll('.card'));
const img = Array.from(document.querySelectorAll('img'));



// cards on random positions
const position = document.querySelector('.position');

// Fisher-Yates shuffle
for ( let i = position.children.length; i >= 0; i--) {
  position.appendChild(position.children[Math.random() * i | 0]);
}

//hide image visibility
for (let i=0; i<img.length; i++){
  img[i].style.visibility = "hidden";
};

// When card is clicked show image and border
let cardsClicked = 0;
for (let i=0; i < cards.length; i++) {
  cards[i].addEventListener('click', function (e) {
    cardsClicked++;
    cards[i].classList.add('red');
    img[i].style.visibility =  "visible";
    
      if (cardsClicked>=3) 
      for (let i=0; i < cards.length; i++) {
        cards[i].classList.remove('red');
        img[i].style.visibility ='hidden';
        cardsClicked=0;
      }
   
   
     /* cards[i].classList.remove('red');
      img[i].style.visibility ='hidden';
      cardsClicked = 0;
    }*/
  
  });
};
/*for (let i=0; i < cards.length; i++) {
  cards[i].addEventListener('click', function (e) {
    cardsClicked++;
    if ( cardsClicked === 2) {
      cards[i].classList.remove('red');
      img[i].style.visibility ='hidden';
      cardsClicked = 0;
    } else {
      cards[i].classList.add('red');
      img[i].style.visibility =  "visible";
    } 
  });
};
*/
