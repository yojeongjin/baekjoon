let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = input[1].split('').map(x => Number(x))

let total = N.reduce((acc,cur) =>
                      (acc+cur),0)

console.log(total)