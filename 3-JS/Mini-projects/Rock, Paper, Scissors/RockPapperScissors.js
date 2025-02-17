// Initialize the score
let score = JSON.parse(localStorage.getItem('Score')) || { wins: 0, losses: 0, ties: 0 };

// Update the score display
UpdateScore();

// Computer's choice
function CompChoice() {
    const randomNumber = Math.random() * 100 + 1;
    let computerChoice;

    if (randomNumber <= 33) {
        computerChoice = "rock";
    } else if (randomNumber <= 66 && randomNumber > 33) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function playGame(playerChoice) {

    // Reset the game if player chooses 'reset'
    if (playerChoice === "reset") {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        document.querySelector('.result').innerHTML = "The Game has been Reset!";
        UpdateScore();
        localStorage.setItem('Score', JSON.stringify(score));
        return; 
    }

    // Determine the computer's choice
    const computerChoice = CompChoice();

    // Determine the result
    let result;
    if (computerChoice === playerChoice) {
        result = "It's a tie!";
        score.ties++;
    } else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        result = `Computer chooses ${computerChoice}, Computer wins!`;
        score.losses++;
    } else {
        result = `Computer chooses ${computerChoice}, You win!`;
        score.wins++;
    }

    // Save the score to localStorage
    localStorage.setItem('Score', JSON.stringify(score));

    // Display the result
    document.querySelector('.result').innerHTML = result;

    // Update the score display
    UpdateScore();
}

function UpdateScore() {
    document.querySelector('.ScoreDescription').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

let AutoPlaying = false;
let IntervalId;

function AutoPlay() {
    if (!AutoPlaying) {
        IntervalId = setInterval(function () {
            const playerMove = CompChoice();
            playGame(playerMove);
        }, 1000); // Reduced to 1 second for faster auto-play
        AutoPlaying = true;
        document.querySelector('.autoplaybutton').innerHTML = 'Stop Auto Play';
    } else {
        clearInterval(IntervalId);
        AutoPlaying = false;
        document.querySelector('.autoplaybutton').innerHTML = 'Auto Play';
    }
}

// Keydown event listener
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    } else if (event.key === 'a') {
        AutoPlay();
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
        playGame('reset');
    }
});