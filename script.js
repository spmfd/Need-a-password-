// Grabbing from the arrays

var howmanySPchar = specialchar[Math.floor(Math.random()*specialchar.length)];
var howmanynumbers = numbers[Math.floor(Math.random()*numbers.length)];
var howmanyLCletters = lowerCase[Math.floor(Math.random()*lowerCase.length)];
var howmanyUCletters = upperCase[Math.floor(Math.random()*upperCase.length)];

// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var userInput = window.prompt("How long do you want your password to be?");

  var passwordLength = parseInt()

  // Error Message Section

   if (isNaN(passwordLength)) {
    window.alert("Please insert a number to determine length of password")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    console.log("Password must be between 8 and 128 characters")
    return
  }

  // User options
  
  var specialchar_yes = window.confirm("Click Ok to confirm the inclusion of special characters in your password")
  var numbers_yes = window.confirm("Click Ok to confirm the inclusion of numberic characters in your password")
  var lowerCase_yes = window.confirm("Click Ok to confirm the inclusion of lowercase characters in your password")
  var upperCase_yes = window.confirm("Click Ok to confirm the inclusion of uppercase characters in your password")

  // Arrays for password options

  var specialchar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '|', ';', ':', '"', ',', '.', '<', '>']; 
  // 0-27
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // 0-9
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // 0-25
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  // 0-25

  // Pushing User option data to variable for password generation

  var userselections = []

  if (numbers_yes) {
  userselections.push(numbers)
  }

  if (specialchar_yes) {
    userselections.push(specialchar)
    }  

  if (lowerCase_yes) {
    userselections.push(lowerCase)
    }

  if (upperCase_yes) {
     userselections.push(upperCase)
    }

  var generatedPassword = ""  


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);