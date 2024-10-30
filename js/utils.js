function hide(element, time) {
  setTimeout(() => {
    element.classList.add("hide");
  }, time);
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validityInput(input, validation, errorMessage = "") {
  if (!validation) {
    input.nextElementSibling.classList.remove("hide");
    input.nextElementSibling.classList.add("error-message");
    input.classList.add("invalid");
    input.setCustomValidity(errorMessage);
    input.nextElementSibling.textContent = input.validationMessage;
  } else {
    input.nextElementSibling.textContent = "";
    input.classList.remove("invalid");
    input.nextElementSibling.classList.remove("error-message");
    input.nextElementSibling.classList.add("hide");
    input.setCustomValidity("");
  }
}

function showAlert(type, message = "") {
  const alertMessage = document.querySelector(".alert");
  const alertMessageText = alertMessage.querySelector(".alert-message span");
  const alertIcon = alertMessage.querySelector(".alert-message i");

  if (type === "success") {
    alertMessage.classList.toggle("alert-success");
    alertIcon.classList.toggle("fa-check");
  } else if (type === "error") {
    alertMessage.classList.toggle("alert-error");
    alertIcon.classList.toggle("fa-triangle-exclamation");
  }

  alertMessage.classList.add("alert-show");
  alertMessage.classList.remove("alert-hide");
  alertMessageText.textContent = message || "";
}

function hideAlert(type) {
  const alertMessage = document.querySelector(".alert");
  const alertMessageText = alertMessage.querySelector(".alert-message span");
  const alertIcon = alertMessage.querySelector(".alert-message i");

  alertMessage.classList.remove("alert-show");
  alertMessage.classList.add("alert-hide");
  
  setTimeout(() => {
    if (type === "success") {
      alertMessage.classList.toggle("alert-success");
      alertIcon.classList.toggle("fa-check");
    } else if (type === "error") {
      alertMessage.classList.toggle("alert-error");
      alertIcon.classList.toggle("fa-triangle-exclamation");
    }
    
    alertMessageText.textContent = "";
  }, 1000);
}

export { hide, validityInput, showAlert, hideAlert, validateEmail };
