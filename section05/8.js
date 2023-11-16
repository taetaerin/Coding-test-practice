// 모든 아나그램 찾기         

function compareMaps(map1, map2){

}

function solution(s, t) {
  let answer=0;
  let tH = new Map();
  let sH = new Map();

  for(let x of t) {
    if(tH.has(x)) tH.set(x, tH.get(x) +1)
    else tH.set(x, 1)
  }

  let len = t.length-1

  for(let i=0; i<len; i++) {
    if(sH.has(s[i])) sH.set(s[i], sH.get(s[i]) +1)
    else sH.set(s[i], 1)
  }
  let lt=0; 

  for(let rt=len; rt<s.length; rt++) {
    if(rt.has(s[i])) rH.set(s[i], rt.get(s[i]) +1)
    else rt.set(s[i], 1)
  }
  return answer
}


let a="bacaAacba";
let b="abc";
console.log(solution(a, b));