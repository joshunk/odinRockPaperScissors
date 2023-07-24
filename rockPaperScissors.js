// Ask the user for input of rock, paper, or scissors
// change the case to lowercase to pass through the program
// Generate a value of rock, paper, or scissors from the computer

// This creates an array and chooses a value based on a num between 0-1 (Math.random) multiplied by the number of items in the array (choices.length) then rounded down via the Math.floor 
function getComputerChoice(){
}
getComputerChoice();

function getPlayerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice)
    
    let playerChoice = prompt("Rock, paper, or scissors?");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors'){
        alert("You chose " + playerChoice + ".")
        console.log(playerChoice);}
    else{
            alert("Please enter a valid choice.");
            return;
        }
        
    if (playerChoice == 'rock' && computerChoice == 'rock'){
        console.log("It's a tie!")
    }
    }


getPlayerChoice();

// function playRound(){
//     }
// }