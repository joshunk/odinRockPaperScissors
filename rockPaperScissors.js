// Ask the user for input of rock, paper, or scissors
// change the case to lowercase to pass through the program
// Generate a value of rock, paper, or scissors from the computer

// This creates an array and chooses a value based on a num between 0-1 (Math.random) multiplied by the number of items in the array (choices.length) then rounded down via the Math.floor 
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(randomChoice)
}
getComputerChoice();