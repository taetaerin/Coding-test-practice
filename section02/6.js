//격자판 최대합
function solution(arr){  

  let answer=[];
  //행의 합
 


  for(let i=0; i<arr.length; i++) {
    let sumA = 0
    let sumB = 0
    for(let j=0; j<arr[0].length; j++) {
        sumA += arr[i][j]
        sumB += arr[j][i]
    }
    answer.push(sumA)
    answer.push(sumB)
  }

  let sum1 = 0 
  let sum2 = 0
  for(let i=0; i<arr.length; i++) {
    sum1 += arr[i][i]
    sum2 += arr[i][arr.length-i-1]
  }

  answer.push(sum1)
  answer.push(sum2)

  answer = Math.max(...answer)

  return answer;
}

let arr=[[10, 13, 10, 12, 15], 
       [12, 39, 30, 23, 11],
       [11, 25, 50, 53, 15],
       [19, 27, 29, 37, 27],
       [19, 13, 30, 13, 19]];
console.log(solution(arr));