const flashcards = [
    {
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language commonly used in web development."
    },
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language, used to create the structure of a webpage."
    },
    {
        question: "What is CSS?",
        answer: "CSS stands for Cascading Style Sheets, used to style HTML content."
    }
];

let currentCard = 0;

// Select elements
const questionElement = document.querySelector(".question");
const answerElement = document.querySelector(".answer");
const toggleAnswerButton = document.querySelector(".toggle-answer");
const nextCardButton = document.getElementById("next-card");
const correctButton = document.getElementById("correct");
const incorrectButton = document.getElementById("incorrect");

// Function to load the current flashcard
function loadFlashcard(index) {
    questionElement.textContent = flashcards[index].question;
    answerElement.textContent = flashcards[index].answer;
    answerElement.style.display = "none"; // Hide answer initially
    toggleAnswerButton.textContent = "Reveal Answer"; // Change button text to 'Reveal Answer'
    toggleAnswerButton.querySelector('span').textContent = "👁️"; // Set eye icon to closed
}

// Event listener for toggling the answer
toggleAnswerButton.addEventListener("click", () => {
    if (answerElement.style.display === "none") {
        answerElement.style.display = "block"; // Show answer
        toggleAnswerButton.textContent = "Hide Answer"; // Change button text to 'Hide Answer'
        toggleAnswerButton.querySelector('span').textContent = "👁️"; // Set eye icon to open
    } else {
        answerElement.style.display = "none"; // Hide answer
        toggleAnswerButton.textContent = "Reveal Answer"; // Change button text to 'Reveal Answer'
        toggleAnswerButton.querySelector('span').textContent = "👁️"; // Set eye icon to closed
    }
});

// Event listener for loading the next card
nextCardButton.addEventListener("click", () => {
    currentCard = (currentCard + 1) % flashcards.length; // Move to the next card
    loadFlashcard(currentCard); // Load the next card
});

// Event listeners for correct and incorrect buttons
correctButton.addEventListener("click", () => {
    alert("Great job! You got it right!"); // Alert for correct answer
});

incorrectButton.addEventListener("click", () => {
    alert("Don't worry, keep practicing!"); // Alert for incorrect answer
});

// Load the first card initially
loadFlashcard(currentCard);
