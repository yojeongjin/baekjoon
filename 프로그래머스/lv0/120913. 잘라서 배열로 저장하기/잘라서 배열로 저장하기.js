function solution(my_str, n) {
    let arrA = [...my_str]

  let answer = []
  for (let i=0; i<arrA.length; i+n) {
    answer.push(arrA.splice(i,i+n).join(''))
  }
  return answer
}