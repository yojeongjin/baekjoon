const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const year = parseInt(inputData[0]);

console.log(year-543);