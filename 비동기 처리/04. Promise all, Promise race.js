// 비동기 함수 몇개 더

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async 화살표 함수로 표현
const getDog = async () => {
  await sleep(1000); // 1초
  return "멍멍이";
};

const getRabbit = async () => {
  await sleep(500); // 0.5초
  return "토끼";
};

const getTurtle = async () => {
  await sleep(3000); // 3초
  return "거북이";
};

async function process() {
  // 하나씩 처리된다.
  const dog = await getDog();
  console.log(dog);
  const rabbit = await getRabbit();
  console.log(rabbit);
  const turtle = await getTurtle();
  console.log(turtle);
}

// process();

// 만약 여러개를 동시에 실행시키고 싶다면? -> promise all
async function process2() {
  // 배열을 만들어 Promise.all 에 감싸준다.
  const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
  console.log(results); // 모든 프로미스들이 다 끝나면 각각 끝난 결과값의 배열이 나타난다.
}

process2(); // 거북이가 끝날 때 한꺼번에 출력 => ["멍멍이", "토끼", "거북이"]
// promise all 에서 셋 중 하나라도 에러가 나면 전체가 에러난 것으로 간주한다.

// promise race -> 가장 먼저 끝난 하나만 출력
async function process3() {
  const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
  console.log(first);
}

process3(); // 토끼

// promise race 에서 먼저 끝난게 에러날 때만 전체가 에러난 것으로 간주

// promise all 이 개발하면서 더 많이 쓰인다.
