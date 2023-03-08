function solution(n, t) {
let arr = new Array(t)
let number = n

for (let i=0; i<arr.length; i++) {
  number = number * 2
  arr[i] = number
}
    return arr[t-1]
}