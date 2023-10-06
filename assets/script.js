// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  length = parseInt(length);

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }

  var charset = "";
  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var specialChars = confirm("Include special characters?");

  if (!lowercase && !uppercase && !numeric && !specialChars) {
    alert("You must choose at least one type of character.");
    return "";
  }

  if (lowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numeric) {
    charset += "0123456789";
  }

  if (specialChars) {
    charset += "!@#$%^&*()_+[]{}|;:,.<>?";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
