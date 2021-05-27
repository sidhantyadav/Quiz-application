function questions(){
    location.href="quiz.html";
    
}

const quizarr=[
    {
        question:"Q1: What is the full form of HTML?",
        a:"Hello to my land",
        b:"Hey text markup language",
        c:"Hypertext makeup language",
        d:"Hypertext markup language",
        ans:"ans4"
    },
    {
        question:"Q2: What is the full form of?",
        a:"Hello to my land",
        b:"Hey text markup language",
        c:"Hypertext makeup language",
        d:"Hypertext markup language",
        ans:"ans4"
    },
    {
        question:"Q3: What is the ?",
        a:"Hello to my land",
        b:"Hey text markup language",
        c:"Hypertext makeup language",
        d:"Hypertext markup language",
        ans:"ans4"
    },
    {
        question:"Q4: What ?",
        a:"Hello to my land",
        b:"Hey text markup language",
        c:"Hypertext makeup language",
        d:"Hypertext markup language",
        ans:"ans4"
    }
];

const question=document.querySelector('.question');
const option1=document.querySelector('#opt1');
const option2=document.querySelector('#opt2');
const option3=document.querySelector('#opt3');
const option4=document.querySelector('#opt4');

const next=document.querySelector('#next');
const previous=document.querySelector('#previous');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');

const final=document.querySelector('.finalscore');
const startagain=document.querySelector('.startagain');

console.log(final);
console.log(startagain);

let count=0;
let score=0;


const loadQuestion=()=>{
    question.innerText=quizarr[count].question;
    option1.innerText=quizarr[count].a;
    option2.innerText=quizarr[count].b;
    option3.innerText=quizarr[count].c;
    option4.innerText=quizarr[count].d;
    
    if(count==0){
        previous.style.display="none";
    }
    else{
        previous.style.display="block";
    }

    next.style.display="none";

    if(count==quizarr.length-1){
        submit.style.display="block";
        next.style.display="none";
    }else{
        submit.style.display="none";
    }
    
};

loadQuestion();

const showNextButton=()=>{
    if(count<quizarr.length-1){
     next.style.display="block";
    }
};



const getCheckedAnswer= ()=>{
    let anss;

    answers.forEach((ansele)=>{
        if(ansele.checked){
            anss=ansele.id;
        }
    });
    return anss;
};

const deselect=()=>{
    answers.forEach((ansele)=>{
        if(ansele.checked){
            ansele.checked=false;
        }
    });
};

next.addEventListener('click',()=>{
    const checkedAnswer=getCheckedAnswer();
    
    if(checkedAnswer==quizarr[count].ans){
        score++;
    };
   // console.log(score);
    count++;
    deselect();
    if(count<quizarr.length){
        loadQuestion();
    }else{
        location.href="end.html"
    }  
});

previous.addEventListener('click',()=>{
    
    count--;
    score--;
    deselect();
   // console.log(count);
    loadQuestion();
});

submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckedAnswer();
    
    if(checkedAnswer==quizarr[count].ans){
        score++;
    };
    document.querySelector('.quiz_body').style.display="none";
    document.querySelector('.end').style.display="block";

    final.innerText="You scored "+score+" out of "+quizarr.length;
    //location.href="end.html";
     
});