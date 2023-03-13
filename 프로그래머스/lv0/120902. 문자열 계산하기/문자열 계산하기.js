function solution(my_string) {
    let arr = my_string.split(' ')
    
  let answer = parseInt(arr[0])

  arr.forEach((item,idx) => {
    if(item === "+") {
      answer += parseInt(arr[idx+1])
    } else if (item === "-") {
      answer -= parseInt(arr[idx+1])
    }
  })
  return answer
}