const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const L= {};

L.range = function* (len) {
  let i = -1;
  while (++i < len) {
    yield i;
  }
}

L.map = curry(function *(f, iter) {
  for(const a  of iter) yield f(a);
})

L.filter = curry(function *(f, iter) {
  for(const a of iter)  if(f(a)) yield a;
})

L.entries = function *(obj) {
  for (const k in obj) yield [k, obj[k]]
}

//
const go = (...args) => reduce((a, f) => f(a), args)

const pipe = (f, ...fs) => (...a) => go(f(...a), ...fs);

const take = curry((l, iter) => {
  let res = [];
  for(let a of iter) {
    res.push(a)
    if(res.length === l) return res;
  }
  return res;
})

const takeAll  = take(Infinity)

const log = console.log;

const map = curry(pipe(L.map, takeAll))

const filter = curry(pipe(L.filter, takeAll))

const reduce = curry((f, acc, iter) => {
  if(!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for(let a of iter) {
    acc = f(acc, a)
  }
  return acc
})

const range = len => {
  let i = -1;
  let res = [];
  while(++i < len) {
    res.push(i)
  }
  return res;
};

const join = curry((sep = '', iter) => reduce((a,c) => `${a}${sep}${c}`, iter))

const find = (f, iter) => go(
  iter,
  L.filter(a => f(a)),
  take(1),
  ([a]) => a
)


/** Legacy */

// const each = (iter, f) => {
//   for (let a of iter) {
//     f(a);
//   }
// }

// const map = curry((f, iter) => {
//   const newList = [];
//   each(iter, a => newList.push(f(a)));
//   return newList;
// })

// const filter = curry((f, iter) => {
//   const newList = [];
//   each(iter, a => {
//     if(f(a)) newList.push(a)
//   })
//   return newList
// })





module.exports = {
  go,
  pipe,
  curry,
  map,
  filter,
  reduce,
  log,
  take,
  L
}
