const products = [
  {name: '반팔티', price: 15000},
  {name: '긴팔티', price: 20000},
  {name: '핸드폰케이스', price: 15000},
  {name: '후드티', price: 30000},
  {name: '바지', price: 25000},
];



const go = (...args) => reduce((a, f) => f(a), args);

const add = (a, b) => a + b;

const reduce = (f, acc, iter) => {
  if(!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value
  }

  for (const a of iter) {
    acc = f(acc, a);
  }

  return acc;
}
//filter 함수 사용
const filter = (f, iter) => {
  let res  = [];
  for(const a of iter) {
    if(f(a)) res.push(a)
  }
  return res
}

const map = (f, iter) => {
  let res = [];
  for(const a of iter) {
    res.push(f(a))
  }
  return res
}

go(
  products,
  products => filter(p => p.price < 20000, products),
  products => map(p => p.price, products),
  prices => reduce(add, prices),
  console.log
)

//1. 함수를 받아서 함수를 리턴
//2. 만약 인자가 2개 이상 -> 함수를 실행 , 2개보다 작으면 함수를 다시 return 한 후 그 이후에 받은 인자를 합쳐서 실행
const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const mult = curry((a, b) => a*b)

console.log(mult(3)(2)) //(..._) => f(a, ..._)

const mult3 = mult(3)

console.log(mult3(10)) // 30
console.log(mult3(5))  // 15



go(
  products,
  products => filter(p => p.price < 20000, products),
  products => map(p => p.price, products),
  prices => reduce(add, prices),
  console.log
)