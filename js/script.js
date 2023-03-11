var modal = document.querySelector(".modal");
var button = document.querySelector(".got-this");
var modalX = document.querySelector(".modal-x");

button.addEventListener("click", function () {
    modal.classList.add("show-modal");
    button.innerText = "Yesss, You've got this!!!";
});

modal.addEventListener("click", function() {
    modal.classList.remove("show-modal");
    modal.innerText.add = "Who's got this!";
});