let btnBurger = document.querySelector('#btn-burger');
let asideContainer = document.querySelector('#aside-container');
console.log(btnBurger);

btnBurger.addEventListener("click", () =>{
  btnBurger.classList.toggle("active");
  asideContainer.classList.toggle("active");
});