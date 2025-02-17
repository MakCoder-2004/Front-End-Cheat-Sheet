function subscribe() {
    let button = document.querySelector('.subscribe');
    let text = button.innerText;

    if (text === 'Subscribe') {
        button.innerText = 'Subscribed';
        button.classList.add('pressed-style');
    } else {
        button.innerText = 'Subscribe';
        button.classList.remove('pressed-style');
    }
}