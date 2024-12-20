let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    let choice = Math.floor(Math.random()*3);
    let choiceList = ["rock", "paper", "scissor"];
    return choiceList[choice];
};

function getHumanChoice()
{
    let userChoice = prompt("Choose Rock, Paper, or Scissor.\n");
    return userChoice.toLowerCase();
};


function playRound(currentRound)
{
    var beats = {'rock': 'paper', 'paper': 'scissor', 'scissor': 'rock'};

    console.log("Round %d: \n\n", currentRound);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    if(humanSelection == computerSelection) {
        console.log("%s against %s! It's a tie!\n");
    }
    else if(humanSelection == beats[computerSelection])
    {
        console.log("%s against %s! you win!\n\n", humanSelection, computerSelection);
        humanScore += 1;
    }
    else if(computerSelection == beats[humanSelection])
    {
        console.log("%s against %s! the comptuter win!\n\n", humanSelection, computerSelection);
        computerScore += 1;
    }

    console.log("The current score is Human: %d, Computer: %d. \n\n", humanScore, computerScore);
};

function playGame(numberOfRounds)
{
    for(let i = 1; i <= numberOfRounds; i++)
    {
        playRound(i);
    }

    if(humanScore > computerScore)
    {
        console.log("You Win. \n\n");
    }
    else{console.log("You Lose. \n\n");}
};