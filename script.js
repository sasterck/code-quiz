// Let's get this quiz on the road!

var quizMain = document.getElementById('quiz');

var startButton = document.getElementById('start');

var optionA = document.getElementById('A');

var optionB = document.getElementById('B');

var optionC = document.getElementById('C');

var questionAnswer = document.getElementById('answer');

var questionsEl = document.getElementById("questions");

var quizTimer = document.getElementById('timer');

var scoreTotal = document.getElementById('Score');

var resultsEl = document.getElementById("result");

var finalScoreEl = document.getElementById("finalScore");

var quizEnd = document.getElementById('Fin');

// This really got me feeling like I don't know a thing. Trying to match the timer to the question

var finalQuestionIndex = quizQuestions.length;

var currentQuestionIndex = 0;
var timeLeft = 90;
var timerInterval;
var correct;
var scoreTotal = 0;


// Now, onto the more difficult part - adding the questions.

var quizQuestions = [ 
    {
    Question: "How are you?",
    optionA: "AWE-mazing",
    optionB: "Meh, I'm taking a quiz",
    optionC: "Bad as can be",
    questionAnswer: "A", "B", "C"
},

// question 2 - watch out for those leprichauns.
    {
    Question: "What do you primarily use for styling a web-site/page?",
    optionA: "HTML",
    optionB: "Laptop Leprichauns",
    optionC: "CSS",
    questionAnswer: "C"},

]

// Time for the timer

timerInterval = setInterval(function)
{
    timeLeft--;
    quizTimer.textContent = 'Time Remaining ' + timeLeft;

    if(timeLeft=== 0) {
        clearInterval(timerInterval);
        scoreTotal();
    }
    quizMain.style.display = "block";
}

// Show the score
function showScore(){
    quizMain.style.display = "none"
    quizEnd.style.display = "flex";
    clearInterval(timerInterval);
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";


function generateQuizQuestion() {
    quizEnd.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return scoreTotal();
    }

    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.Question + "</p>";
    buttonA.innerHTML = currentQuestion.optionA;
    buttonB.innerHTML = currentQuestion.optionB;
    buttonC.innerHTML = currentQuestion.optionC;
}

startButton.addEventListener("click",startQuiz);

function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
        
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("Incorrect.")
        currentQuestionIndex++;
        generateQuizQuestion();
    }

    else{
        showScore();
    }
