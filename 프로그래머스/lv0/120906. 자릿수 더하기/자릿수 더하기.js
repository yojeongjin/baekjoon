function solution(n) {
let y = String(n).split('')

let answer = 0

for (let i=0; i<y.length; i++) {
  answer += Number(y[i])
}
return answer
}