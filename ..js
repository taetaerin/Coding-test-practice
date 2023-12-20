const fs = require('fs')

let input = fs.readFileSync('input.txt').toString().trim().split('\n')

console.log(input)

let maxLen = -Infinity

for(let x of input) {   
    maxLen = Math.max(maxLen, x.length)
}

console.log(maxLen)

let answer = []

for(let i=0; i<maxLen; i++) {
    for(let x of input) {
        answer.push(x[i])
    }
}

console.log(answer)

let list = answer.filter((item) => item != undefined)
console.log(list.join(''))