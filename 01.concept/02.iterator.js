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
