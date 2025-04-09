let questions = [
    {
        "question": "wer hat HTML erfunden?",
        "answer_1": "Rabie Williams",
        "answer_2": "Lady Gago",
        "answer_3": "Tim Berners",
        "answer_4": "Justen Bieber",
        "right_answer": 3
    },

    {
        "question": "was bedeutet das HTML Tag <a/>?",
        "answer_1": "Link",
        "answer_2": "Lady Gago",
        "answer_3": "Tim Berners",
        "answer_4": "Justen Bieber",
        "right_answer": 1
    },
    {
        "question": "wie bindet man eine Webseite in eine Webseite ein?",
        "answer_1": "Rabie Williams",
        "answer_2": "Mit einem Code",
        "answer_3": "Tim Berners",
        "answer_4": "Justen Bieber",
        "right_answer": 2
    },
    {
        "question": "welches Projekt ist schwieriger?",
        "answer_1": "Restaurant Webseite",
        "answer_2": "Sakura Ramen",
        "answer_3": "Salat",
        "answer_4": "QuizApp",
        "right_answer": 4
    },


]

let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionText').innerHTML = question['question']
    document.getElementById('answer_1').innerHTML = question['answer_1']
    document.getElementById('answer_2').innerHTML = question['answer_2']
    document.getElementById('answer_3').innerHTML = question['answer_3']
    document.getElementById('answer_4').innerHTML = question['answer_4']

}
function answer(selection) {
    let question = questions[currentQuestion];
    console.log("Die gewählte Antwort ist:", selection)
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber)
    console.log('Aktuelle Frage ist ', question['right_answer']);


    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('richtige Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('Falsche Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-btn').disabled = true;
    resetAnswerBtn();
    showQuestion();
  

}

function resetAnswerBtn() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');

    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');

    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');

    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}
