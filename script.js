const dataSet = {
    "A": "А",
    "B": "Б",
    "C": "Ц",
    "D": "Д",
    "E": "Е",
    "F": "Ф",
    "G": "Г",
    "H": "Х",
    "I": "И",
    "J": "Й",
    "K": "К",
    "L": "Л",
    "M": "М",
    "N": "Н",
    "O": "О",
    "P": "П",
    "Q": "Кью",
    "R": "Р",
    "S": "С",
    "T": "Т",
    "U": "У",
    "V": "В",
    "W": "Дабл-Ю",
    "X": "Кс",
    "Y": "Ы",
    "Z": "З",
    "А": "A",
    "Б": "B",
    "Ц": "C",
    "Д": "D",
    "Е": "E",
    "Ф": "F",
    "Г": "G",
    "Х": "H",
    "И": "I",
    "Й": "J",
    "К": "K",
    "Л": "L",
    "М": "M",
    "Н": "N",
    "О": "O",
    "П": "P",
    "Кью": "Q",
    "Р": "R",
    "С": "S",
    "Т": "T",
    "У": "U",
    "В": "V",
    "Дабл-Ю": "W",
    "Кс": "X",
    "Ы": "Y",
    "З": "Z"
};

const keys = Object.keys(dataSet);
let currentKey = keys[Math.floor(Math.random() * keys.length)];

document.getElementById('current-key').innerText = currentKey;

document.getElementById('submit').addEventListener('click', () => {
    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = dataSet[currentKey];
    const messageElement = document.getElementById('message');

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        messageElement.textContent = "Correta!";
        messageElement.className = "message correct";
    } else {
        messageElement.textContent = `Incorreto! A letra correta era: ${correctAnswer}`;
        messageElement.className = "message incorrect";
    }

    // Reset for the next question
    currentKey = keys[Math.floor(Math.random() * keys.length)];
    document.getElementById('current-key').innerText = currentKey;
    document.getElementById('answer').value = "";
});