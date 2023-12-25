var basket = document.querySelector(".nav-link");
var modal = document.querySelector(".modal");
var fullName = modal.querySelector("[name=fullName]");

basket.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("По мне кликнули");
  modal.classList.remove("form-hidden");
  fullName.focus();
});

var close = document.querySelector(".modal-close");
close.addEventListener("click", function () {
  modal.classList.add("form-hidden");
  console.log("Меня закрыли");
});

var body = document.querySelector("main");
body.addEventListener("click", function () {
  modal.classList.add("form-hidden");
  console.log("Клик по окну");
});



