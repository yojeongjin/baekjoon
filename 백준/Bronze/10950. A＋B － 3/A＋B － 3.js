let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = input[0];

for (let i = 1; i <= T; i += 1) {
    let N = input[i].split(' ');
    console.log(Number(N[0]) + Number(N[1]));
}