const cards = Array.from(document.querySelectorAll('.card'));
const img = Array.from(document.querySelectorAll('img'));

for (let i=0; i<img.length; i++){
  img[i].style.visibility = "hidden";
};

for (let i=0; i<cards.length; i++){
  cards[i].addEventListener('click', function myFunction (e) {
  cards[i].classList.add('red');
  img[i].style.visibility =  "visible";

});
};

 