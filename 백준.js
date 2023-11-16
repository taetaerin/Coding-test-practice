const fs = require('fs')

let [n, list, m] = fs.readFileSync('input.txt').toString().trim().split('\n')
let lt=0, rt=n-1, sum=0, answer=0
list = list.split(' ').map(Number).sort((a,b) => a-b)
console.log(list)

while(lt<rt) {
    sum = list[lt] + list[rt]
    if(sum > m) {
        rt -= 1
    }
    if(sum < m) {
        lt += 1
    }
    if(sum == m) {
        answer += 1
        lt += 1
        rt -=1
    }
}

console.log(answer)