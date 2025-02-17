let counter = 0;
const numberView = document.querySelector('.number-view');

document.querySelector('.decrease').addEventListener('click', () => {
    counter--;
    numberView.textContent = counter;
});

document.querySelector('.reset').addEventListener('click', () => {
    counter = 0;
    numberView.textContent = counter;
});

document.querySelector('.increase').addEventListener('click', () => {
    counter++;
    numberView.textContent = counter;
});