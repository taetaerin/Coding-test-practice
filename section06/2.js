//괄호 문자 제거
function solution(s){  
  let answer;
  let stack = []
  for(let x of s) {
    if(x == ')') {
      while(stack.pop() !== '(') {
        console.log(stack)
      }
    }
    else stack.push(x)
  }
  console.log(stack)
  return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));