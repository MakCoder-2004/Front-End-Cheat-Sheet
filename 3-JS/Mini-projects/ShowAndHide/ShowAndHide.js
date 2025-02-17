const button = document.querySelector('button');
const image = document.querySelector('img');
let isClicked = false;

button.addEventListener('click', () => {
    if (isClicked === false) {
        button.innerHTML = 'show';
        isClicked = true;
        image.style.display = 'none';
    } else {
        button.innerHTML = 'Hide';
        isClicked = false;
        image.style.display = 'block';
    }

});
