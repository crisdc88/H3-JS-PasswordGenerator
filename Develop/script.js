
// setting values to generate password
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var speciarChars = "!@#$%&*";
var numbers = "0123456789";



var userLenght = 0;

// setting values for client response

var userChoices = [
  {
    option: "upperCase",
    choiceOptions: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    choiceMessage: "Would you like to include Upper Case letters?"
  },
  {
    option: "lowerCase",
    choiceOptions: "abcdefghijklmnopqrstuvwxyz",
    choiceMessage: "Would you liketo include Lower Case Letters?"
  },
  {
    option: "specialChars",
    choiceOptions: "!@#$%&*",
    choiceMessage: "Would you liketo include Special characters?"
  },
  {
    option: "numbers",
    choiceOptions: "0123456789",
    choiceMessage: "Would you liketo include numbers?"
  }
]

// array with user's selected options
var userSelectedOptions=[];


// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";
  //  1.first prompt to determine lenght of the password, with a maximum of 3 tries.
  var passwordLength = getInitialValue();

  // 2.get client's chosen conditions
  getUserConditions(passwordLength);


  console.log("list of user choices:  [" + userSelectedOptions + "]");
  

  //do this until I have the number of characters choosen by the user:
  for (var i = 0; i < passwordLength; i++) {

    console.log("run  for character :" + i);
    
    //choosing a random Index to select an option for the character (upper case, lower case ..)
    var randIndexofChosen = Math.floor(Math.random() * (userSelectedOptions.length));
    console.log("1. for loop randomIndex:    " + randIndexofChosen);

    //getting the index of userChoices from the user selected array.
    var indexOfObject = userSelectedOptions[randIndexofChosen];
    console.log("2. index of object:" + indexOfObject);

    //getting the value for the selected option.
    var valueCharactersRandomOption = userChoices[indexOfObject].choiceOptions;
    console.log("3. option value: " + valueCharactersRandomOption);

    //choosing a random Index whithing the option selected
    var randomOptionsIndex = Math.floor(Math.random() *valueCharactersRandomOption.length);
    console.log("4. random index of value:  " + randomOptionsIndex + " , lenght :" + valueCharactersRandomOption.length);


    //choosing a random character for that specific option
    var tempCharacter =  valueCharactersRandomOption[randomOptionsIndex];
    console.log("5. character choosen: " + tempCharacter);


    //adding the character to my password string
    password = password + tempCharacter;
  }

  return password
}

function getInitialValue() {
  var numOfTries = 3;
  var keeptrying = true;

  while (keeptrying) {
    var userInput1 = prompt("How long would you like your Password?. \nPlease choose a number greather than 6 and less than 12.");
    console.log("1.user input inside the while:  " + userInput1);

    if (userInput1 >= 6 && userInput1 <= 128) {
      //keeptrying = false;
      return userInput1;
    } else {
      numOfTries--;
      console.log("2. num of tries left:  " + numOfTries);
      if (numOfTries === 0) {
        keeptrying = false;
        alert("Sorry, you tried to many times");
        userInput1 = -1;
        return userInput1;
      }
    }
    console.log("3. keeptrying: " + keeptrying);
  }

}

function getUserConditions(initialValue) {
  if (initialValue !== -1) {
    for (var i = 0; i < userChoices.length; i++) {
      answer = confirm(userChoices[i].choiceMessage);
      console.log("user choice :" + i + "  :" + answer);

      if(answer===true) {
        console.log("adding option to array")
        userSelectedOptions.push(i);
      }
    }
  }

}
