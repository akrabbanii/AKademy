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

const questionElement = document.querySelector(".question");
const answerElement = document.querySelector(".answer");
const toggleAnswerButton = document.querySelector(".toggle-answer");
const nextCardButton = document.getElementById("next-card");

function loadFlashcard(index) {
    questionElement.textContent = flashcards[index].question;
    answerElement.textContent = flashcards[index].answer;
    answerElement.style.display = "none";
    toggleAnswerButton.textContent = "Show Answer";
}

toggleAnswerButton.addEventListener("click", () => {
    if (answerElement.style.display === "none") {
        answerElement.style.display = "block";
        toggleAnswerButton.textContent = "Hide Answer";
    } else {
        answerElement.style.display = "none";
        toggleAnswerButton.textContent = "Show Answer";
    }
});

nextCardButton.addEventListener("click", () => {
    currentCard = (currentCard + 1) % flashcards.length;
    loadFlashcard(currentCard);
});

// Load the first card initially
loadFlashcard(currentCard);
