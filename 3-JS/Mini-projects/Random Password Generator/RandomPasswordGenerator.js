function generatePassword(passwordLenght, uppercaseLetters, lowercaseLetters, numbers, specialCharacters) {
    let password = '';
    let allowedCharacters = '';

    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbersSet = '0123456789';
    const special = '!@#$%^&*()-_=+[]{}|;:,.<>/?';

    allowedCharacters += uppercaseLetters ? uppercase : '';
    allowedCharacters += lowercaseLetters ? lowercase : '';
    allowedCharacters += numbers ? numbersSet : '';
    allowedCharacters += specialCharacters ? special : '';

    if (allowedCharacters.length <= 0 || allowedCharacters.length === null) {
        return 'Please select a valid Number!';
    }

    for (let i = 0; i < passwordLenght; i++) {
        password += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length));
    }
    return password;
}

document.querySelector('.generate').addEventListener('click', () => {
    const passwordLenght = parseInt(document.getElementById('length').value, 10);
    const uppercaseLetters = document.getElementById('uppercase').checked;
    const lowercaseLetters = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const specialCharacters = document.getElementById('special').checked;

    const password = generatePassword(passwordLenght, uppercaseLetters, lowercaseLetters, numbers, specialCharacters);
    document.getElementById('password').textContent = password;
});
