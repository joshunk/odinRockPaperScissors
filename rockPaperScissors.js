// Ask the user for input of rock, paper, or scissors
// change the case to lowercase to pass through the program
// Generate a value of rock, paper, or scissors from the computer



function playRound(){
    var computerChoice;
    var playerChoice;
    var playerScore = 0;
    var computerScore = 0;
    var tieCounter = 0;
// This creates an array and chooses a value based on a num between 0-1 (Math.random) multiplied by the number of items in the array (choices.length) then rounded down via the Math.floor 
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice)
    return computerChoice;
}
getComputerChoice();

function getPlayerChoice(){
    playerChoice = prompt("Rock, paper, or scissors?");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors'){
        // alert("You chose " + playerChoice + ".")
        console.log(playerChoice);
        return playerChoice;
    }
    else{
            alert("Please enter a valid choice.");
            return;
        }
    }
getPlayerChoice();

console.log("Player chose " + playerChoice);
console.log("Computer chose " + computerChoice);

function gameLogic(){
    // Build comparators for playerChoice rock
    if (playerChoice == 'rock' && computerChoice == 'scissors'){
        console.log("Rock beats scissors, you win!");
        // add a score++ here for the player
        playerScore++;
    }
    else if(playerChoice == 'rock' && computerChoice == 'paper'){
        console.log("Paper beats rock, you lose.");
        // add a score++ here for the computer
        computerScore++;
    }
    else if(playerChoice == 'rock' && computerChoice == 'rock'){
        console.log("It's a tie!")
        // add a tie++ for a tie counter
        tieCounter++;
    }
    // Build comparators for playerChoice scissors
    if (playerChoice == 'scissors' && computerChoice == 'paper'){
        console.log("Scissors beats paper, you win!");
        // add a score++ here for the player
        playerScore++;
    }
    else if(playerChoice == 'scissors' && computerChoice == 'rock'){
        console.log("Rock beats scissors, you lose.");
        // add a score++ here for the computer
        computerScore++;
    }
    else if(playerChoice == 'scissors' && computerChoice == 'scissors'){
        console.log("It's a tie!")
        // add a tie++ for a tie counter
        tieCounter++;
    }
    // Build comparators for playerChoice paper
    if (playerChoice == 'paper' && computerChoice == 'rock'){
        console.log("Paper beats rock, you win!");
        // add a score++ here for the player
        playerScore++;
    }
    else if(playerChoice == 'paper' && computerChoice == 'scissors'){
        console.log("Scissors beats paper, you lose.");
        // add a score++ here for the computer
        computerScore++;
    }
    else if(playerChoice == 'paper' && computerChoice == 'paper'){
        console.log("It's a tie!")
        // add a tie++ for a tie counter
        tieCounter++;
    }
    console.log(playerScore);
    console.log(computerScore);
    console.log(tieCounter);
}
gameLogic();
}

playRound();

// function playRound(){
//     }
// }