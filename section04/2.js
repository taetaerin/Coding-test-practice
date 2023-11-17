function isPrime(num) {
  let result=0;
  for(let i=1; i<=Math.sqrt(num); i++) {
    if(num % i == 0) {
       result += 2
       if(num / i == i) {
        result -=1
       }
    }
  }
  return result
}

function solution(arr){
  let answer=[];
  for(let x of arr) {
    x = String(x).split('').reverse().join('')
    //console.log(Number(x))
    if(isPrime(x) == 2) {
      answer.push(Number(x))
    }
  }
  return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));