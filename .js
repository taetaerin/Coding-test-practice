const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input.shift().split(' ').map(Number)

let list = input.shift().split(' ').map(Number)
console.log(n, m)
console.log('list', list)

for(let i=0; i<m; i++) {
  list.sort((a,b) => a-b)
  console.log(list)
  let num = BigInt(list[0]) + BigInt(list[1])
  console.log(num)
  list[0] = num
  list[1] = num
} 


list = list.map((item) => item.toString())
console.log(list.reduce((a,b) => a+b))
