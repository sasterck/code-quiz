// Let's get this quiz on the road!

var quizMain = document.getElementById('quiz');

var startButton = document.getElementById('start');

var optionA = document.getElementById('A');

var optionB = document.getElementById('B');

var optionC = document.getElementById('C');

var questionAnswer = document.getElementById('answer');

var quizTimer = document.getElementById('timer');

var scoreTotal = document.getElementById('Score');

var quizEnd = document.getElementById('Fin');

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
    questionAnswer: "C"
    },

]

// Time for the timer
