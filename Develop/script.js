// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

var confirmPassword = confirm ("Need a secure password?");
var promptLength = prompt ("How many characters do you want it to be?");
var promptLower = prompt ("Do you want lower case letters?");
var promptUpper = prompt ("Do you want upper case letters?");
var promptSymbols = prompt ("Do you want symbols?");
var promptNumbers = prompt ("Do you want numbers?");

// Generator Functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+<>?\|"
  return symbols[Math.floor(Math.random() * symbols.length)];
}


console.log(promptLength);
console.log(promptLower);
console.log(promptNumbers);
console.log(promptUpper);
console.log(promptSymbols);
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());