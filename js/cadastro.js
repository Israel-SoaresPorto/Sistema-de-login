import * as utils from "./utils.js";

const registerForm = document.querySelector("#registerForm");
const nameInput = registerForm.querySelector("#fullName");
const emailInput = registerForm.querySelector("#email");
const passwordInput = registerForm.querySelector("#password");
const confirmPasswordInput = registerForm.querySelector("#confirmPassword");

function validatePassword(password) {
  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);

  document.querySelector("#lengthCheck").classList.toggle("valid", hasLength);
  document.querySelector("#upperCheck").classList.toggle("valid", hasUpper);
  document.querySelector("#numberCheck").classList.toggle("valid", hasNumber);
  document.querySelector("#specialCheck").classList.toggle("valid", hasSpecial);

  document.querySelector("#lengthCheck").classList.toggle("invalid", !hasLength);
  document.querySelector("#upperCheck").classList.toggle("invalid", !hasUpper);
  document.querySelector("#numberCheck").classList.toggle("invalid", !hasNumber);
  document.querySelector("#specialCheck").classList.toggle("invalid", !hasSpecial);

  return hasLength && hasUpper && hasNumber && hasSpecial;
}

passwordInput.addEventListener("input", () => {
  validatePassword(passwordInput.value);
});

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameHasMoreThatThreeLetters = nameInput.value.length > 3;
  const confirmPassword = confirmPasswordInput.value === passwordInput.value;

  let hasError = false;

  if (!nameHasMoreThatThreeLetters) {
    hasError = true;
    utils.validityInput(
      nameInput,
      nameHasMoreThatThreeLetters,
      "Nome deve ter ao menos 3 caracteres"
    );
  } else {
    utils.validityInput(nameInput, nameHasMoreThatThreeLetters);
  }

  if (!utils.validateEmail(emailInput.value)) {
    hasError = true;
    utils.validityInput(emailInput, false, "Email inválido");
  } else if (!emailInput.checkValidity()) {
    hasError = true;
    utils.validityInput(emailInput, false, emailInput.validationMessage);
  } else {
    utils.validityInput(emailInput, true);
  }

  if (!validatePassword(passwordInput.value)) {
    hasError = true;
    utils.validityInput(passwordInput, validatePassword(passwordInput.value));
  } else {
    utils.validityInput(passwordInput, validatePassword(passwordInput.value));
  }

  if (!confirmPassword) {
    hasError = true;
    utils.validityInput(
      confirmPasswordInput,
      confirmPassword,
      "As senhas não coincidem"
    );
  } else {
    utils.validityInput(confirmPasswordInput, confirmPassword);
  }

  if (!hasError) {
    utils.showAlert("success", "Conta criada com sucesso!");
    
    setTimeout(() => {
      utils.hideAlert("success");
    }, 3000);
  }
});
