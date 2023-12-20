//최대부분 증가수열
function solution(arr){  
    let answer=0;
    let dp=Array.from({length:arr.length}, ()=>0);
    dp[0] = 1;

    for(let i=1; i<arr.length; i++) {
        let max = 0;
        for(let j=i-1; j>=0; j--) {
            if(arr[j] < arr[i] && dp[j] > max) {
                max = dp[j]
            }
            dp[i] = max + 1;

        }
        answer = Math.max(answer, dp[i])
    }
    
    return answer;
}

let arr=[5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));