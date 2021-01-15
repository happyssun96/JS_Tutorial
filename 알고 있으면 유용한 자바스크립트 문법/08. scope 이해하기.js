// scope => 어디까지 유효한지 범위를 의미
// global : 전역
// function : 특정 함수 내에만
// block : 감싸진 block 내부에서만 사용 가능

const value = "hello!";

function myFunction() {
  // 함수형 scope
  console.log("My Function: ");
  console.log(value);
}

function otherFunction() {
  console.log("Other Function!: ");
  const value = "bye!";
  console.log(value); // 안에서 설정한 'bye!' 가 출력
}

myFunction();
otherFunction();

console.log("Global scope: ");
console.log(value);

function myFunction2() {
  const value = "bye!";
  const anotherValue = "world!";
  function functionInside() {
    console.log("functionInside: ");
    console.log(value); // 'bye'
    console.log(anotherValue); // 'world'
  }
  functionInside();
}
myFunction2();

console.log("Global scope:");
console.log(value); // 'hello'
//console.log(anotherValue); // 함수 안에서 선언되었기 때문에 선언되지 않았다는 오류가 나온다.

function myFunction3() {
  const value = "bye!";
  if (true) {
    // block scope
    const value = "world";
    console.log("block scope: ");
    console.log(value);
  }
  console.log("function scope: ");
  console.log(value);
}
myFunction3();
console.log("Global scope:");
console.log(value);
