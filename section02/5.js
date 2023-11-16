//등수 구하기
function solution(arr){  
  let answer = new Array(arr.length).fill(1);

  for(let i=0; i<arr.length; i++) {
    for(let k=0; k<arr.length; k++) {
      if(arr[i] < arr[k]) {
          answer[i] += 1
      }
    }
  }

    
  return answer;
}

let arr=[87, 89, 92, 100, 76];
// let arr=[92, 92, 92, 100, 76];
console.log(solution(arr));