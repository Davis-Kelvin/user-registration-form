// registration form validation
// made by: me
// date: 2026

function showError(message) {
  document.getElementById("errorMsg").innerHTML = message;
  document.getElementById("errorDiv").style.display = "block";
  document.getElementById("successDiv").style.display = "none";
}

function showSuccess() {
  document.getElementById("successDiv").style.display = "block";
  document.getElementById("errorDiv").style.display = "none";
}

function validateForm() {

  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPw = document.getElementById("confirmPw").value;
  var age = document.getElementById("age").value;

  // check full name
  if (fullName == "") {
    showError("Please enter your Full Name.");
    return false;
  }

  var nameWords = fullName.trim().split(" ");
  if (nameWords.length < 2) {
    showError("Please enter your first AND last name.");
    return false;
  }

  // check email
  if (email == "") {
    showError("Please enter your Email Address.");
    return false;
  }

  // simple email check
  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    showError("Please enter a valid email address. Example: name@email.com");
    return false;
  }

  // check password
  if (password == "") {
    showError("Please enter a Password.");
    return false;
  }

  if (password.length < 8) {
    showError("Password must be at least 8 characters long!");
    return false;
  }

  // check uppercase
  var hasUpper = false;
  for (var i = 0; i < password.length; i++) {
    if (password[i] >= 'A' && password[i] <= 'Z') {
      hasUpper = true;
    }
  }
  if (hasUpper == false) {
    showError("Password must have at least 1 uppercase letter (A-Z).");
    return false;
  }

  // check number
  var hasNumber = false;
  for (var i = 0; i < password.length; i++) {
    if (password[i] >= '0' && password[i] <= '9') {
      hasNumber = true;
    }
  }
  if (hasNumber == false) {
    showError("Password must have at least 1 number (0-9).");
    return false;
  }

  // check special character
  var specialChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
  var hasSpecial = false;
  for (var i = 0; i < password.length; i++) {
    if (specialChars.indexOf(password[i]) != -1) {
      hasSpecial = true;
    }
  }
  if (hasSpecial == false) {
    showError("Password must have at least 1 special character (ex: ! @ # $ %).");
    return false;
  }

  // check confirm password
  if (confirmPw == "") {
    showError("Please confirm your password.");
    return false;
  }

  if (password != confirmPw) {
    showError("Passwords do not match! Please try again.");
    return false;
  }

  // check age
  if (age == "") {
    showError("Please enter your Age.");
    return false;
  }

  if (age < 18) {
    showError("Sorry, you must be 18 or older to register!");
    return false;
  }

  if (age > 120) {
    showError("Please enter a valid age.");
    return false;
  }

  // if everything is ok show success message
  showSuccess();
  return true;

}
