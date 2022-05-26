let computerPlay = () => {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

let playRound = (playerSelection, computerSelection) => {
    const winningCombinations = [
        ['rock', 'scissors'],
        ['scissors', 'paper'],
        ['paper', 'rock']
    ];
    if(playerSelection == computerSelection) {
        console.log("Draw!");
        return 0;
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
        console.log( `You Lose! ${computerSelection} beats ${playerSelection}`);
        return 0;
    }
    else {
        console.log(`Congrats! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }
}

let game = () => {
    let score = 0;
    for(let i = 0; i<5; i++) {
        let choice = prompt("Please enter rock, paper, or scissors").toLowerCase();
        score += playRound(choice, computerPlay());
    }
    console.log(`Your score is ${score}`);
}