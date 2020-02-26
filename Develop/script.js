// Assignment Code
var generateBtn = document.querySelector("#generate");
var allChar = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,0,1,2,3,4,5,6,7,8,9,!,@,#,$,%,^,&,*,+,=?";
var sliceChar = ""
var finalPass = ""
// Write password to the #password input
function writePassword() {

var promptLength = prompt ("How many characters do you want it to be?");
var confirmLower = confirm ("Do you want lower case letters?");  
var confirmUpper = confirm ("Do you want upper case letters?");
var confirmSymbols = confirm ("Do you want symbols?");
var confirmNumbers = confirm ("Do you want numbers?");

  
  
  if (confirmLower === true)
  allChar.slice (0, 25);
  if (confirmUpper === true)
  allChar.slice (26, 51);
  if (confirmNumbers === true)
  allChar.slice (52, 62);
  if (confirmSymbols === true)
  allChar.slice (63, 74);
  
  var password = generatePassword();

  function generatePassword(){
    for (i = 0; i < promptLength; i++)
    
  };

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


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