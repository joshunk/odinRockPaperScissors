// Ask the user for input of rock, paper, or scissors
// change the case to lowercase to pass through the program
// Generate a value of rock, paper, or scissors from the computer


// document.getElementById('rockBTN').onclick = function(){
//     const playerChoice = 'rock'
//     console.log(playerChoice);
//     game();
//     return playerChoice;
 
// }
// document.getElementById('paperBTN').onclick = function(){
//     const playerChoice = 'paper'
//     console.log(playerChoice);
// }
// document.getElementById('scissorsBTN').onclick = function(){
//     const playerChoice = 'scissors'
//     console.log(playerChoice);

// }


let playerScore = 0;
let computerScore = 0;
let tieCounter = 0;  
let playerChoice;
// let computerChoice;

// This creates an array and chooses a value based on a num between 0-1 (Math.random) multiplied by the number of items in the array (choices.length) then rounded down via the Math.floor 
    function getComputerChoice(){
        const choices = ['rock', 'paper', 'scissors'];
        computerChoice = choices[Math.floor(Math.random() * choices.length)];
        // console.log(computerChoice)
        console.log("Computer chose " + computerChoice);
            return computerChoice;
        }
// getComputerChoice();
    // console.log("Computer chose " + computerChoice);

    rockBTN.addEventListener("click", function () {
        const playerChoice = "rock";
        getComputerChoice();
        playRound(playerChoice); 
        });
        
    paperBTN.addEventListener("click", function () {
        const playerChoice = "paper";
        getComputerChoice();
        playRound(playerChoice); 
        });
    
        scissorsBTN.addEventListener("click", function () {
        const playerChoice = "scissors";
        getComputerChoice();
        playRound(playerChoice); 
        });
// console.log("Computer chose " + computerChoice);


function playRound(playerChoice){
    // Build comparators for playerChoice rock
    if (playerChoice == 'rock' && computerChoice == 'scissors'){
        console.log("Rock beats scissors, you win!");
        // add a score++ here for the player
        return playerScore++;
    }
    else if(playerChoice == 'rock' && computerChoice == 'paper'){
        console.log("Paper beats rock, you lose.");
        // add a score++ here for the computer
        computerScore++
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
        computerScore++
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
        computerScore++
    }
    else if(playerChoice == 'paper' && computerChoice == 'paper'){
        console.log("It's a tie!")
        // add a tie++ for a tie counter
        tieCounter++;
    }
    const playerScoreCount = document.getElementById('playerScoreCount')
    playerScoreCount.textContent = "Player score: " + playerScore;
    
    const computerrScoreCount = document.getElementById('computerScoreCount')
    computerScoreCount.textContent = "Computer score: " + computerScore;
    
    const tieCount = document.getElementById('tieScoreCount')
    tieCount.textContent = "Tie rounds: " + tieCounter;
}
// playRound();
// gameLogic();

// console.log("Player score: " + playerScore);
// console.log("Computer score: " + computerScore);
// console.log("Tie rounds: " + tieCounter);



