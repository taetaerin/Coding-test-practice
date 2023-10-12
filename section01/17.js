//중복 단어 제거
function solution(s){  
  let answer;
  // answer = [...new Set(s)]
  answer = s.filter(function(v, i) {
    if(s.indexOf(v) === i) return true
  })
  return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));