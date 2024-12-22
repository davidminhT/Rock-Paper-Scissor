let currentRound = 0;
let humanScore = 0;
let computerScore = 0;
let totalRound = 0;
let gameStarted = false;

function getComputerChoice()
{
    let choice = Math.floor(Math.random()*3);
    let choiceList = ["rock", "paper", "scissor"];
    return choiceList[choice];
};

const StartButton = document.querySelector("#startbutton");
const RoundInput = document.querySelector("input");
const GameProgress = document.querySelector("#GameProgress");
StartButton.addEventListener("click", (e) => {
    gameStarted = true;
    GameProgress.textContent = "Game Started!";
    totalRound = RoundInput.value;
    RoundInput.value = '';
    currentRound = 0;
    humanScore = 0;
    computerScore = 0;
    DisplayRoundEvent.textContent = '';
    DisplayScore.textContent = '';
});

const buttons = document.querySelector("#button");
buttons.addEventListener("click", (event) => {
    let target = event.target;
    currentRound++;
    switch(target.id) 
    {
        case 'rock':
            playRound(currentRound, totalRound, target.id);
            break;
        case 'paper':
            playRound(currentRound, totalRound, target.id);
            break;
        case 'scissor':
            playRound(currentRound, totalRound, target.id);
            break;
    }  
    
});    

const DisplayRoundEvent = document.querySelector('#RoundEvent');
const DisplayScore = document.querySelector("#DisplayScore");
function playRound(currentRound, totalRound, humanSelection)
{
    if(gameStarted == false)
    {
        return
    }
    var beats = {'rock': 'paper', 'paper': 'scissor', 'scissor': 'rock'};
    GameProgress.textContent = "Round: " + currentRound;
    console.log("Round %d: \n\n", currentRound);
    
    computerSelection = getComputerChoice();

    
    if(humanSelection == computerSelection) {
        DisplayRoundEvent.textContent = humanSelection + " against " + computerSelection + ". It's a tie...";
        console.log("%s against %s! It's a tie!\n", humanSelection, computerSelection);
    }
    else if(humanSelection == beats[computerSelection])
    {
        DisplayRoundEvent.textContent = humanSelection + " against " + computerSelection + ". You won this round!";
        console.log("%s against %s! you win!\n\n", humanSelection, computerSelection);
        humanScore += 1;
    }
    else if(computerSelection == beats[humanSelection])
    {
        DisplayRoundEvent.textContent = humanSelection + " against " + computerSelection + ". You lost this round!";
        console.log("%s against %s! the comptuter win!\n\n", humanSelection, computerSelection);
        computerScore += 1;
    }

    DisplayScore.textContent = "The current score is Human: " + humanScore + " Computer: " + computerScore;
    console.log("The current score is Human: %d, Computer: %d. \n\n", humanScore, computerScore);

    if(currentRound == totalRound)
    {
        determineWinner();
        return;
    }
};

function determineWinner()
{    
    gameStarted = false;
    if(humanScore > computerScore)
    {
        DisplayScore.textContent = "You win the game."
        console.log("You win the game. \n\n");
    }
    else if(humanScore < computerScore)
    {
        DisplayScore.textContent = "You lose the game."
        console.log("You lose the game. \n\n");
    }
    else{DisplayScore.textContent = "Nobody won."}

};