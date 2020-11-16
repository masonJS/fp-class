const log = console.log;

const each = (iter, f) => {
  for (let a of iter) {
    f(a);
  }
}

const map = (f, iter) => {
  const newList = [];
  each(iter, a => newList.push(f(a)));
  return newList;
}

const filter = (f, iter) => {
  const newList = [];
  each(iter, a => {
    if(f(a)) newList.push(a)
  })
  return newList
}

/**
 * reduce
 * [정의]
 * = 줄이다, 접다
 * = 해당 시작값을 기준으로 리스트에서 각각의 요소들을 인자로 받는 함수를 실행하는 함수
 * @params f, acc, iter
 * */
const reduce = (f, acc, iter) => {
  if(!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for(let a of iter) {
    acc = f(acc, a)
  }
  return acc
}


