var userInput;
var comInput;
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var arrayInputs =[];

//clears the screen for a new game; creates a random letter; sets guessesleft to 10
function resetGame(){
    //Reset
    guessesLeft = 10;
    document.getElementById("guesses").textContent = "";
    document.getElementById("input").textContent = "";
    document.getElementById("guessesleft").textContent = guessesLeft;
    document.getElementById("wins").textContent = wins;
    document.getElementById("loses").textContent = losses;

    //create random letter keyCode between 65 to 90 which is keyCode for a-z
    comInput = 65 + Math.floor(Math.random()*26);

    //Clear inputArray
    var inputArrayLength = arrayInputs.length;
    for(var i = 0; i < inputArrayLength; i++){
        arrayInputs.pop();
    }
}

//Prints the guessed letters so far
function printSoFarGuessed(key){
    if(document.getElementById("guesses").textContent == ""){
        //first letter without a ',' ahead of it
        document.getElementById("guesses").textContent = key;
    }
    else{
        //all the guesses letters separated by ','
        document.getElementById("guesses").textContent = document.getElementById("guesses").textContent  + ', ' + key;
    }
}

//call for setting up the game
resetGame();

document.onkeyup = function(event){
    //key has to be a letter not guessed so far
    if(event.keyCode >= 65 && event.keyCode <= 90 && arrayInputs.indexOf(event.key.toLowerCase()) == -1){
  
        //Show the currently guessed letter
        document.getElementById("input").textContent = event.key.toLowerCase();

        //Push the letter in array to print the so far guessed letters
        arrayInputs.push(event.key.toLowerCase());

        //Store the keycode [65-90] for a-z as userInput
        userInput = event.keyCode;

        //If there is a match
        if(userInput === comInput){

            //Increase the wins and print it
            wins++;
            document.getElementById("wins").textContent = wins;
            //Clear the screen for new game
            resetGame();
        }
        else{
            //Decrement the guesses left and print it
            guessesLeft--;
            document.getElementById("guessesleft").textContent = guessesLeft;

            //If no more chances of guessing left
            if(guessesLeft == 0)
            {
                //increment losses and print it
                losses++;
                document.getElementById("loses").textContent = losses;
                //Clear the screen for new game
                resetGame();
            }
            else{
                //Print so far guessed letters
                printSoFarGuessed(event.key.toLowerCase());  
            }
        }
    }
    else{
        //Invalid key-It has to be a letter that has not been guessed earlier in the current game
        if(event.keyCode<65 && event.keyCode>90){
            alert("Invalid input");
        }
    }
}