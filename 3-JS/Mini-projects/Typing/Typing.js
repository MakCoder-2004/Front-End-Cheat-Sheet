// Select the input element and the cloneText element
let textInput = document.getElementById('text');
let cloneText = document.querySelector('.cloneText');

// Add an event listener to the input element
textInput.addEventListener('input', () => {
    // Update the cloneText with the value of the input
    cloneText.innerText = textInput.value;
});

