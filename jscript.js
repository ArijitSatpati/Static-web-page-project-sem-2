const quizData = [
   
    {
        question: "Q1:Javascript is an _______ language?",
        a: "Object Oriented",
        b: "Object Based",
        c: "Procedural",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "Q2:Which of the following keywords is used to define a variable in Javascript?",
        a: "var",
        b: "let",
        c: "both A&B",
        d: "None of the above",
        correct: "c"
    },
    {
        question: "Q3:Which of the following methods is used to access HTML elements using Javascript?",
        a: "getElementsbyid()",
        b: "getElementsByClassName()",
        c: "Both A&B",
        d: "None of the above",
        correct: "c"
    },
    {
        question: "Q4:Upon encountering empty statements, what does the Javascript Interpreter do?",
        a: "Shows error",
        b: "Ignores the statement",
        c: "Gives A warning",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "Q5:Which of the following methods can be used to display data in some form using Javascript?",
        a: "document.write()",
        b: "console.log()",
        c: "window.alert()",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "Q6:How can a datatype be declared to be a constant type?",
        a: "const",
        b: "var",
        c: "let",
        d: "constant",
        correct: "a"
    },{
        question: "Q7:When the switch statement matches the expression with the given labels, how is the comparison done?",
        a: "Both the datatype and the result of expression are compared",
        b: "Only the datatype of expression is compared",
        c: "Only the value of expression is compared",
        d: "None of the above",
        correct: "a"
    },{
        question: "Q8:What is the use of the <noscript> tag in Javascript?",
        a: "The contents are displayed by non-JS-based browsers",
        b: "Clears all the cookies and caches ",
        c: "Both A&B",
        d: "None of the above",
        correct: "a"
    },{
        question: "Q9:When an operator’s value is NULL, the typeof returned by the unary operator is:",
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        d: "Integer",
        correct: "c"
    },{
        question: "Q10:What does the Javascript “debugger” statement do?",
        a: "It will debug all the errors in the program at runtime",
        b: "It acts as a breakpoint in a program",
        c: "It will debug error on the current statement if any",
        d: "All of the above",
        correct: "b"
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})