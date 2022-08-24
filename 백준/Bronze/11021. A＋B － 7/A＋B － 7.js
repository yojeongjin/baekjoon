let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let T = input[0];

for (let i = 1; i <= T; i += 1) {
    let A = input[i].split(' ');
    console.log(`Case #${i}: ${Number(A[0]) + Number(A[1])}`);
}