//돌다리
function solution(n){  
    let answer=0;
    let dp = Array.from({length: n+1}, () => 0);
    dp[1] = 1;
    dp[2] = 2;

    for(let i=3; i<=n+1; i++) {
        dp[i] = dp[i-2] + dp[i-1]
    }
    
    answer = dp[n+1]
   
    return answer;
}

console.log(solution(7));