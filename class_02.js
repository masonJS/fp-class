/**
 * reduce
 * [정의]
 * = 줄이다, 접다
 * = 해당 시작값을 기준으로 리스트에서 각각의 요소들을 인자로 받는 함수를 실행하는 함수
 * @params list, f, memo
 * */

// console.log(
//   reduce(
//     [2, 3, 4],
//     function(a, b){
//       return a + b;
//     },
//
//   )
// )

// memo = f(1, 2) // 3
// memo = f(3, 3) // 6
// memo = f(6, 4) // 10

function each (list, f) {
  for (let i = 0, len = list.length; i < len; i++) {
    f(list[i])
  }
}

function reduce(list, f, memo) {
  if (arguments.length === 2) [memo, ...list] = list
  each(list, function(val){
    memo = f(memo, val)
  });
  return memo;
}

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

// const fns = pipe(
//   function(a) { return a + a; },
//   function(a) { return a * a; }
// );
// console.log(fns(1));

function pipe(){
  const fns = arguments;
  return function(arg) {
    return reduce(fns, function(memo, f){
      return f(memo);
    }, arg);
  }
}

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

function go(arg, ...fns){
  // fns = [ f1(), f2(), f3() ... ]
  return pipe.apply(null, fns)(arg);
}

// go(
//   1,
//   function(a) { return a + a }, // 2
//   function(a) { return a * a }, // 4
//   console.log
// )

module.exports = {
  go
}
