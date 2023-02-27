function solution(num, total) {
    const answer = [];
    const midNum = Math.ceil(total / num);
    const hint = Math.floor(num / 2);
    const firstNum = midNum - hint;
    for (let i = 0; i < num; i++) {
        answer.push(firstNum + i);
    }
    
    return answer;
}