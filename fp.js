const log = console.log;

const each = (iter, f) => {
  for (let a of iter) {
    f(a);
  }
}

const curry = f => (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);


const map = curry((f, iter) => {
  const newList = [];
  each(iter, a => newList.push(f(a)));
  return newList;
})

const filter = curry((f, iter) => {
  const newList = [];
  each(iter, a => {
    if(f(a)) newList.push(a)
  })
  return newList
})

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


module.exports = {
  map,
  filter,
  reduce,
  log
}
