// Assignment code here - Global
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*()";

 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(){
  var passwordlength = 0; //local
  passwordlength = parseInt(prompt("Enter Length")); // Convert String to Integer
  if (passwordlength < 8 || passwordlength > 128) {
    return "Invalid Password length ... please choose between 8 and 128"
  } else {

  }

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
