import * as utils from "./utils.js";

const forgotPasswordForm = document.querySelector("#forgotPasswordForm");

forgotPasswordForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const recoveryEmailInput = forgotPasswordForm.querySelector("#recoveryEmail");
  let hasError = false;

  if (!utils.validateEmail(recoveryEmailInput.value)) {
    hasError = true;
    utils.validityInput(recoveryEmailInput, false, "Email inválido");
  } else if (!recoveryEmailInput.checkValidity()) {
    hasError = true;
    utils.validityInput(
      recoveryEmailInput,
      false,
      recoveryEmailInput.validationMessage
    );
  } else {
    utils.validityInput(recoveryEmailInput, true);
  }

  if (!hasError) {
    utils.showAlert("success", "Email de recuperação enviado com sucesso!");

    setTimeout(() => {
      utils.hideAlert("success");
    }, 3000);
  }
});
