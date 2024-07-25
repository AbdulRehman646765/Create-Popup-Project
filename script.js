const button = document.querySelector(".popup-btn");
const popupBox = document.querySelector(".popup-open");
const buttonBox = document.querySelector(".btn-container");
const closeIcon = document.querySelector(".close-icon");
const subscribeBtn = document.querySelector(".subscribe-btn");

button.addEventListener("click", () => {
  popupBox.style.display = "block";
  buttonBox.style.display = "none";
});

function myFunction() {
  popupBox.style.display = "none";
  buttonBox.style.display = "block";
}

closeIcon.addEventListener("click", () => {
  myFunction();
});

subscribeBtn.addEventListener("click", () => {
  myFunction();
});
