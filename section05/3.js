//연속 부분 수열 1
function solution(m, arr){
  let answer=0, lt=0, sum=0

  for(let rt=0; rt<arr.length; rt++) {
    sum += arr[rt]
    if(sum == m) {
      answer += 1
    }
    while(sum>=m) {
      sum -= arr[lt]
      lt++
      if(sum == m) {
        answer ++ 
      }
    }
  }

  return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));