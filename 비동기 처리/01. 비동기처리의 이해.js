function work() {
  const start = Date.now();
  for (let i = 0; i < 1000000000; i++) {
    // for문 안에 루프를 많이 돌게 함
  }
  const end = Date.now();
  console.log(end - start + "ms"); // 루프를 도는데 걸린 시간
}

work();
console.log("다음 작업"); // 위 작업 끝난 다음에 진행된다(동기적)

// 비동기적 작업

function work2() {
  setTimeout(() => {
    // 특정 시간이 지난 뒤에 작업을 하겠다.
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
  }, 0);
}
console.log("작업시작"); // 첫번째로 호출
work2(); /// 루프 끝나고 호출됨
console.log("다음작업"); // 두번째 호출

// callback 함수 -> 함수 형태를 파라미터로 보내고
// 파라미터로 받은 함수를 특정 작업이 끝난 다음에 적용

function work3(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms"); // 세번째
    callback(end - start);
  }, 0);
}

console.log("작업시작!"); // 첫번째로 시작
work3((ms) => {
  // 끝난 다음에 함수가 호출됨
  console.log("작업이 끝났어요");
  console.log(ms + "ms 걸렸다해요");
});
console.log("다음 작업"); // work함수 루프 도는 동안 두번째로 실행
