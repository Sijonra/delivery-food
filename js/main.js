const modal = document.querySelector(".modal");
const cartButton = document.querySelector(".button-cart");
const close = document.querySelector(".modal-dialog-header-close")

console.log(cartButton);
console.log(close);

cartButton.addEventListener("click", OpenClass);
close.addEventListener("click", ToogleClass);

function OpenClass(){
  modal.classList.toggle("disactive");
}

function ToogleClass(){
  modal.classList.toggle("disactive");
}

new WOW().init();
