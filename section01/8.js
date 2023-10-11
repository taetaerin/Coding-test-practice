//일곱 난쟁이
function solution(arr){
  let answer=arr;
  let flag = 0;
  let sum = arr.reduce((a,b) => a+b);

  for(let i=0; i<arr.length-1; i++) {
    for(let k=i+1; k<arr.length; k++) {
      if(sum - (arr[i] + arr[k]) === 100) {
        arr.splice(k, 1)
        arr.splice(i, 1)
        flag = 1;
        break;
      }
    }
    if(flag == 1) break;

  }
  return answer;
}

let arr=[22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));