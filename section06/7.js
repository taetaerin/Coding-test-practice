//교육과정설계
function solution(need, plan){
  let answer="YES";
  let que = need.split('')
  for(let x of plan) {
    if(que.includes(x)) {
      if(x !== que.shift()) {
        return 'NO'
      }
    }
  }  
  return answer;
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));