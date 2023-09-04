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

//************************* validate form *****************************

// error messages
const firstMessage =
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const lastMessage =
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const emailMessage = "Veuillez entrer une adresse mail valide.";
const dateMessage = "Vous devez entrer votre date de naissance.";
const quantityMessage = "Vous devez entrer une réponse.";
const conditionMessage = "Ce champ est obligatoire.";

// Modal DOM Elements
let form = document.querySelector("form");
let first = document.getElementById("first");
let last = document.getElementById("last");
let email = document.getElementById("email");
let date = document.getElementById("birthdate");
let quantity = document.getElementById("quantity");
let condition = document.getElementById("checkbox1");

// check the validity of value
function validInputValue(balise, message) {
  if (balise.value.length < 2) {
    balise.parentElement.setAttribute("data-error-visible", "true");
    balise.parentElement.setAttribute("data-error", message);
    return false;
  } else {
    balise.parentElement.removeAttribute("data-error-visible");
    balise.parentElement.removeAttribute("data-error");
    return true;
  }
}

// check email validity
function validEmail(balise, message) {
  let emailRegExp = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9.-]+/;
  if (emailRegExp.test(balise.value)) {
    balise.parentElement.removeAttribute("data-error-visible");
    balise.parentElement.removeAttribute("data-error");
    return true;
  } else {
    balise.parentElement.setAttribute("data-error-visible", "true");
    balise.parentElement.setAttribute("data-error", message);
    return false;
  }
}

// check date validity
function validDate(date, message) {
  let dateRegExp =
    /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

  function reverseDate(dateStr) {
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return parts.reverse().join("-");
    }
    return dateStr;
  }
  const dateReverse = reverseDate(date.value);

  if (dateRegExp.test(dateReverse)) {
    date.parentElement.removeAttribute("data-error-visible");
    date.parentElement.removeAttribute("data-error");
    return true;
  } else {
    date.parentElement.setAttribute("data-error-visible", "true");
    date.parentElement.setAttribute("data-error", message);
    return false;
  }
}
// check quantity validity
function validQuantityValue(balise, message) {
  if (!balise.value) {
    balise.parentElement.setAttribute("data-error-visible", "true");
    balise.parentElement.setAttribute("data-error", message);
    return false;
  } else {
    balise.parentElement.removeAttribute("data-error-visible");
    balise.parentElement.removeAttribute("data-error");
    return true;
  }
}

// check quantity validity
function validConditionChecked(balise, message) {
  if (!balise.checked) {
    balise.parentElement.setAttribute("data-error-visible", "true");
    balise.parentElement.setAttribute("data-error", message);
    return false;
  } else {
    balise.parentElement.removeAttribute("data-error-visible");
    balise.parentElement.removeAttribute("data-error");
    return true;
  }
}

// submit event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    !validInputValue(first, firstMessage) ||
    !validInputValue(last, lastMessage) ||
    !validInputValue(last, lastMessage) ||
    !validEmail(email, emailMessage) ||
    !validDate(date, dateMessage) ||
    !validQuantityValue(quantity, quantityMessage) ||
    !validConditionChecked(condition, conditionMessage)
  ) {
    return false;
  } else {
    launchSuccessMessage();
  }
});

// check validity on change event
first.addEventListener("change", () => {
  validInputValue(first, firstMessage);
});

last.addEventListener("change", () => {
  validInputValue(last, lastMessage);
});

email.addEventListener("change", () => {
  validEmail(email, emailMessage);
});

date.addEventListener("change", () => {
  validDate(date, dateMessage);
});

quantity.addEventListener("change", () => {
  validQuantityValue(quantity, quantityMessage);
});

condition.addEventListener("change", () => {
  validConditionChecked(condition, conditionMessage);
});
