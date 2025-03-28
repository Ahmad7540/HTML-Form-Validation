const submitBtn = document.querySelector(".submitBtn");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const nameError = document.querySelector(".nameError");
const passError = document.querySelector(".passError");
const emailError = document.querySelector(".emailError");
const confirmPass = document.querySelector("#confirmPass");
const confirmPassError = document.querySelector(".confirmPassError");

function nameValidation() {
  if (userName.value.length == 0) {
    nameError.innerHTML = "Name is required";
    nameError.style.visibility = "visible";
    return false;
  }
  if (!userName.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write Full Name";
    nameError.style.visibility = "visible";
    return false;
  }

  nameError.style.visibility = "hidden";
  return true;
}
function emailValidation() {
  if (email.value.length == 0) {
    emailError.innerHTML = "Email is required";
    emailError.style.visibility = "visible";
    return false;
  }
  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Enter vaild email";
    emailError.style.visibility = "visible";
    return false;
  }

  emailError.style.visibility = "hidden";
  return true;
}
function validPass() {
  if (pass.value == 0) {
    passError.innerHTML = "Password is required";
    passError.style.visibility = "visible";
    return false;
  }
  if (
    !pass.value.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    )
  ) {
    passError.innerHTML =
      "Password must be 8-30 characters long, include uppercase & lowercase letters, a number, a special character, and have no spaces";
    passError.style.visibility = "visible";
    return false;
  }
  passError.innerHTML = "Password ";
  passError.style.visibility = "hidden";
  return true;
}
function validConfirmPass() {
  if (confirmPass.value == 0) {
    confirmPassError.innerHTML = "Confirm password required";
    confirmPassError.style.visibility = "visible";
    return false;
  }
  if (pass.value != confirmPass.value) {
    confirmPassError.innerHTML = "Confirm password must match with password";
    confirmPassError.style.visibility = "visible";
    return false;
  }
  confirmPassError.style.visibility = "hidden";
  return true;
}
function formValidation() {
  if (
    nameValidation() &&
    emailValidation() &&
    validPass() &&
    validConfirmPass()
  ) {
    alert("Form submitted successfully");
    console.log("Run.....");

    userName.value = "";
    email.value = "";
    pass.value = "";
    confirmPass.value = "";
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formValidation();
});
