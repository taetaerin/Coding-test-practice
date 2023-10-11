//대문자 찾기
function solution(s){         
  let answer=0;
  for(let x of s) {
    if(x === x.toUpperCase()) {
      answer += 1
    }
  }

  return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));