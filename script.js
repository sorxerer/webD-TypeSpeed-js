let sentence = "Sharks existed before trees and have roamed the oceans for over 400 million years..... Success is not final, failure is not fatal:It is the courage to continue that counts";
const Quotes = [
    "Sharks existed before trees and have roamed the oceans for over 400 million years..... Success is not final, failure is not fatal:It is the courage to continue that counts.",
    "You cannot believe in God until you believe in yourself. Strength is life, weaknesss is death.Expansion is life, contraction is death.",
    "In the end, we will remember not the words of our enemies, but silence of our friends.",
    "Do not dwell in the past,don't dream of the future, concentrate the mind on present.",
    "The greatst glory in living lies not in never falling, but in rising every time we fall.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."
]


let j = 0;
createDiv(sentence);
document.addEventListener('keydown', function(e){
    console.log(e.key); 

    let keyIs = document.getElementsByClassName('key')[j];
    let keyIsf = document.getElementsByClassName('key')[j+1];
    if (e.key === 'Backspace'){
        backSpace();
    } 
    else if (e.key.length === 1 || e.key === ' '){
        let keypressed = e.key;

        if(j<sentence.length-1){
        keyIsf.classList.add('at');}
      
        if (keyIs.textContent == keypressed){
            keyIs.style.color = 'white';
            keyIs.classList.remove('at');
        }else {
            keyIs.style.color = 'red';
            keyIs.classList.remove('at');
            if (keyIs.innerHTML === ' '){
                keyIs.style.borderBottom= '1px solid red';
             
            }
        }
        j++;
    } 
})

function backSpace(){
    if(j>0){
        j--;
        let keyIsf = document.getElementsByClassName('key')[j+1];
        let keyIs = document.getElementsByClassName('key')[j];
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
    j = 0;
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

    
});
