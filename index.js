
const log = console.log;
// arguments 객체는 함수에 전달된 인수에 해당하는 Array 형태의 객체
const curry = (f) => function(a, b) {
  return arguments.length === 2 ?f(a, b) : (b) => f(b,a)
};

const get = curry((obj, key) => obj == null ? undefined : obj[key]);

const is_object = obj => typeof obj === 'object' && !!obj;

const keys = obj => is_object(obj) ? Object.keys(obj) : [];

const range = (length, f) => Array.from({length}, (v, i) => f(i));
/** keys(list) 를 통해 object 접근 가능 - 다형성 높임 */
const each = (list, iter) => range(keys(list).length, i => iter(list[keys(list)[i]]));

const identity = v => v;

const negate = (fuc) => ((val) => !fuc(val));

const rest = (list, num) => Array.prototype.slice.call(list, num || 1);


/** 수집하기 */
const map = curry((list, mapper) => {
  let newList = [];
  each(list, (val) => { newList.push(mapper(val)) });
  return newList;
});
const values = map(identity);
const pluck = (data, key) => map(data, get(key));


/** 거르기 */
// predicate: 참 또는 거짓을 판별하는 함수
const filter = curry((list, predicate) => {
  let newList = [];
  each(list, (val) => { if (predicate(val)) newList.push(val); })
  return newList;
});
const reject = (data, predicate) => filter(data, negate(predicate));
const compact = filter(identity);


/** 찾아내기 */
const find = curry((list, predicate) => {
  const _keys = keys(list);
  for (let i = 0, len = _keys.length; i < len; i ++) {
    const val = list[_keys[i]];
    if(predicate(val)) return val;
  }
});
const findIndex = curry((list, predicate) => {
  const _keys = keys(list);
  for (let i = 0, len = _keys.length; i < len; i ++) {
    const val = list[_keys[i]];
    if(predicate(val)) return i;
  }
  return -1;
})
const some = curry((data, predicate) => (findIndex(data, predicate || identity) !== -1));
const every = curry((data, predicate) => (findIndex(data, negate(predicate || identity)) !== -1));


/** 접기 */
const reduce = (list, iter, memo) => {
  // if (arguments.length === 2) [memo, ...list] = list;
  each(list, function(val){ memo = iter(memo, val) });
  return memo;
};


/** 펼치기 */
const flatten = (arr) => function f(arr, new_arr){
  each(arr, v => Array.isArray(v) ? f(v, new_arr) : new_arr.push(v));
  return new_arr;
}(arr, []);

/** 파이프 라인 */
const pipe = (..._) => (arg) => reduce(_, (arg, fn) => fn(arg), arg);
const go = (arg, ..._) => pipe.apply(null, _)(arg);
