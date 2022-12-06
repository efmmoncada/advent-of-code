const fs = require('fs');

const file = fs.readFileSync('input.txt').toString();

let [diagram, instructions] = file.split('\n\n');
diagram = diagram.split('\n');

const numStacks = diagram.at(-1).trim().split(" ").filter(x => x).length;


let stacks = [...Array(numStacks).keys()].map(i => []);

diagram.slice(0, diagram.length - 1).reverse().forEach((line, idx) => {
    let codes = line.split(' ');
    // codes
    while (!codes.slice(0, 3).every(x => x)) {
        if (!codes.slice(0, 3).every(x => x)) codes.splice(0, 3);
    }

    codes.forEach((code, i) => stacks[i].push(code));
})

stacks = stacks.map(stack => stack.filter(x => x)).map(stack => stack.map(str => str.split('').at(1)));

stacks

instructions.split('\n').forEach(line => {
    let [amt, from, to] = line.split(' ').filter(Number).map(Number);
    for (let i = 0; i < amt; i++) {
        stacks[to - 1].push(stacks[from - 1].pop())
    }
})

let topCrates = stacks.map(stack => stack.pop());

console.log(topCrates.join(''));
