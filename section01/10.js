//문자 찾기
function solution(s, t){
  let answer=0;
  for(let x of str) {
    if(x === t) {
      answer += 1
    }
  }
  return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));

//split 사용
function solution(s, t){
  let answer=s.split(t).length-1;

  return answer;
}
console.log(solution(str, 'R'));