const flashcards = [
    {
        question: "What is the definition of force?",
        answer: "An interaction that changes the motion of an object."
    },
    {
        question: "What is work?",
        answer: "The energy transferred when a force is applied to an object over a distance."
    },
    {
        question: "Who is the smartest guy in the world?",
        answer: "AK"
    },
    {
        question: "What is energy?",
        answer: "The capacity to do work."
    },
    {
        question: "What is power?",
        answer: "The rate at which work is done."
    },
    {
        question: "What is momentum?",
        answer: "The product of mass and velocity of an object."
    },
    {
        question: "What is kinetic energy?",
        answer: "The energy possessed by a body due to its motion."
    },
    {
        question: "What is potential energy?",
        answer: "The energy possessed by a body due to its position or configuration."
    },
    {
        question: "What is torque?",
        answer: "A measure of the rotational force acting on an object."
    },
    {
        question: "What is angular momentum?",
        answer: "The product of the moment of inertia and angular velocity of a rotating object."
    },
    {
        question: "What is gravitational potential energy?",
        answer: "The energy an object possesses due to its height above the ground."
    },
    // Add existing flashcards here
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

// The rest of your existing code should remain the same

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
