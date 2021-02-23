const cards = Array.from(document.querySelectorAll('.card'));
const img = Array.from(document.querySelectorAll('img'));
const div = Array.from(document.querySelectorAll('div'));

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

let cardIndex = {
  first: -1,
  second: -1,
};

for (let i=0; i < cards.length; i++) {
  cards[i].addEventListener('click', function (e) {
    // if card is already clicked, do nothing
    // check if first card is already clicked
    // if 2 cards are clicked and not a pair, disable clicks until setTimeout is done

    
    // if first card is not clicked save first index
    if ( cardIndex.first < 0) {
     cardIndex.first = i;
    } else {
      cardIndex.second = i;
    }
  

    cardsClicked++;
  
    if (cardsClicked <= 2) {
      cards[i].classList.add('red');
      img[i].style.visibility = 'visible';
    }
    
    if (cardsClicked === 2) {
      setTimeout(function time () {
        cards[cardIndex.first].classList.remove('red');
        img[cardIndex.first].style.visibility =  "hidden";
        cards[cardIndex.second].classList.remove('red');
        img[cardIndex.second].style.visibility =  "hidden";

        if (cardIndex.second >= 0) {
          if (img[cardIndex.first].className === img[cardIndex.second].className) {
            cards[cardIndex.first].style.visibility =  'hidden';
            cards[cardIndex.second].style.visibility =  'hidden';
          }
        }

        cardIndex.first = -1;
        cardIndex.second = -1;
        cardsClicked=0;
      }, 700);
    }
  });
};
