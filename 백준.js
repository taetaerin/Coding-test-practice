const fs = require('fs')

let [N, K] = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number)

let list = []

for(let i=1; i<=N; i++) {
    list.push(i)
}

//console.log(list)

let answer = []

while(list.length > 0) {

    for(let i=0; i<K-1; i++) {
        let res = list[i]
        let num = list.shift(res)
        list.push(num)

    }
    answer.push(list[0])
    list.shift(list[0])
}

console.log('<' + answer.join(', ') + '>')