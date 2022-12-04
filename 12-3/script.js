let fs = require('fs');

let file = fs.readFileSync('input.txt').toString();

let rutsacks = file.split('\n');

let splitRutsacks = rutsacks.map( rutsack => [rutsack.slice(0, rutsack.length / 2), rutsack.slice(rutsack.length / 2)]);

const codes = Array.from('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');


let repeatedItems = splitRutsacks.map( ([front, back]) => {
    let repeatedLetter = '';
    codes.forEach(letter => {
        if (front.includes(letter) && back.includes(letter)) repeatedLetter = letter;
    })
    return repeatedLetter;
})

const getPriority = char => char.charCodeAt() < 91 ? char.charCodeAt() - 38 : char.charCodeAt() - 96;

let sumOfRepeatedItems = repeatedItems.map(getPriority).reduce((prev, char) => prev += char);

// console.log("Part 1:", sumOfRepeatedItems);

let rutsackGroups = [];

for (let i = 0; i < rutsacks.length; i += 3) {
    console.log(i);
    rutsackGroups.push([rutsacks[i], rutsacks[i + 1], rutsacks[i + 2]]);
}

console.log(rutsackGroups);


// const rutsackGroups = rutsacks.map((curr, idx, arr) => arr.splice(0, 3)).filter(x => x);



repeatedItems = rutsackGroups.map(group => {
    let repeaatedLetter = '';
    codes.forEach(letter => {
        if (group.every(rutsack => rutsack.includes(letter)))
            repeaatedLetter = letter;
    });
    return repeaatedLetter;
})

sumOfRepeatedItems = repeatedItems.map(getPriority).reduce((prev, priority) => prev += priority);
console.log("Part 2:", sumOfRepeatedItems);

