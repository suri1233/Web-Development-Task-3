
const questionText = document.getElementById('question');
const quizResult = document.getElementById('quiz-result');

questionText.innerText = "JavaScript is the same as Java. True or False?";

function checkAnswer(answer) {
    if (answer === false) {
        quizResult.innerText = "Correct! JavaScript and Java are different.";
    } else {
        quizResult.innerText = "Incorrect. JavaScript is not the same as Java.";
    }
}

function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
        .then(data => {
            document.getElementById('joke').innerText = data.setup + " - " + data.punchline;
        });
}
