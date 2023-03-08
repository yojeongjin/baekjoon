function solution(quiz) {
    let answer = []
    
  for (let i=0; i<quiz.length; i++) {
    let A = quiz[i].split(' ')

    if(A[1] === '-') {
      Number(A[0]) - Number(A[2]) === Number(A[4]) ? answer.push("O") : answer.push("X")
    } else if(A[1] === '+') {
      Number(A[0]) + Number(A[2]) === Number(A[4]) ? answer.push("O") : answer.push("X")
    }
  }
    return answer
}