let btnBurger = document.getElementById('btn-burger');
let asideContainer = document.querySelector('#aside-container');
let btnBurgerSpan = document.querySelectorAll('#btn-burger span');
let copyright = document.querySelector('.copyright');

console.log(btnBurger);

btnBurger.addEventListener("click", () =>{
  btnBurger.classList.toggle("active");
  asideContainer.classList.toggle("active");
  copyright.classList.toggle("active");
  console.log(copyright);
});