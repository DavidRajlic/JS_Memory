const cards = Array.from(document.querySelectorAll('.card'));
const img = Array.from(document.querySelectorAll('img'));
// cards on random positions
  const  position = document.querySelector('.position');
  for ( let  i = position.children.length; i >= 0; i--) {
      position.appendChild(position.children[Math.random() * i | 0]);
  }
  //hide image visibility
for (let i=0; i<img.length; i++){
  img[i].style.visibility = "hidden";
};
// when click on card show image and border
for (let i=0; i<img.length; i++){
  cards[i].addEventListener('click', function myFunction (e) {
  cards[i].classList.add('red');
  img[i].style.visibility =  "visible";

});
};




