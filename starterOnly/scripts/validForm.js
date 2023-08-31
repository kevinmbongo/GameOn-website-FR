let form = document.querySelector("form");
let first = document.getElementById("first");

// check the validity of value
function validInputValue(balise) {
  if (balise.value.length < 2) {
    first.parentElement.setAttribute("data-error-visible", "true");
    first.parentElement.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
  } else {
    first.parentElement.removeAttribute("data-error-visible", "true");
    first.parentElement.removeAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
  }
}

// submit event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  validInputValue(first);
  console.log(first);
});

// check validity on change event
first.addEventListener("change", () => {
  validInputValue(first);
});
