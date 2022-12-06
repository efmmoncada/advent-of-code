"use strict";

const fs = require('fs');
let stream = fs.readFileSync('input.txt').toString().split('');


const findMarker = (stream, numCharsInMarker) => {
    let i;

    for (i = 0; i < stream.length - numCharsInMarker; i++) {
        let chars = stream.slice(i, i + numCharsInMarker);
        let exist = stream.slice(i, i + numCharsInMarker).reduce((prev, char) => ({...prev, [char]: true}), {});
        if (Object.keys(exist).length === numCharsInMarker) return i + numCharsInMarker;
    }
}

console.log("Part 1:", findMarker(stream, 4));
console.log("Part 2:", findMarker(stream, 14));


