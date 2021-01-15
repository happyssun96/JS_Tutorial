function calculateCircleArea(r) {
  const radius = r || 1; // 1을 기본값으로 사용하겠다.
  return Math.PI * radius * radius;
}

const area = calculateCircleArea();
console.log(area);

// 두번째 방법
function calculateCircleArea2(r = 1) {
  // 함수의 기본 파라미터를 1로 하겠다.
  return Math.PI * r * r;
}
const area2 = calculateCircleArea2();
console.log(area2);

// 화살표 함수로도 표현가능
const calculateCircleArea3 = (r = 1) => Math.PI * r * r;

const area3 = calculateCircleArea3();
console.log(area3);
