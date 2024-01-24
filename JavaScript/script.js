//questions for code quiz
//from site https://pwskills.com/blog/50-most-asked-basic-coding-questions-of-all-time/

const questions = [
    {
        question: "What is HTML?",
        answers: [
            {Text: "Hyper Team Manage Language", correct: false},
            {Text: "Hydro Tool Makes Language", correct: false},
            {Text: "Hyper Text Markup Language", correct: true},
            {Text: "Hyper Tool Message Language", correct: false},
        ]
    },
    {
        question: "What is an Array?",
        answers: [
            {Text: "A collection of items stored at contiguous memory locations", correct: true},
            {Text: "A vision board for CSS", correct: false},
            {Text: "A color scheme for HTML", correct: false},
            {Text: "A language for JavaScript", correct: false},
        ]
    },
    {
        question: "What is an GitHub?",
        answers: [
            {Text: "A class website", correct: false},
            {Text: "A different code editor", correct: false},
            {Text: "An online software development platform", correct: true},
            {Text: "None of the above", correct: false},
        ] 
    },
    {
        question: "What does === mean?",
        answers: [
            {Text: "Assignment Operator", correct: false},
            {Text: "Equality Operator", correct: false},
            {Text: "Containment Operator", correct: false},
            {Text: "Stric equality Operator", correct: true},
        ] 
    },
    {
        question: "What is part of the Box Model?",
        answers: [
            {Text: "padding", correct: false},
            {Text: "content", correct: false},
            {Text: "Border", correct: false},
            {Text: "All of the above", correct: true},
        ] 
    },
    {
        question: "What is an ID selector in CSS?",
        answers: [
            {Text: ".", correct: false},
            {Text: "#", correct: true},
            {Text: "*", correct: false},
            {Text: "!", correct: false},
        ] 
    }
];

const questionElment = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElment.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}
function showScore() {
    resetState();
    questionElment.innerHTML = 'you scored ${score} out of ${questions.length}!';
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startQuiz();
    }
})
startQuiz();