var basket = document.querySelector(".nav-link");
var basketFooter = document.querySelector(".button__footer");
var modal = document.querySelector(".modal");
var fullName = modal.querySelector("[name=fullName]");


// Модальное окно – открытие
function deleteClass (event) {
  event.preventDefault();
  console.log("По мне кликнули");
  modal.classList.remove("form-hidden");
  fullName.focus();
};

basket.addEventListener("click", deleteClass); //Открытие формы в шапке
basketFooter.addEventListener("click", deleteClass); //Открытие формы в футере


var closeModal = document.querySelector(".modal-close");
var body = document.querySelector("main");

// Модальное окно – закрытие
function addClass () {
  modal.classList.add("form-hidden");
  console.log("Меня закрыли");
};

closeModal.addEventListener("click", addClass); //Закртытие по кнопке
// body.addEventListener("click", addClass); //Закрытие при нажатии окна в любом месте


//Слайдер
var blockSlider = document.querySelector(".slider-controls"); //Блок со всеми кнопками
console.log(blockSlider);
var btnSlider = blockSlider.querySelectorAll("button"); //Массив кнопок слайдера
console.log(btnSlider);
const arrBtn = [];

blockSlider.addEventListener("click", function(active) {
  const target = active.target
  Array.from(btnSlider).forEach(item => {
    item.classList.remove("current");
    console.log("remove");
  });
  target.classList.add("current");
  console.log("add");
});
