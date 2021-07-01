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
  passwordlength = parseInt(prompt("Enter Password Length 8 - 128 characters")); // Convert String to Integer
  if (passwordlength < 8 || passwordlength > 128) {
    return "Invalid Password length ... please choose between 8 and 128."
  } else {
    var validLetters = []
    var acceptUpperCase = confirm("Would you like to have Uppercase letters in your password?");
    var acceptLowerCase = confirm("Would you like to have Lowercase letters in your password?");
    var acceptNumbers = confirm("Would you like to add Numbers to your password?");
    var acceptSymbols = confirm("Would you like to add Symbols to your password?");
    if (!acceptUpperCase && !acceptLowerCase && !acceptNumbers && !acceptSymbols) {
      return "Invalid Password Conditions"
    } else {
      if (acceptUpperCase){
        validLetters += upper;
      }
      if (acceptLowerCase){
        validLetters += lower;
      } 
      if (acceptNumbers){
        validLetters += numbers;
      }
      if (acceptSymbols){
        validLetters += symbols;
      }
      console.log(validLetters);
      var password = "";
      for(let i=0; i < passwordlength; i++) {
        var randomIndex = Math.floor(Math.random() * validLetters.length)
        password += validLetters[randomIndex];
      }
      console.log(password);
      return password;
    } 
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
