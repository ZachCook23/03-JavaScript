// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// alert()
// confirm()
// prompt()
function generatePassword() {
  var passwordLength = parseInt(prompt('How long would you like your password?'))
  var lowercase = confirm("Would you like to include lowercase letters?")
  console.log(passwordLength)
  console.log(lowercase);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
