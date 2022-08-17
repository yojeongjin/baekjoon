var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

const time = input[0].split(' ')
const c = parseInt(input[1])

const M = parseInt(time[1]) + c
const H = parseInt(time[0]) + parseInt(M / 60)

const hour = H < 24 ? H : H - 24
const minuate = M < 60 ? M : M % 60

console.log(hour, minuate)