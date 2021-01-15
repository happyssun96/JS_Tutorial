myFunction(); // 먼저 선언해도 호출 가능

function myFunction() {
  console.log("Hello World!");
}
// 이렇게 끌어올려서 사용하는 것을 hoisting이라고 한다.
// 자바스크립트에서 이런 경우도 있다는 정도만... 이런 일은 피해야 한다.

function fn() {
  console.log(a);
  var a = 2; // undefined
}
fn();

// hoisting 방지 방법
myFunction2();
const myFunction2 = function myFunction2() {
  console.log("hi"); // error
};
