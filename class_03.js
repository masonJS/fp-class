const { go } = require('./class_02');
const spin_developers = [{ name: 'mason', age: 26}, { name: 'alvin', age: 19}, { name: 'brandon', age: 25}, { name: 'herce', age: 28}];


const curry = (f) => (a, b) => (!b ? b => f(b, a) : f(a,b));

const each =  (list, f) => {
  for (let i = 0, len = list.length; i < len; i++) {
    f(list[i])
  }
}

const filter = curry((list, predicate) => {
  let new_list = [];
  each(list, val => { if (predicate(val)) new_list.push(val) });
  return new_list;
})

const map = curry((list, mapper) => {
  let new_list = [];
  each(list, val =>  new_list.push(mapper(val)) );
  return new_list;
})

go(
  spin_developers,
  filter(user => user.age > 27),
  map(user => user.name),
  console.log
)

