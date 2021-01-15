const objects = { a: 1, b: 2 };
const { a, b = 2 } = objects;

console.log(a);
console.log(b);

function print({ a, b = 2, c = 1 }) {
  console.log(a);
  console.log(b);
  console.log(c);
}
print(objects);

const animal = {
  name: "멍멍이",
  type: "개",
};

const nickname = animal.name;
console.log(nickname);

// 비구조화 할당으로 다름 이름을 꺼낼 수 있다.
const { name: nickname2 } = animal;
console.log(nickname2);
// 원래 name은 바뀌지 않는다.
console.log(animal);

// 배열 비구조화 할당
const array = [1, 2, 3];
const [one, two] = array;

console.log(one);
console.log(two);

// 기본값을 넣어줄 수 있다.
const [one2, two2, three = 3] = array;
console.log(one2);
console.log(two2);
console.log(three);

// 깊숙한 곳에 있는 객체 꺼내기
const deepObject = {
  state: {
    information: {
      name: "Simon",
      languages: ["Korean", "English", "Spanish"],
    },
  },
  value: 5,
};

// 방법 1 : 비구조화 할당을 2번 사용
// const { name, languages } = deepObject.state.information;
// const { value } = deepObject;

// const extracted = {
//   name,
//   languages,
//   value,
// };
// console.log(extracted);

// 방법 2 : 비구조화 할당을 1번 하면서 여러가지 다 빼온다.
const {
  state: {
    information: { name, languages },
  },
  value,
} = deepObject;

const extracted = {
  name,
  languages,
  value,
};

console.log(extracted);
