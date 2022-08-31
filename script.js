// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var passwordLength = parseInt(
    window.prompt("How long do you want your password to be?"), 10
  )

  // Error Message Section

   if (Number.isNaN(passwordLength)) {
    window.alert("Please insert a number to determine length of password")
    return null;
  } 

  if (passwordLength < 8) {
    window.alert("Password must be between 8 and 128 characters")
    return null;
  }

  if (passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters")
    return null;
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
    userselections = userselections.concat(numbers)
  }

  if (specialchar_yes) {
    userselections = userselections.concat(specialchar)
    }  

  if (lowerCase_yes) {
    userselections = userselections.concat(lowerCase)
    }

  if (upperCase_yes) {
    userselections = userselections.concat(upperCase)
    }

    // Section where password is created based on length provided by user

    var password = ""
      
    for (var i = 0; i < passwordLength; i++) {
      password = password + userselections[Math.floor(Math.random() * userselections.length)];
      console.log(password)
    }
    return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
