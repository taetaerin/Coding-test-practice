//중복 문자 제거
function solution(s){  
  let answer="";
  s = [...new Set(s)]
  answer = s.join('')
  return answer;
}
console.log(solution("ksekkset"));

//방법 2
function solution(s){  
  let answer="";
  for(let i=0; i<s.length; i++) {
    if(s.indexOf(s[i]) === i) answer += s[i]
  }
  return answer;
}

console.log(solution("ksekkset"));