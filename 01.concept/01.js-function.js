/**
 * 일급 함수
 * - 함수를 값으로 다룰 수 있다. (변수, 인자 , 결과값)
 * - 조합성과 추상화의 도구
 * */


/**
 * 고차 함수
 * - 함수를 값으로 다루는 함수
 *
 * 1. 함수를 인자로 받아서 실행하는 함수
 * - apply1
 * - times
 *
 * 2. 함수를 만들어 리턴하는 함수(클로저를 만들어 리턴하는 함수)
 * - addMaker
 * */

const apply1 = f => f(1);
// console.log(apply1(a => a + 1));

const times = (f, n) => {
  let i = -1;
  while(++i < n) f(i);
}
// times(console.log,3)


const addMaker = a => b => a + b;
const add10 = addMaker(10);
// console.log(add10(2))

