// Initialize the score
var scoreOfHeadAndTail = JSON.parse(localStorage.getItem('scoreOfHeadAndTail')) || {
    wins: 0,
    losses: 0
};

function playHeadOrTail(playerChoice) {

    if (playerChoice === "reset") {
        scoreOfHeadAndTail.wins = 0;
        scoreOfHeadAndTail.losses = 0;
        localStorage.setItem('scoreOfHeadAndTail', JSON.stringify(scoreOfHeadAndTail));
        document.getElementById('result').innerText = "The Game has been Reset!";
        document.getElementById('score').innerText = `Score: ${scoreOfHeadAndTail.wins} wins, ${scoreOfHeadAndTail.losses} losses`;
        return;
    }

    // Computer's choice (randomly determined)
    const randomNumber = Math.random() * 100 + 1;
    let Choice;
    if (randomNumber <= 50) {
        Choice = "Head";
    } else {
        Choice = "Tail";
    }

    // Determine the result
    let result;
    if (playerChoice === Choice) {
        result = `The Choice is ${Choice}, You win!`;
        scoreOfHeadAndTail.wins++;
    } else {
        result = `The Choice is ${Choice}, Computer wins!`;
        scoreOfHeadAndTail.losses++;
    }

    // Save the score to localStorage
    localStorage.setItem('scoreOfHeadAndTail', JSON.stringify(scoreOfHeadAndTail));
    
    // Display the result
    document.getElementById('result').innerText = result;
    document.getElementById('score').innerText = `Score: ${scoreOfHeadAndTail.wins} wins, ${scoreOfHeadAndTail.losses} losses`;
}

// Display the initial score on page load
document.getElementById('score').innerText = `Score: ${scoreOfHeadAndTail.wins} wins, ${scoreOfHeadAndTail.losses} losses`;