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
body.addEventListener("click", addClass); //Закрытие при нажатии окна в любом месте


//Слайдер
var blockSlider = document.querySelector(".slider-controls"); //Блок со всеми кнопками
var btnSlider = blockSlider.querySelectorAll("button"); //Массив кнопок слайдера
var blockCharacter = document.querySelector(".character-list"); //Блок со всеми характеристиками
var elementCharacter = document.querySelectorAll(".character-item"); //Массив со всеми характеристиками

console.log(elementCharacter.length + " = Длина массива со всеми слайдами");

blockSlider.addEventListener("click", function(active) {
  const target = active.target; //Получение элемента на котором произошло событие (исходный)
  btnSlider.forEach(item => { //Перебираю масив и удаляю все классы со стилями current
    item.classList.remove("current");
  });
  elementCharacter.forEach(item => { //Перебираю массив со слайдами и добавляю класс character-hidden
    item.classList.add("character-hidden");
  });
  target.classList.add("current"); //Добавляю класс к услышанному элементу
  console.log("add " + target.innerHTML);
  var indexSlider = target.innerHTML;
  elementCharacter[indexSlider-1].classList.remove("character-hidden");
});
