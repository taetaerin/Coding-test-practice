//홀수
function solution(arr){
  let answer=[];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER
  
  for(let i=0; i<arr.length; i++) {
    if(arr[i]%2 != 0) {
      sum += arr[i]
      if(arr[i] < min) min=arr[i]
      console.log(min)
    }
  }
 
  answer.push(sum)
  answer.push(min)

  return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));