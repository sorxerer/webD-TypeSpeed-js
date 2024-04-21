let sentence = "Sharks existed before trees and have roamed the oceans for over 400 million years..... Success is not final, failure is not fatal: It is the courage to continue that counts.";
const Quotes = [
    "Sharks existed before trees and have roamed the oceans for over 400 million years..... Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You cannot believe in God until you believe in yourself. Strength is life, weaknesss is death. Expansion is life, contraction is death.",
    "In the end, we will remember not the words of our enemies, but silence of our friends.",
    "Do not dwell in the past, don't dream of the future, concentrate the mind on present.",
    "The greatst glory in living lies not in never falling, but in rising every time we fall.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."
]
let stopWatch;
let seconds=0;
let correct=0;
let wrong=0;
let j = 0;
let notStarted=true;
let sessionComplete =false;

createDiv(sentence);
document.addEventListener('keydown', function(e){
    // console.log(e.key); 
    if(notStarted){
    if(j===0){
        interval();  
    }}
    let keyIs = document.getElementsByClassName('key')[j];
    let keyIsf = document.getElementsByClassName('key')[j+1];
    if(!sessionComplete){if (e.key === 'Backspace'){
        backSpace();
    } 
    else if (e.key.length === 1 || e.key === ' '){
        let keypressed = e.key;

        if(j<sentence.length-1){
        keyIsf.classList.add('at');}
      
        if (keyIs.textContent == keypressed){
            correct++;
            keyIs.style.color = 'white';
            keyIs.classList.remove('at');
            if(j === sentence.length-1){
                typeResult();
            }
        }else {
            wrong++;
            keyIs.style.color = 'red';
            keyIs.classList.remove('at');
            if (keyIs.innerHTML === ' '){
                keyIs.style.borderBottom= '2px solid red';
             
            }
        }
        j++;
    } }
})

function backSpace(){
    if(j>0){
        j--;
        let keyIsf = document.getElementsByClassName('key')[j + 1];
        let keyIs = document.getElementsByClassName('key')[j];
        
        if(keyIs.style.color=='white'){
            correct--;
        } 
            keyIs.style.color = 'rgb(96, 95, 95)';
            keyIs.style.removeProperty('border-bottom');
            keyIsf.classList.remove('at');
            
    }
}


function createDiv(sentence){
for (let i=0; i<sentence.length; i++){
    let createDiv = document.createElement('div');
    createDiv.classList.add('key');
    createDiv.innerHTML = sentence[i];
    document.querySelector('.main').appendChild(createDiv);
    if (sentence[i] ===' '){
        createDiv.classList.add('skey');
    }
    }
    // const keys = document.getElementsByClassName('key');
    // keys[0].classList.add('at');
    
}


document.querySelector('.bi-arrow-clockwise').addEventListener('click', function() {  
    clearInterval(stopWatch); 
    document.querySelector('.timer').innerHTML=0;        
    j = 0;
    seconds=0;
    correct=0;
    wrong=0;
    notStarted=true;
    sessionComplete = false;
    const keys = document.getElementsByClassName('key');
    for (let i= 0;i <keys.length; i++){
        keys[i].style.color='rgb(96, 95, 95)'; 
        keys[i].style.removeProperty('border-bottom'); 
        keys[i].classList.remove('at'); 
    }
    keys[0].classList.add('at');
    // newAPIquote(); connect with API to get new quotes

    document.querySelector('.main').innerHTML='';
    let random= Math.floor(Math.random()*6);
    sentence=Quotes[random];
    createDiv(sentence);

   //remove div when retry clicked
    const results = document.querySelectorAll('.result');
    results[1].remove();  
    results[0].remove();
});




function interval(){
    notStarted=false;
    // clearInterval(stopWatch);  //jugaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad     don't know why it worked ?,i have to ask chatgpt about double double intervaling
    stopWatch = setInterval(() => {     // main debug exist in shift+ something else key ,shift +that key cause two times call of interval function
        seconds++; 
        document.querySelector('.timer').innerHTML= seconds;                     //debug found by using notstarted boolean variable
        // console.log(seconds);
    }, 1000);
}


function typeResult(){
    sessionComplete = true;
    clearInterval(stopWatch);
    let getDiv=document.createElement('div');
    let getDivAccuracy=document.createElement('div');
    getDivAccuracy.classList.add('result');
    getDiv.classList.add('result');
    // let epm= ((60/seconds)*correct).toFixed(0) ;
    let Accuracy= `${((correct/(wrong+correct))*100).toFixed(0)}%`;



    console.log(`time taken :${seconds}`);
    console.log(`wrong: ${wrong}`);
    console.log(`correct: ${correct}`);
    console.log(`Accuracy: ${Accuracy}`);



    let wpm= (((60/seconds)*(correct))/5).toFixed(0) ;   //math logic is random and based on my own parameters
    getDiv.innerHTML= wpm;
    getDivAccuracy.innerHTML= Accuracy;
    console.log(`speed: ${wpm}`);
    let resultbox= document.querySelector('.resultBox');
    resultbox.appendChild(getDiv);
    resultbox.appendChild(getDivAccuracy);
}
