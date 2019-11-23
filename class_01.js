const spin_developers = [{ name: 'mason', age: 26}, { name: 'alvin', age: 19}, { name: 'brandon', age: 25}, { name: 'herce', age: 28}];
/** 명령형 프로그래밍
 * 어떤 방법으로 해나가는지 명령형으로 풀어나가는것
 * 알고리즘 o, 목표 x
 * * */

const new_list = [];
for(let i = 0, len = spin_developers.length; i < len; i++){
  if (spin_developers[i].age < 20) {
    new_list.push(spin_developers[i])
  }
}

const new_list2 = [];

for(let i = 0,len = spin_developers.length; i < len; i++){
  if (spin_developers[i].name === 'mason' ) {
    new_list2.push(spin_developers[i]);
  }
}
console.log(new_list);
console.log(new_list2);
// @todo refactoring!! -> 중복을 제거(코드가 짧아진다), 의도를 명시(코드가 단순해지고 읽기 쉬어진다).
// 추상화시킬 필요 -> 함수를 만들어보자 -> input: 리스트, 리스트의 요소들에 대해 참,거짓을 판별할수 있는 함수 , output => 새로운 리스트

/**
 * 함수형 프로그래밍 == 선언형 프로그래밍 != 명령형 프로그래밍
 * 무엇을 나타내는지
 * 알고리즘 x 목표 o*/
const filter = (list, predicate) => {
  let new_list = [];
  for(let i =0, len = list.length; i < len; i++) {
    if (predicate(list[i])) {
      new_list.push(list[i])
    }
  }
  return new_list;
};
console.log(filter(spin_developers, a => a.age < 20));
console.log(filter(spin_developers, a => a.name === 'mason'));

