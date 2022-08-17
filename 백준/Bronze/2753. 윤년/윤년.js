var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

const year = parseInt(input[0]);

const a = 0 === (year%4)
const b = 0 !== (year%100)
const c = 0 === (year%400)

if ((a && b) || c) {
    console.log(1)
} else {
    console.log(0)
}