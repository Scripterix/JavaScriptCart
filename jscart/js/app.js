const btnCartWatch = document.querySelector('.watch').addEventListener('click', watchCartClicked);

const cartQty = document.querySelector('.qty');


function watchCartClicked() {
  console.log('coś');
  cartQty.innerHTML = 1;
}


const btnCartPen = document.querySelector('.pen').addEventListener('click', penCartClicked);

function penCartClicked() {
  cartQty.innerHTML = 1;
}

const form = document.querySelector('#task-form');

console.log(form);