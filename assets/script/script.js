let btnBurger = document.getElementById('btn-burger');
let asideContainer = document.querySelector('#aside-container');
let btnBurgerSpan = document.querySelectorAll('#btn-burger span');

console.log(btnBurger);

btnBurger.addEventListener("click", () =>{
  btnBurger.classList.toggle("active");
  asideContainer.classList.toggle("active");
});