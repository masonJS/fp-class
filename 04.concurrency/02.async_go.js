const { go } = require('../fp');

function addToPromise(a){
  return new Promise(resolve => setTimeout(() => resolve(a+ 10), 100));
}

const log = a => console.log(a);

go(
  Promise.resolve(1),
  addToPromise,
  a => Promise.reject('this is error'),
  addToPromise,
  addToPromise,
  log
).catch(a => console.log(a))
