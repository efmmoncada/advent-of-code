
let fs = require('fs');

let moveScores = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3
}

let moveNames = {
    A: 'rock',
    B: 'paper',
    C: 'scissors',
    X: 'rock',
    Y: 'paper',
    Z: 'scissors'
}

/**
 * returns the value of a move
 *
 * @param {string} move
 * @returns {number}
 */
 let getMoveScore = move => moveScores[move];

 /**
  * returns the name of a move from its "code char"
  *
  * @param {string} move
  * @returns {string}
  */
 let getMoveName = move => moveNames[move];

 /**
  *
  * @param {string} outcome
  * @returns {string}
  */
 let getOutcomeName = outcome => outcome === 'X' ? 'lose' : outcome === 'Y' ? 'draw' : 'win';


let getOutcomeScore = (move1, move2) => {
    if (move1 === move2) return 3; // draw
    if (move1 === "rock") {
        return move2 === "paper" ? 6 : 0;
    }
    if (move1 === "paper") {
        return move2 === "scissors" ? 6 : 0;
    }
    if (move1 === "scissors") {
        return move2 === "rock" ? 6 : 0;
    }
}




let playOneRoundStrategy1 = (move1, move2) => {
    let roundScore = 0;

    roundScore += getMoveScore(move2);
    roundScore += getOutcomeScore(getMoveName(move1), getMoveName(move2));

    return roundScore;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}


let file = fs.readFileSync('input.txt')

let moveSequence = file.toString().split('\n').map(str => str.split(' '));


let totalScore = 0;
moveSequence.forEach(([move1, move2]) => totalScore += playOneRoundStrategy1(move1, move2));
console.log("Part 1:", totalScore);

// part 2

/**
 *
 * @param {string} move1
 * @param {string} outcome
 * @returns
 */
const findMove = (move1, outcome) => {
    switch (outcome) {
        case 'win':
            return move1 === 'rock' ? 'paper' : move1 === 'paper' ? 'scissors' : 'rock';
        case 'draw':
            return move1;
        case 'lose':
            return move1 === 'rock' ? 'scissors' : move1 === 'paper' ? 'rock' : 'paper';
    }
}

let playOneRoundStrategy2 = (move1, outcome) => {


    let moveToPlay = findMove(getMoveName(move1), getOutcomeName(outcome));

    console.log(move1, moveToPlay);

    let roundScore = 0;
    roundScore += getMoveScore(getKeyByValue(moveNames, moveToPlay));
    roundScore += getOutcomeScore(getMoveName(move1), getMoveName(getKeyByValue(moveNames, moveToPlay)));

    return roundScore;
}

totalScore = 0;
moveSequence.forEach(([move1, outcome]) => totalScore += playOneRoundStrategy2(move1, outcome));
console.log("Part 2:", totalScore);







