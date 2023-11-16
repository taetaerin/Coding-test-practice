//큰 수 출력하기
function solution(arr){         
  let answer=[];

  for(let i=1; i<arr.length; i++) {
    if(arr[i] < arr[i-1]) {
      answer.push(arr[i-1])
    }else answer.push(arr[i])
  }
  answer = [...new Set(answer)]
  return answer;
}

let arr=[7, 3, 9, 5, 6, 12];
console.log(solution(arr));