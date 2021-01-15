const slime = {
  name: "슬라임",
};
const cuteSlime = {
  name: "슬라임",
  attribute: "cute",
};
const purpleCuteSlime = {
  name: "슬라임",
  attribute: "cute",
  color: "purple",
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

// 기존의 객체를 참고해서 새로운 객체를 만들고 싶을 때 spread를 사용하면 편하다.

const slime2 = {
  ...slime,
  attribute: "angry",
};

console.log(slime2);

console.log(slime === cuteSlime); // false

const greenCuteSlime = {
  ...purpleCuteSlime,
  color: "green", // 먼저 있던 color 값에 덮어쓰게 됨
};

console.log(greenCuteSlime); // color: green

// 배열에서 spread 연산 사용
const animals = ["개", "고양이", "참새"];
const anotherAnimals = [...animals, "비둘기"];
//const anotherAnimals = animals.concat("비둘기"); // 위와 같다.
console.log(animals);
console.log(anotherAnimals);

const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];

console.log(spreadNumbers);

// rest 연산 => 퍼져있는 속성을 모아온다.
const purpleCuteSlime2 = {
  name: "슬라임",
  attribute: "cute",
  color: "purple",
};

const { color, ...rest } = purpleCuteSlime2;
console.log(color); // purple
console.log(rest); // color를 제외한 attribute랑 name이 출력

const numbers2 = [0, 1, 2, 3, 4, 5, 6];

const [one, two, ...numero] = numbers2;
console.log(one); // 0
console.log(two); // 1
console.log(numero); // [2,3,4,5,6]
// ...rest는 맨 앞에 올 수 없다. 배열에서 rest는 맨 마지막에만 와야한다.

// 함수 파라미터에서의 rest
function sum(a, b, c, d, e, f, g) {
  return a + b + c + d + e + f + g;
}

function sum2(...params) {
  return params.reduce((acc, current) => acc + current, 0);
}

console.log(sum2(1, 2, 3, 4, 7));

// 퀴즈 : 함수에 n개 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요
function max(...params) {
  let max_k = 0;
  for (let num of params) {
    if (num > max_k) {
      max_k = num;
    }
  }
  return max_k;
}

const res = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(res);
