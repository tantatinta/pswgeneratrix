


var generateBtn = document.querySelector("#generate");

var specialChar = ["!", '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', "~"];
var alphaLower = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphaUpper = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6 , 7, 8, 9];

generateBtn.addEventListener("click", generatePsw);

function generatePsw(x) {
  alert("Hello! Please read carefully to select your password specifications.");  
  var varHolder;
  var wantsSpecialChar = confirm("Click 'OK' for 'YES' and 'Cancel' for 'NO'. Would you like to include special characters--e.g., '%', '$', or '('-- in your password?");
  var wantsLowerCase = confirm("Would you like to include lowercase characters 'a' to 'z' in your password?");
  var wantsUpperCase = confirm("Would you like to include uppercase characters 'A' to 'Z' in your password?");
  var wantsNumbers = confirm("Would you like to include numbers (0 to 9) in your password?");
  var preferredLength = parseInt(prompt("Please write your choice of character length in numbers from 8 to 128."));
    while (preferredLength < 8 || preferredLength > 128)
    var preferredLength = parseInt(prompt("Please write your choice of character length in numbers from 8 to 128."));   
        
        if (wantsSpecialChar === true) {
          varHolder += [specialChar];
        }

        if (wantsLowerCase === true) {
          varHolder += [alphaLower];
        }

        if (wantsLowerCase === true) {
          varHolder += [alphaUpper];
        }

        if (wantsNumbers === true) {
          varHolder += [numbers];
        }

        if (varHolder === undefined) {
          alert("You must select at least one character category.");
          generatePsw();
        }

        var randomItem = "";
  for (k = 0; k < preferredLength; k++) {
  randomItem += varHolder[Math.floor(Math.random() * varHolder.length)];    

  //this is what i had, without the randomItem var in line 45
  //var randomItem = varHolder[Math.floor(Math.random() * varHolder.length)];
  
  console.log(randomItem);
     
  }
  writePassword(randomItem);

  }

// Write password to the #password input
function writePassword(password) {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



