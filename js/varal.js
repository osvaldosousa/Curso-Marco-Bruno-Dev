const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
const toBack = document.querySelector('.toback');
let pushVaral = 200

btnRight.addEventListener('click', function() {
  pushVaral = pushVaral + 200
  elements.style =`transform: translateX(${pushVaral}px)`;

});

btnLeft.addEventListener('click', function() {
  pushVaral = pushVaral - 200
  elements.style =`transform: translateX(${pushVaral}px)`;

});