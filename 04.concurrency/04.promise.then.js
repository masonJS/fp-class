// promise.then 규칙
// promise 가 체이닝을 이루거나 중첩이 되어도 then 메소드 한번으로 값을 꺼낼수 잇다
Promise.resolve(Promise.resolve(Promise.resolve(1))).then(console.log)
