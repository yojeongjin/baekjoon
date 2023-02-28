function solution(array) {
    let A = array.join('').split('')
    let answer = []
    
    for (let i=0; i<A.length; i++) {
        if(A[i] === '7') {
            answer.push(i)
        }
    }
    return answer.length
}