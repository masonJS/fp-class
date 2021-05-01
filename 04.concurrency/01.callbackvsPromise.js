// callback pattern
// depth, indent 증가

// promise 와 callback 의 차이
// promise는 대기, 성공, 실패를 다루는 일급 값으로 이루어져 있다.
// 코드 나 context로만 다룰수 없는 callback과는 달리 값으로 활용될수 있다는 점이 프로그래밍 응용측면에서 굉장한 차이점을 둔다.

function addToCallback(a, callback){
  setTimeout(() => callback(a + 10), 100);
}

addToCallback(10, res => {
  addToCallback(res, res => {
    addToCallback(res, res => {
      console.log(res)
    })
  })
})


function addToPromise(a){
  return new Promise(resolve => setTimeout(() => resolve(a+ 10), 100));
}

addToPromise(10)
  .then(addToPromise)
  .then(addToPromise)
  .then(console.log)
