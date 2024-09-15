// Flashcard questions and answers
const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the chemical symbol for water?", answer: "H2O" },
    { question: "Who wrote 'Hamlet'?", answer: "William Shakespeare" },
    { question: "What is the speed of light?", answer: "299,792,458 m/s" },
    { question: "Who is the most genius guy in the world?", answer: "Obviously AK" },
];

// Spaced repetition data
const reviewQueue = [];
let currentCardIndex = 0;

// Show question and hide the answer initially
function showQuestion() {
    document.getElementById("question").innerText = flashcards[currentCardIndex].question;
    document.getElementById("question").style.display = "block";
    document.getElementById("answer").style.display = "none";
}

// Show the answer
document.getElementById("showAnswer").addEventListener("click", function() {
    document.getElementById("answer").innerText = flashcards[currentCardIndex].answer;
    document.getElementById("answer").style.display = "block";
});

// Mark as correct (i.e., the user knew the answer)
document.getElementById("correct").addEventListener("click", function() {
    markAsCorrect();
    nextCard();
});

// Mark as wrong (i.e., the user forgot the answer)
document.getElementById("wrong").addEventListener("click", function() {
    markAsWrong();
    nextCard();
});

// Move to the next flashcard
function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    showQuestion();
}

// Spaced repetition logic (simple version)
function markAsCorrect() {
    // Move the card back in the review queue
    reviewQueue.push(flashcards[currentCardIndex]);
}

function markAsWrong() {
    // Keep the card in the current position for immediate review
    flashcards.splice(currentCardIndex, 1);
    flashcards.push(flashcards[currentCardIndex]);
}

// Initialize the first flashcard
showQuestion();
