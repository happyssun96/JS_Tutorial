function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log("안녕하세요!");
  await sleep(2000); // await로 2초 동안 기다린다.
  console.log("반갑습니다!");
  return true;
}

process().then((value) => {
  console.log(value); // true 출력
});

// async, await는 함수 선언하기 전에 붙여준다.
// async를 사용하면 함수의 결과물로 promise를 반환한다.
// await를 사용하면 해당 promise가 끝날 때까지 기다린 다음 작업을 수행한다.
