const names = [
    "Luka", "Ivan", "Marko", "Petar", "Jakov", "Ante", "Stjepan", "Krešimir",
    "Tomislav", "Mislav", "Iva", "Ana", "Maja", "Marija", "Ivana", "Jelena", "Katarina",
    "Sandra", "Tina", "Elena", "Sara", "Laura", "Nina", "Dora", "Lana",
    "Tea", "Mia", "Patricia", "Zrinka", "Snježana", "Lidija", "Dubravka",
    "Vlatka", "Jana", "Vesna", "Tatjana", "Mirjana", "Nadica", "Silvia", "Lejla",
    "Ksenija", "Marta", "Milenka", "Ružica", "Sanja", "Irena", "Zdravka",
    "Branimir", "Davor", "Goran", "Igor", "Jure", "Mladen", "Nenad", "Slaven",
    "Vladimir", "Zoran", "Zlatko", "Rajko", "Miroslav", "Vinko", "Dušan",
    "Alen", "Milena", "Dragica", "Ena", "Janja", "Gordana", "Anita", "Diana", "Elvira",
    "Jasna", "Lucija", "Tijana", "Valentina", "Vera", "Bernarda", "Radojka",
    "Svetlana", "Zlatica", "Rajka", "Stela", "Jelica", "Bojana", "Miroslava",
    "Slavica", "Danijela", "Mirna", "Ljubica", "Filip", "Karlo", "Lovro",
    "Sofia", "Eva", "Nikola", "Stipe", "Roko", "Frano", "Vedran", "Matija",
    "Mario", "Josip", "Lovorka", "Mladenka", "Nena", "Melita", "Dragana",
    "Slađana", "Ljiljana", "Branka", "Jasmina", "Kristina", "Nataša", "Anica",
    "Renata", "Milica", "Ivona", "Manuela", "Antonio", "Ema", "Anamarija", "Martina", "Dominik", "Domagoj",
    "Marijana", "Petra", "Gabriela", "Vana", "Ines", "Bruno", "Karla", "David", "Tena", "Leo", "Andjela",
    "Matea", "Antonela", "Dea", "Andrea", "Benjamin", "Mato", "Helena",
    "Matej", "Mateo", "Fran", "Nika", "Rita", "Marin", "Adrian", "Teo",
    "Mihael", "Tara", "Roza", "Leona", "Hana", "Adam"
];

let availableNames = [...names];
let container = document.querySelector('.matrix-container');
let rabbitIcon = document.getElementById('rabbit-icon');
let currentLine = 0;
let currentChar = 0;
let typingInterval;
let currentName = '';
let rabbitClickCount = 0;

function getRandomName() {
    if (availableNames.length === 0) {
        // Reset the names array if all names are used
        availableNames = [...names];
    }
    let index = Math.floor(Math.random() * availableNames.length);
    let name = availableNames[index];
    availableNames.splice(index, 1); // Remove the name from the list to avoid duplicates
    return name;
}

function typeLetter() {
    if (currentChar < lines[currentLine].length) {
        container.innerHTML += lines[currentLine].charAt(currentChar);
        currentChar++;
        typingInterval = setTimeout(typeLetter, 200); // Slower speed of typing (200 milliseconds per letter)
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
        // Restart the sequence with a new name after the entire sequence is done
        currentLine = 0;
        setTimeout(() => {
            currentName = getRandomName(); // Get a new name
            updateLines(); // Update the lines with the new name
            typeLetter(); // Start typing with the new name
        }, 3000); // Delay before starting the next sequence (3 seconds)
    }
}

function updateLines() {
    lines = [
        `Wake up, ${currentName}...`,
        "The Matrix has you...",
        "Follow the white rabbit."
    ];
}

function initMatrix() {
    currentName = getRandomName(); // Set the initial name
    updateLines(); // Update lines with the initial name
    typeLetter(); // Start typing with the initial name
}

// Initialize the matrix scene when the page loads
window.onload = function() {
    initMatrix(); // Initial display

    function createRabbit() {
        let newRabbit = document.createElement('span');
        newRabbit.textContent = '🐇';
        newRabbit.style.position = 'absolute';
        newRabbit.style.fontSize = '2rem';
        newRabbit.style.cursor = 'pointer';
        newRabbit.style.top = `${Math.random() * 90}vh`;
        newRabbit.style.left = `${Math.random() * 90}vw`;

        // Add click event listener to the new rabbit
        newRabbit.addEventListener('click', function() {
            rabbitClickCount++;
            if (rabbitClickCount >= 5) {
                // Redirect after 5 clicks
                window.location.href = 'https://www.instagram.com/meslav.ye/';
            } else {
                createRabbit(); // Create a new rabbit when this one is clicked
            }
        });

        document.body.appendChild(newRabbit);
    }

    // Set initial rabbit icon click listener
    rabbitIcon.addEventListener('click', function() {
        rabbitClickCount++;
        createRabbit(); // Create the first new rabbit
        if (rabbitClickCount >= 5) {
            // Redirect after 5 clicks
            window.location.href = 'https://www.instagram.com/meslav.ye/';
        }
    });
};
