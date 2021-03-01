// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  //Ask End-User for password lenght.
  var length = Number (prompt("How long would you like your password to be? Enter a number between 8 & 128"));
  
  //Ask End-User for character types to include in password.
  var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

  //Generates End-User password.
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if( charTypeLower === "lowercase" ) {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "uppercase" ) {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric" ) {
    charSet = "0123456789";
  } else if( charTypeLower === "special" ) {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
      retVal = "";
      for (var i = 0; i < length; i++) {
        //Picks a character within charSet at index of random number
        retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
