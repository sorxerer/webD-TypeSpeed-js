const sentence = "In the heart of the bustling city, amidst the cacophony of car horns and the hustle and bustle of busy streets, a solitary figure stood, gazing up at the towering skyscraperss reached for the sky like giant sentinels guarding the metropolis.";
let j = 0;

document.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (e.key === 'Backspace') {
        backSpace();
    } else if (e.key.length === 1 || e.key === ' ') {
        let keypressed = e.key;
        let keyIs = document.getElementsByClassName('key')[j];

        if (keyIs.textContent == keypressed) {
            keyIs.style.color = 'white';
        } else {
            keyIs.style.color = 'red';
            if (keyIs.innerHTML === ' ') {
                keyIs.style.borderBottom = '1px solid red';
            }
        }
        j++;
    } 
 
})

function backSpace() {
    if(j > 0){
        j--;
        let keyIs = document.getElementsByClassName('key')[j];
            keyIs.style.color = 'rgb(96, 95, 95)';
            keyIs.style.removeProperty('border-bottom');

    }
}



for (let i = 0; i < sentence.length; i++) {
    let createDiv = document.createElement('div');
    createDiv.classList.add('key');
    createDiv.innerHTML = sentence[i];
    document.querySelector('.main').appendChild(createDiv);
    if (sentence[i] === ' ') {
        createDiv.classList.add('skey');
    }
}
