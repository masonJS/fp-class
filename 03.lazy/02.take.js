const { L, log } = require('../fp')

const take = (l, iter) => {
  let res = [];
  for(const a of iter) {
    res.push(a)
    if(res.length === l) return res;
  }
  return res;
}

log(take(5, L.range(1000)));


