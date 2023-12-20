//동전 교환
function solution(m, coin){  
    let answer=0;
    let dp=Array.from({length:m+1}, ()=>1000);
    dp[0] = 0;

    for(let i=0; i<arr.length; i++) {
        for(let j=coin[i]; j<=m; j++) {
            dp[j] = Math.min(dp[j], dp[j-coin[i]] + 1)
        }
    }

    answer = dp[m];
    
    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));