const { log, reduce } = require('../fp')

// range
const range = len => {
  let i = -1;
  let res = [];
  while(++i < len) {
    res.push(i)
  }
  return res;
};

let list = range(5)
log(list)

// L.range

const L= {};
L.range = function* (len) {
  let i = -1;
  while (++i < len) {
    yield i;
  }
}

let List = L.range(4);
log(List)


// test

function test(name, time, f) {
  console.time(name)
  while(time--) f();
  console.timeEnd(name)
}
function add(a, b) {
  return a + b
}

test('range', 10, () => reduce(add, range(1000000)))
test('L.range', 10, () => reduce(add, L.range(1000000)))
