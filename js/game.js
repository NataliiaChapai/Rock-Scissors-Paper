const buttonsScope = document.querySelector('.buttons');
const moveScope = document.querySelector('.move');
const results = document.querySelector('.results');
const nextBtn = document.querySelector('.next__btn');
const resetBtn = document.querySelector('.reset__btn');
const victoryCount =document.querySelector('.victory');
const lossCount =document.querySelector('.loss');

let step1;
let step2;
let round = 1;
let victory = 0;
let loss = 0;

const data = {
    rock: 'https://image.pngaaa.com/783/3313783-middle.png',
    scissors: 'https://www.clipartmax.com/png/middle/428-4288836_your-hand-hand-clipart-png-rock-paper-scissors.png',
    paper: 'https://flyclipart.com/thumb2/play-rock-paper-scissors-with-us-246506.png'
}
const values = ['rock', 'scissors', 'paper'];

buttonsScope.addEventListener('click', onStepClick);
nextBtn.addEventListener('click', onNextBtnClick);
resetBtn.addEventListener('click', onResetBtnClick);

function onStepClick (event) {
    if (event.target === event.currentTarget) {
        return;
    }
    let index = Math.floor(Math.random()*3);
    step1 = event.target.id;
    step2 = values[index];
    buttonsScope.hidden = true;
    
    moveScope.innerHTML = `<img id="rock" src=${data[step1]} alt="rock" class="step">
    <img id="rock" src=${data[step2]} alt="rock" class="step">`;
    result(step1, step2);
}

function result(step1, step2) {
    if (step1 === step2) {
        results.textContent = `Round ${round}, ${step1[0].toUpperCase() + step1.slice(1)} vs. ${step2[0].toUpperCase() + step2.slice(1)}, DRAW!`;
        round ++;
    } else if (step1 === 'rock' && step2 === 'scissors' || step1 === 'scissors' && step2 === 'paper' || step1 === 'paper' && step2 === 'rock') {
        results.textContent = `Round ${round}, ${step1[0].toUpperCase() + step1.slice(1)} vs. ${step2[0].toUpperCase() + step2.slice(1)}, You’ve WON!`;
        victory ++;
        round ++;
    } else {
        results.textContent = `Round ${round}, ${step1[0].toUpperCase() + step1.slice(1)} vs. ${step2[0].toUpperCase() + step2.slice(1)}, You’ve LOST!`;
        loss ++;
        round ++;
    }
    victoryCount.textContent = victory;
    lossCount.textContent = loss;
    gameOver(victory, loss);
}

function onNextBtnClick() {
    moveScope.innerHTML = '';
    buttonsScope.hidden = false;
    results.innerHTML = '';
}

function gameOver(victory, loss) {
    if (victory === 3) {
        buttonsScope.hidden = true;
        nextBtn.disabled = true;
        victory = 0;
        loss = 0;
        
        setTimeout(() => {
            moveScope.innerHTML = `<img class="emogi" src="https://flagi.in.ua/images/tovari/3067/podushka-suvenirna-smaylik-zadovolennya-_b1.jpg"/>
        <h2>GAME OVER! CONGRATULATION!!! You’ve WON!</h2>`;
        results.innerHTML = '';
        victoryCount.textContent = victory;
        lossCount.textContent = loss;
        }, 2000);    
    }
    if (loss === 3) {
        buttonsScope.hidden = true;
        nextBtn.disabled = true;
        
        victory = 0;
        loss = 0;
        setTimeout(() => {
            moveScope.innerHTML = `<img class="emogi" src="https://flyclipart.com/thumbs/sad-emoji-for-dp-1019274.png"/>
        <h2>GAME OVER! You’ve LOST!</h2>`;
        results.innerHTML = '';
        victoryCount.textContent = victory;
        lossCount.textContent = loss;
        }, 2000);    
    }
}

function onResetBtnClick() {
    moveScope.innerHTML = '';
    buttonsScope.hidden = false;
    results.innerHTML = '';
    victory = 0;
    loss = 0;
    round = 1;
    victoryCount.textContent = victory;
    lossCount.textContent = loss;    
}