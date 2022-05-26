const count = document.querySelector('#count');
const resultText = document.querySelector('#resultText');
let wins = 0;

increaseCount = () => {
    wins++;
    count.textContent = wins;
}

const computerPlay = () => {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

const buttons = document.querySelectorAll('button');

const playRound = (playerSelection) => {
    console.log('Playing!');
    computerSelection = computerPlay();

    const winningCombinations = [
        ['rock', 'scissors'],
        ['scissors', 'paper'],
        ['paper', 'rock']
    ];
    if(playerSelection == computerSelection) {
        resultText.removeAttribute('class');
        resultText.classList.add('draw');
        resultText.textContent = "Draw!"
        return;
    }
    const play = [playerSelection, computerSelection];
    let win = false;
    winningCombinations.forEach(element => {
        if(JSON.stringify(play) == JSON.stringify(element)) {
            win = true;
            return false;
        }
    });
    if(!win)  {
        resultText.removeAttribute('class');
        resultText.classList.add('loss');
        resultText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return;
    }
    else {
        resultText.removeAttribute('class');
        resultText.classList.add('win');
        resultText.textContent = `Congrats! ${playerSelection} beats ${computerSelection}`;
        increaseCount();
    }
}


buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.id));
});