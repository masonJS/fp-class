const { filter, map, reduce, log } = require('../fp')

/**
 * go
 * [정의]
 * pipe의 즉시 실행함수
 * [구문]
 * go(
 * arg,
 * f1(),
 * f2(),
 * f3(),
 * ...
 * )
 * */
const go = (...args) => reduce((a, f) => f(a), args)

// go(
//   1,
//   a => a + 1,
//   a => a * 2,
//   log
// )


/**
 * pipe
 * [정의]
 * 인자로 받은 함수를 연속적으로 실행해주는 함수
 * [구문]
 * pipe(
 * f1(),
 * f2(),
 * f3().
 * ...
 * )
 * */

const pipe = (f, ...fs) => (...a) => go(f(...a), ...fs);

const f = pipe(
  (a, b) => a + b,
  a => a + 1,
  a => a * 2
)

// log(f(1, 2))


const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._)

const mult = curry((a,b) => a * b);

// log(mult(2)(3))


const developers = [{ name: 'mason', age: 26}, { name: 'alvin', age: 19}, { name: 'brandon', age: 25}, { name: 'herce', age: 28}];

// go(
//   developers,
//   filter(user => user.age > 27),
//   map(user => user.name),
//   log
// )
//
//
// go(
//   [1,2,3,4,5],
//   reduce((a, b) => a + b),
//   log
// )


module.exports = {
  go
}
