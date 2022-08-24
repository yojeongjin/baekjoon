var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

let star = "";
for (let i = 0; i < input; i += 1) {
    star += "*"
    console.log(star);
}