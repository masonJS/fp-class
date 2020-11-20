const { go, pipe, log, take, reduce, curry } = require('../fp')

const L = {}

/** L.map */
L.map = curry(function *(f, iter) {
  for(const a  of iter) yield f(a);
})

// go(
//   [1,2,3,4],
//   L.map(a => a + 10),
//   take(Infinity),
//   log
// )

/** L.filter */
L.filter = curry(function *(f, iter) {
  for(const a of iter)  if(f(a)) yield a;
})

// go(
//   [1,2,3,4],
//   L.filter(a => a % 2),
//   take(Infinity),
//   log
// )

/** join */
const join = curry((sep = '', iter) => reduce((a,c) => `${a}${sep}${c}`, iter))

function* a() {
  yield 11;
  yield 12;
  yield 13;
  yield 14;
}
// log(join('-', a()))

/** L.entries */
L.entries = function *(obj) {
  for (const k in obj) yield [k, obj[k]]
}

const queryStr = pipe(
  L.entries,
  L.map(([k, v]) => `${k}=${v}`),
  join('&')
)

// log(queryStr({ limit: 10, offset: 10, type: 'notice'}))

/** L.find */
const users = [
  { age: 32 },
  { age: 33 },
  { age: 34 },
  { age: 35 },
  { age: 36 },
  { age: 37 },
  { age: 38 }
]

const find = curry((f, iter) => go(
  iter,
  L.filter(a => f(a)),
  take(1),
  ([a]) => a
))


go(
  users,
  L.map(u => u.age),
  find(n => n > 34),
  log
)



