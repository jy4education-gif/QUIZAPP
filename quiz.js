let score = 0;  // wird in JS automatisch erkannt ob float oder integer - naming convention variable bezeichnend und klein geschrieben
let currentQuestionIndex = 0; // wir arbeiten später mit arrays - Screibweise hier CamelCase

let questions = [
    { 
        question: "Was ist die Haupstadt von Deutschland?", // "," Verknüpfung mehrerer Eigenschaften
        answers : ["Paris", "London", "Berlin", "Madrid"], // "[" Array 
        correctAnswer: 2 // "2" Position im Array 
    },
    { 
        question: "Welche Farbe hat eine Zitrone?", 
        answers : ["Gelb", "Blau", "Grün", "Rot"], 
        correctAnswer: 0
    },
    { 
        question: "Wieviele Beine hat ein Hund?", 
        answers : ["2", "6", "8", "4"], 
        correctAnswer: 3
    }
];

function displayQuestion(){

if(currentQuestionIndex >= questions.length){

    document.getElementById('quiz-container').hidden = true;
    document.getElementById('result').hidden = false;
    document.getElementById('score').textContent = score;
    return;
}

    let question = questions[currentQuestionIndex];

    document.getElementById('question').textContent = question.question;

    let answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = "";

    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answerButton);
    });
} 

displayQuestion(); // 47:00

function checkAnswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if(userAnswer == correctAnswer){
        score +=1; // score ++;
    }

    nextQuestion();
}

function nextQuestion(){
    currentQuestionIndex +=1;
    displayQuestion(); // 55:24
}