function rollDice() {
    // Get the number of dice to roll
    let numDice = parseInt(document.getElementById('dice').value, 10);
    let diceResult = document.getElementById('diceResult');
    let diceImages = document.getElementById('diceImages');
    const values = [];
    const imgs = [];

    // Roll the dice
    for (let i = 0; i < numDice; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        values.push(randomNumber);
        imgs.push(`<img src="dice_images/${randomNumber}.png" alt="Dice ${randomNumber}">`);
    }

    // Display the results
    diceResult.innerHTML = `Dice Results: ${values.join(', ')}`;
    diceImages.innerHTML = imgs.join('');
}