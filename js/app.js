const formElement = document.getElementById("form");
const buttonElement = document.getElementById("button");

formElement.addEventListener("botpoison-challenge-start", function () {
buttonElement.setAttribute("disabled", "disabled");
});
formElement.addEventListener("botpoison-challenge-success", function () {
buttonElement.removeAttribute("disabled");
});
formElement.addEventListener("botpoison-challenge-error", function () {
buttonElement.removeAttribute("disabled");
});