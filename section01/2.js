// 삼각형 판별하기
// 가장 긴 변이 두 변의 합 보다 작아야 함

function solution(a, b, c){
  let answer="YES";
  let sum = a+b+c;
  
  const max_length = Math.max(a,b,c);
  if(max_length >= sum-max_length) {
    answer = 'NO'
  }

  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
