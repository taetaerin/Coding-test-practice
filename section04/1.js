//자릿수의 합
// function solution(n, arr){
//   let answer=0 ,maxNum = -123456;
//   arr = arr.sort((a,b) => a-b)
//   for(let i=0; i<n; i++) {
//       let sum=0;
//       let num = String(arr[i]).split('').map(Number)
//       sum = num.reduce((a,b) => a+b)
//       maxNum = Math.max(maxNum, sum)
//       if(maxNum == sum) {
//         answer=arr[i]
//       }
//   }
//   return answer;
// }

// let arr=[128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));

function solution(n, arr){
  let answer=0 ,maxNum = -123456;

  for(let x of arr) {
      let sum=0, tmp=x;
      while(tmp) {
        let t = tmp%10
        tmp = parseInt(tmp/10)
        sum += t
      }
      console.log(sum)
      if(sum > maxNum) {
        maxNum = sum
        answer = x
      }else if(sum == maxNum){
        if(x > answer) {
          answer=x
        }
      }

  }
  return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));