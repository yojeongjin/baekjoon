var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input[0];
const b = input[1];

const [b0, b1, b2] = b.split('');

console.log(a * b2);
console.log(a * b1);
console.log(a * b0);
console.log((a * b2) + Number(`${(a*b1)}0`) + Number(`${(a*b0)}00`));