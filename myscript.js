const quizData = [
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "Font",
        b: "Style",
        c: "Class",
        d: "Styles",
        correct: "opt2",
    },
    {
        question: "Which is the correct CSS syntax?",
        a: "body {color: black;}",
        b: "body:color=black;",
        c: "{body:color=black;}",
        d: "{body;color:black;}",
        correct: "opt1",
    },
    {
        question: "How do you insert a comment in a CSS file?",
        a: "/ this is a comment /",
        b: "' this is a comment",
        c: "// this is a comment //",
        d: "// this is a comment",
        correct: "opt4",
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "opt4",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "opt2",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "opt1",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "opt2",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "opt2",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "opt1",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "opt2",
    },
];
let questionNumber=0;
let time=150;
let score=0;
const question=document.querySelector("#question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const questionAttempt=document.querySelector("#question-attempt");
const timeleft=document.querySelector("#time-left");
const submit=document.querySelector(".btn");
const answers=document.querySelectorAll(".answer");
function loadquestions(){
    question.innerText=quizData[questionNumber].question;
    option1.innerText=quizData[questionNumber].a;
    option2.innerText=quizData[questionNumber].b;
    option3.innerText=quizData[questionNumber].c;
    option4.innerText=quizData[questionNumber].d;
    questionAttempt.innerText=`${questionNumber+1}/10`
}

loadquestions();

// function next(){
//     if(questionNumber<=7)
//     {
//         questionNumber++;
//         loadquestions()
//         // console.log(questionNumber);
//     }
    

// }
function loadtime(){
      time=time-1;
      timeleft.innerText=` time left ${time} seconds`;
      if(time==0){
          alert("time up");
      }
}
setInterval(loadtime,1000);

const getanswer=()=>{
    let selectedAnswer;
    answers.forEach((ans)=>{
        if(ans.checked){
            selectedAnswer=ans.id;
        }
    });
    return selectedAnswer;
}

submit.addEventListener("click",()=>{
    const checkedAnswer=getanswer();
    // console.log("selected "+checkedAnswer);
    // console.log("actual "+quizData[questionNumber].correct)
    if(checkedAnswer==quizData[questionNumber].correct){
        score++;
        // console.log(score);
    };
    questionNumber++;
    if(questionNumber<quizData.length){
        loadquestions();
    }
    else{
        console.log("total score ="+score);
        document.getElementById("correct").innerText=`you have scored ${score} out of 10`;
        document.getElementById("per").innerText=`percentages ${(score/10)*100}%`;
        document.getElementById("main").style.display="none";
        document.getElementById("result").style.display="block";
    }
});



