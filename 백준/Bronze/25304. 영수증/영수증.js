var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');


const X = Number(input[0])
const N = Number(input[1])

let sum = 0

for (let i=2; i<N+2; i++) {
  let price = input[i].split(' ')
  let result = Number(price[0]) * Number(price[1])

  sum += result
}

if (sum === X) {
  console.log('Yes')
} else {
  console.log('No')
}
