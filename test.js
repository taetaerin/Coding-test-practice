const arr = [1, 2, 3, 4, 5]

const mapArr = arr.map(function (item) {
  return item * 2
})

console.log(mapArr) //[ 2, 4, 6, 8, 10 ]



console.log(arr.forEach((item) => item * 2))