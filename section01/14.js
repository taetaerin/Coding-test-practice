//가장 긴 문자열
function solution(s){  
  let answer=""
  let max = s[0];
  for(let x of s) {
    if(x.length >= max.length) max = x
  }
  answer = max
  return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));