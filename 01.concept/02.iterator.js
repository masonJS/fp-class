/**
 * ES5 리스트 순회
 *  - for i++
 * */

const list = [1, 2, 3]
for (let i = 0; i < list.length; i++) {
  console.log(list[i])
}

/**
 * ES6 리스트 순회
 * - for of
 */
for(const a of list){
  console.log(a)
}


/** iterable */
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    this.current = this.from
    return this;
  },
  next() {
    if(this.current < this.to) {
      return { done: false, value: this.current++ }
    } else{
      return { done: true }
    }
  }
}

for(const a of range){
  console.log(a)
}


function* generatorFunction () {
  yield 'First'
  console.log('First log')
  yield 'Second'
  console.log('Second log')
  yield 'Third'
}
console.log(generatorFunction())

const generatorObj = generatorFunction()
// console.log(generatorObj.next())
// console.log(generatorObj.next())
// console.log(generatorObj.next())
// console.log(generatorObj.next())
/**
 * 1. 첫번째 실행은 First 값을 반환한다.
 * 2. 두번째 실행은 이전 yield 다음 라인의 실행문부터 시작된다. 그리고 두번째 yield까지 실행이 되면서 'Second'값을 반환한다.
 * 3. 세번째 실행은 이전 yield 다음 라인의 실행문부터 시작된다. 그리고 세번째 yield까지 실행이 되면서 'Third'값을 반환한다.
 * */


for (let a of generatorObj ) console.log(a)


const rangeGenerator = {
  from: 1,
  to: 5,
  *[Symbol.iterator]() {
    for(this.current= this.from; this.current < this.to; this.current++)
      yield this.current
  }
}


console.log([...rangeGenerator])

function* pseudoRandom(seed){
  let value = seed;
  while(true){
    value = value * 16807 % 2147483647;
    yield value;
  }
}

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
