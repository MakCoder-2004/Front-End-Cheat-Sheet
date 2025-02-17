function toggleButton(selector) {
    const button = document.querySelector(selector);
    
    if (!button.classList.contains('selected-btn')) {
        turnOffPreviousButton();
        button.classList.add('selected-btn');
    } else {
        button.classList.remove('selected-btn');
    }
}

function turnOffPreviousButton() {
    const previousButton = document.querySelector('.selected-btn');
    if (previousButton) {
        previousButton.classList.remove('selected-btn');
    }
}