const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: "New Delhi"
    },
    {
        question: "Which programming language runs in a web browser?",
        options: ["Python", "C++", "Java", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "10", "15"],
        answer: "8"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.querySelector(".quiz-question");
    const optionsContainer = document.querySelector(".quiz-options");
    
    questionElement.innerText = quizData[currentQuestion].question;
    optionsContainer.innerHTML = "";

    quizData[currentQuestion].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<h2>You scored ${score} out of ${quizData.length}</h2>`;
}

document.addEventListener("DOMContentLoaded", loadQuestion);