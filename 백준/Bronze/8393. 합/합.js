let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString();


let n = Number(input);
let sum = 0;

for (let i=1; i<=n; i++) {
  sum = sum + i;
}

console.log(sum);