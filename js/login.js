import * as utils from "./utils.js";

const adminValid = "admin";
const passwordValid = "1234";

const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputAdmin = loginForm.querySelector("#admin");
  const inputPassword = loginForm.querySelector("#senha");

  const adminHasVaild = inputAdmin.value === adminValid;
  const passwordHasValid = inputPassword.value === passwordValid;
  const inputsHasValids =
    inputAdmin.checkValidity() && inputPassword.checkValidity();

  const loginHasValid = adminHasVaild && passwordHasValid;

  if (!inputsHasValids) {
    if (!inputAdmin.checkValidity()) {
      utils.validityInput(inputAdmin, false);
    } else {
      utils.validityInput(inputAdmin, true);
    }

    if (!inputPassword.checkValidity()) {
      utils.validityInput(inputPassword, false);
    } else {
      utils.validityInput(inputPassword, true);
    }

    return;
  }

  if (loginHasValid && inputsHasValids) {
    utils.showAlert("success", "Login bem-sucedido!");

    utils.validityInput(inputAdmin, adminHasVaild);
    utils.validityInput(inputPassword, passwordHasValid);

    setTimeout(() => {
      utils.hideAlert("success");
    }, 3000);

  } else {
    utils.showAlert("error", "Usuário ou senha incorretos.");

    utils.validityInput(inputAdmin, adminHasVaild);
    utils.validityInput(inputPassword, passwordHasValid);

    setTimeout(() => {
      utils.hideAlert("error");
    }, 3000);

  }
});
