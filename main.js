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

let cardIndex = {
  first: -1,
  second: -1,
};

for (let i=0; i < cards.length; i++) {
  cards[i].addEventListener('click', function (e) {
    cards[i].classList.add('white');
    if ( cardIndex.first < 0) {
     cardIndex.first = i;
    } else {
      cardIndex.second = i;
    }

    cardsClicked++;

    if( cardsClicked === 1){
     cards[cardIndex.first].style.pointerEvents = 'none';
    } 

    if (cardsClicked <= 2) {
      cards[i].classList.add('red');
      img[i].style.visibility = 'visible';
    }
    
    if (cardsClicked === 2) { 
      for (let j=0; j < cards.length; j++){
       cards[j].style.pointerEvents = 'none';
      };
      
      cards[cardIndex.first].style.pointerEvents = 'none';
      cards[cardIndex.second].style.pointerEvents = 'none';
      
      setTimeout(function time () {
        cards[cardIndex.first].classList.remove('red');
        cards[cardIndex.second].classList.remove('red');
        cards[cardIndex.first].classList.remove('white');
        cards[cardIndex.second].classList.remove('white');
        

        img[cardIndex.first].style.visibility = 'hidden';
        img[cardIndex.second].style.visibility =  'hidden';
      
        if (img[cardIndex.first].className === img[cardIndex.second].className) {
          cards[cardIndex.first].style.visibility = 'hidden';
          cards[cardIndex.second].style.visibility = 'hidden';
        }
        
        for (let j=0; j < cards.length; j++){
          cards[j].style.pointerEvents = 'auto';
         };
         
         
        
        cardIndex.first = -1;
        cardIndex.second = -1;
        
        cardsClicked=0;
      }, 700);
    }
  });
};
