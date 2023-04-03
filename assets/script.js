// Assignment Code
var generateBtn = document.querySelector("#generate");
var all = [ ]; 
var numbers = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".","/", ":", ";", "<", "=", ">", "?", "@", "[", "\"", "]","^", "_", "`", "{", "|", "}", "~" ];


var length = 0;
var spChar = "";
var caps = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  usrInput();
  var pass = [];
  ;
  if(spChar === "y" && caps === "y"){
    all = [...numbers, ...lowerCase, ...upperCase, ...specialChar];
    
    for(var i = 0; i < length; i++){
      pass[i] = all[Math.floor(Math.random() * all.length - 1)]; // walks through gen a new charactor, length num of times, loads up pass array
      }

  }
  else if(spChar === "y"){
    all = [...numbers, ...lowerCase, ...specialChar];

    for(var i = 0; i < length; i++){
      pass[i] = all[Math.floor(Math.random() * all.length - 1)];
      }

  }else if(caps === "y"){
    all = [...numbers,...lowerCase, ...upperCase];

    for(var i = 0; i < length; i++){
      pass[i] = all[Math.floor(Math.random() * all.length - 1)];
      }

  }else{
    all = [...numbers,...lowerCase];
    for(var i = 0; i < length; i++){
      pass[i] = all[Math.floor(Math.random() * all.length - 1)];
      }

  }
  return pass.join("");

}
function usrInput () {
  length = prompt("how long would you like your password to be? ", "must be more than 8 charactors. " );
  spChar = prompt("do you need to include special charactors? ", "y or n");
  caps = prompt("do you need to include capital charactors? ", "y or n");
  while (length <9){
    alert("must be more than 8 charactors! Try again!");
    length = prompt("how long would you like your password to be? ", "must be more than 8 charactors. " );
  }
  
  while( spChar !== "y" && spChar !== "n"){
    alert("Case sensitive! Try again!");
    spChar = prompt("do you need to include special charactors? ", "y or n");
    
  }
  while(caps !== "y" && caps !== "n"){
    alert("Case sensitive! Try again!");
    caps = prompt("do you need to include capital charactors? ", "y or n");
    
  }
  
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
