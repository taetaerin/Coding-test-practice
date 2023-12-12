//부분집합 구하기
function solution(n){
  let answer=[];
  let ch = Array.from({length: n+1}, ()=> 0)
  
  function DFS(v) {
    if(v == n+1) {
      let tmp = ''
      for(let i=1; i<=n; i++) {
        if(ch[i] == 1) {
          tmp += i+" "
        }
      }
      if(tmp.length > 0) answer.push(tmp)
    }else {
      //포함
      ch[v] = 1;
      DFS(v+1)
      //포함 하지 않음
      ch[v] = 0;
      DFS(v+1)
    }
  }

  DFS(1)
  return answer;
}

console.log(solution(3));