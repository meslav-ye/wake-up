const lines = [
    "Wake up, Neo...",
    "The Matrix has you...",
    "Follow the white rabbit."
];

let container = document.querySelector('.matrix-container');
let currentLine = 0;
let currentChar = 0;

function typeLetter() {
    if (currentChar < lines[currentLine].length) {
        container.innerHTML += lines[currentLine].charAt(currentChar);
        currentChar++;
        setTimeout(typeLetter, 200); // Slower speed of typing (200 milliseconds per letter)
    } else {
        setTimeout(clearText, 1500); // Slower delay before clearing the text (1.5 seconds)
    }
}

function clearText() {
    container.innerHTML = ''; // Clear the text
    currentChar = 0;
    currentLine++;
    if (currentLine < lines.length) {
        setTimeout(typeLetter, 1500); // Slower start of the next line after clearing (1.5 seconds)
    } else {
        currentLine = 0;
        setTimeout(typeLetter, 3000); // Slower restart of the loop (3 seconds)
    }
}

typeLetter(); // Start typing
