// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var upper = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var num = "0,1,2,3,4,5,6,7,8,9";
var sym = "!@#$%^&*+=?";
// Write password to the #password input
function writePassword() {

var promptLength = prompt ("How many characters do you want it to be?");
  if (promptLength < 8)
  alert ("Password must be atleast 8 characters long");
  else {};
var confirmLower = confirm ("Do you want lower case letters?");
  if (confirmLower === true)
  ;
  else {}
  ;
var confirmUpper = confirm ("Do you want upper case letters?");
  if (confirmUpper === true)
  ;
  else {}
  ; 
var confirmSymbols = confirm ("Do you want symbols?");
  if (confirmSymbols === true)
  ;
  else{}
  ;
var confirmNumbers = confirm ("Do you want numbers?");
  if (confirmNumbers === true)
  ;
  else {}
  ;
  var password = generatePassword();

  function generatePassword(promptLength){
    var pwd = ""
    
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