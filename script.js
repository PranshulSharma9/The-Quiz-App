// script.js

const questions = [
    {
        question: "What is the full form of AI?",
        answers: [
            { text: "Artificially Intelligent", correct: false },
            { text: "Advance Intelligence", correct: false },
            { text: "Artificial Intelligence", correct: true },
            { text: "Artificially Intelligent", correct: false }
        ]
    },
    {
        question: "In CSS which of the following psuedo-classes select the first child element of it's parent?",
        answers: [
            { text: "nth-child", correct: false },
            { text: "first-child", correct: true },
            { text: "first", correct: false },
            { text: "child(1)", correct: false }
        ]
    },
    {
        question: "What is the output of 5 + '5' in javascript?",
        answers: [
            { text: "10", correct: false },
            { text: "55", correct: true },
            { text: "undefined", correct: false },
            { text: "null", correct: false }
        ]
    },
    {
        question: "What is the full form of html?",
        answers: [
            { text: "hyper text markup language", correct:true},
            { text: "hyper task markup language", correct:false},
            { text: "hyper test markup language", correct:false},
            { text: "hyper text manipulation language", correct:false}
        ]
    },
    {
        question: "What is the correct way of declaring a pointer in cpp?",
        answers: [
            { text: "int *ptr",correct:true},
            { text: "int ptr",correct:false},
            { text: "int &ptr",correct:false},
            { text: "ptr",correct:false}
        ]
    },
    {
        question: "Which JavaScript function is used to select an HTML element by ID?",
        answers: [
            { text: "getElementByClass()",correct:false},
            { text: "getElementById()",correct:true },
            { text: "querySelectorAll()",corect:false},
            { text: "querySelectorByTag()", correct:false}

        ]

    },
    {
        question: "Based on which of the following parameter AI is categorized?",
        answers: [
            { text: "Based on Functionality only", correct:false},
            { text: "Based on Capabilities only", correct:false},
            { text: "Based on Capabilities and Functinaloity", correct:true},
            { text: "It is not categorized", correct:false}
        ]
    },
    {
        question: "What is the function of an AI agent?",
        answers: [
            { text: "Mapping of goal sequence to an action", correct:false},
            { text: "Work without the direct interefernce of the people", correct:false},
            { text: "Mapping of perecpt sequence to an action", correct:true},
            { text: "Mapping of enviornment sequece to an action", correct:false}
        ]
    },
    {
        question: "Total number of informed search methods in Artificial Intelligence?",
        answers: [
            { text: "4", correct:true},
            { text: "3", correct:false},
            { text: "2", correct:false},
            { text: "1", corrcet:false}
        ]
    },
    {
        question: "What will be the output of console.log(typeof[]) ?",
        answers: [
            { text: "array", correct:false},
            { text: "object", correct:true},
            { text: "null", correct:false},
            { text: "undefined", correct:false}
        ]
    },
    {
        question: "In Pyhton which function is used to take input from user?",
        answers: [
            { text: "sort()", correct:false},
            { text: "def()", correct:false},
            { text: "input()", correct: true},
            { text: "output()", correct:false}
        ]
    },
    {
        question: "What does the Bayesian Network provide?",
        answers: [
            { text: "Partial description of the domain", correct:false},
            { text: "Complete description of problem", correct:false},
            { text: "Complete description of the domain", correc:true},
            { text: "None of the mentioned", correct:false}
        ]
    },
    {
        question: "country of origin of Deepseek?",
        answers: [
            { text: "Australia", correct:false},
            { text: "China", correct:true},
            { text: "USA", correct:false},
            { text: "Germany", correct:false}
        ]
    },
    {
        question: "Find the value of a, (var a = 20%6)?",
        answers: [
            { text: "5", correct:false},
            { text: "3", correct:false},
            { text: "4", correctt:false},
            { text: "2", correct:true}
        ]

    },
    {
        question: "Software patch is defined as?",
        answers: [
            { text: "Daily or routine fix", correct:false},
            { text: "Required or critical fix", correct:false},
            { text: "Emergency fix", correct:true},
            { text: "None of the mentioned",correct:false},
        ]

    },
   
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
    nextButton.classList.remove('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    nextButton.classList.remove('hidden');
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.classList.add('hidden');
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    nextButton.classList.add('hidden');
    scoreElement.innerText = `${score} / ${questions.length}`;
}

function restartQuiz() {
    startQuiz();
}

nextButton.addEventListener('click', showNextQuestion);
restartButton.addEventListener('click', restartQuiz);

startQuiz();