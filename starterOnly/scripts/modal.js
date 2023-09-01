function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const btnSubmit = document.querySelector(".btn-submit");
const successMessage = document.querySelector(".content2");
const closeSuccessMessage = document.querySelectorAll(".close-success-message");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

btnSubmit.addEventListener("click", launchSuccessMessage);

closeSuccessMessage.forEach((btn) =>
  btn.addEventListener("click", closeModalSuccessMessage)
);

// launch modal form
function launchModal() {
  modalbg.classList.add("show");
}

function launchSuccessMessage() {
  successMessage.classList.add("show");
}
function closeModalSuccessMessage() {
  successMessage.classList.remove("show");
  closeModal();
}
// close modal form
function closeModal() {
  modalbg.classList.remove("show");
}

// close when click anywhere outside of the modal
window.onclick = function (event) {
  if (event.target == modalbg) {
    modalbg.classList.remove("show");
  }
};
