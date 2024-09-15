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

// Leitner system variables
const maxBox = 3; // Number of boxes
let currentCardIndex = 0;
const box1Queue = [];
const box2Queue = [];
const box3Queue = [];

function showQuestion() {
    // Display question from the appropriate box
    if (box1Queue.length > 0) {
        currentCardIndex = Math.floor(Math.random() * box1Queue.length);
        document.getElementById("question").innerText = box1Queue[currentCardIndex].question;
    } else if (box2Queue.length > 0) {
        currentCardIndex = Math.floor(Math.random() * box2Queue.length);
        document.getElementById("question").innerText = box2Queue[currentCardIndex].question;
    } else if (box3Queue.length > 0) {
        currentCardIndex = Math.floor(Math.random() * box3Queue.length);
        document.getElementById("question").innerText = box3Queue[currentCardIndex].question;
    }
    document.getElementById("answer").style.display = "none";
}


document.getElementById("showAnswer").addEventListener("click", function() {
    document.getElementById("answer").innerText = getCurrentCard().answer;
    document.getElementById("answer").style.display = "block";
});

document.getElementById("correct").addEventListener("click", function() {
    let card = getCurrentCard();
    if (card.box < maxBox) {
        card.box++; // Move to the next box
    }
    updateQueue();
    saveFlashcards(); // Save to localStorage
    showQuestion();
});

document.getElementById("wrong").addEventListener("click", function() {
    let card = getCurrentCard();
    card.box = 1; // Move to the first box
    updateQueue();
    saveFlashcards(); // Save to localStorage
    showQuestion();
});


function updateQueue() {
    box1Queue.splice(0, box1Queue.length, ...flashcards.filter(card => card.box === 1));
    box2Queue.splice(0, box2Queue.length, ...flashcards.filter(card => card.box === 2));
    box3Queue.splice(0, box3Queue.length, ...flashcards.filter(card => card.box === 3));
}

function loadFlashcards() {
    const storedFlashcards = localStorage.getItem('flashcards');
    if (storedFlashcards) {
        return JSON.parse(storedFlashcards);
    } else {
        return flashcards; // Default set if nothing is stored
    }
}

function saveFlashcards() {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
}

// Initialize flashcards
let flashcards = loadFlashcards();


document.getElementById("flashcardForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form refresh

    const newQuestion = document.getElementById("newQuestion").value;
    const newAnswer = document.getElementById("newAnswer").value;

    flashcards.push({
        question: newQuestion,
        answer: newAnswer,
        box: 1 // Start in the first box
    });

    saveFlashcards(); // Save updated flashcard states
    document.getElementById("newQuestion").value = '';
    document.getElementById("newAnswer").value = '';
    updateQueue(); // Update the queue with new flashcards
    showQuestion(); // Show the updated flashcards
});
