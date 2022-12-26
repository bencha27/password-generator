// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Prompt for password length
  var passwordLength = prompt("How many characters do you want your password to be? Enter a number between 8 and 128.");
  if (passwordLength === null) {
    return
  } else if (isNaN(parseInt(passwordLength))) {
    alert("You must enter a number.");
    writePassword();
  } else if (passwordLength < 8) {
    alert("Your password must be at least 8 characters long.");
    writePassword();
  } else if (passwordLength > 128) {
    alert("Your password cannot be more than 128 characters long.");
    writePassword();
  }

  // Confirms for lowercase, uppercase, numbers, special characters
  var chooseLowerCase = confirm("Do you want to include lowercase letters in your password?");
  var chooseUpperCase = confirm("Do you want to include uppercase letters in your password?");
  var chooseNum = confirm("Do you want to include numbers in your password?");
  var chooseSpecChar = confirm("Do you want to include special characters in your password?");
  if (!chooseLowerCase && !chooseUpperCase && !chooseNum && !chooseSpecChar) {
    alert("You must choose at least one character type.")
    writePassword();
  }

  // Array of characters to create password from
  var passwordChar = [];
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '"/';

  // Add chosen characters to array of characters
  if (chooseLowerCase) {passwordChar += lowerCaseChar}
  if (chooseUpperCase) {passwordChar += upperCaseChar}
  if (chooseNum) {passwordChar += numbers};
  if (chooseSpecChar) {passwordChar += specialChar};

  var passwordArray = passwordChar.split("");
  var randomPassword = "";

  // Choose random characters from array and add to password
  function generatePassword(number) {
    for (var i = 0; i < number; i++) {
      var index = Math.floor(Math.random() * (passwordArray.length - 1));
      randomPassword += passwordArray[index];
      console.log(i);
    }
    return randomPassword;
  };

  // Render the password on the page
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
