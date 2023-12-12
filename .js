const fs = require('fs')

let [n, m] = fs.readFileSync('input.txt').toString().trim().split('\n')


while(1) {
  console.log('m',m)
  if(n.length == m.length) {
    if(n == m) {
      return console.log(1)
    }else {
      return console.log(0)
    }
    
  }
  else if(m[m.length-1] == 'A') {
    m = m.slice(0, m.length-1)
    console.log(m)
  }
  else if(m[m.length-1] == 'B'){
    m = m.slice(0, m.length-1)
    m = m.split('').reverse().join('')
    console.log(m)


  }
}