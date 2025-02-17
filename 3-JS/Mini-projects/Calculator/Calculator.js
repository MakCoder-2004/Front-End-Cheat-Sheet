const display = document.getElementById('display');

// Function to append input to the display
function appendToDisplay(value) {
    const currentValue = display.value;

    // Check if the last character is an operator and the new value is also an operator
    const lastChar = currentValue[currentValue.length - 1];
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(lastChar) && operators.includes(value)) {
        // Replace the last operator with the new one
        display.value = currentValue.slice(0, -1) + value;
    } else {
        display.value += value;
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1); // Remove the last character
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        display.value = 'Error'; // Display error if evaluation fails
    }
}