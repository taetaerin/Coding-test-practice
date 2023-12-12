function solution(arr){
  let answer=[];
  let list = [...arr]
  list.sort((a,b) => a-b)

  console.log(arr, list)
  
  for(let i=0; i<arr.length; i++) {
    if(arr[i] !== list[i]) {
      answer.push(i+1)
    }
  }
  return answer;
}

//let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr=[120, 130, 150, 150, 130, 150];
console.log(solution(arr));