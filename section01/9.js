//A를 #으로
function solution(s){
  let answer='';
  answer = str.replaceAll("A", "#")
  // answer = str.replace(/A/g, "#")
  return answer;
}

let str="BANANA";
console.log(solution(str));

// 다른 방법
function solution(s){
  let answer='';
  for(let x of s) {
    if (x === 'A') answer += '#'
    else answer += x
  }
  return answer;
}

console.log(solution(str));