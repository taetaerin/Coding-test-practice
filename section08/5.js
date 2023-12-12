//합이 같은 부분집합 
function solution(arr){
  let answer = "NO";
  let total = arr.reduce((a,b) => a+b);
  let n = arr.length;
  
  function DFS(L, sum) {
    if(L == n) {
      if((total - sum) == sum) {
        answer = 'YES'
      }

    }
    else {
      DFS(L+1, sum + arr[L])
      DFS(L+1, sum)
    }
  }

  DFS(0, 0)
  return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));