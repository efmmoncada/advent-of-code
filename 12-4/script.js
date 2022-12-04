const fs = require('fs');

let pairs = fs.readFileSync('input.txt').toString().split('\n').map(pair => pair.split(','));

let numPairsFullyContatined = pairs.reduce((prev, ranges) => {
    let [[start1, end1], [start2, end2]] = ranges.map(range => range.split('-').map(x => parseInt(x)));

    return (start1 <= start2 && end1 >= end2) || (start2 <= start1 && end2 >= end1) ? prev + 1 : prev;
}, 0);

console.log("Part 1:", numPairsFullyContatined);

let numOverlappingPairs = pairs.reduce((prev, ranges) => {
    let [[start1, end1], [start2, end2]] = ranges.map(range => range.split('-').map(x => parseInt(x)));

    return (start1 <= start2 && start2 <= end1) || (start2 <= start1 && start1 <= end2) ? prev + 1 : prev;
}, 0);

console.log("Part 2:", numOverlappingPairs);

