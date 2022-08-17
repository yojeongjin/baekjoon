var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

const H = parseInt(input[0])
const M = parseInt(input[1])

result (H, M);

function result (H, M) {
  if (M >= 45) {
    console.log(H, M - 45)
  } else if (H === 0 && M < 45) {
    console.log(23, M + 15)
  } else if (H !== 0 && M < 45) {
    console.log(H - 1, M + 15)
  }
}