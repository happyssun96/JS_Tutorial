const dog = {
  name: "멍멍이",
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName(dog);
console.log(name);

// 앞이 true이면 연산결과는 뒤에 것으로 출력
// 앞이 false이면 앞에 것으로 출력
console.log(true && "hello"); // 'hello' 출력
console.log(false && "hello"); // falsy false 출력
console.log("hello" && "bye"); // truthy bye 출력
console.log(null && "hello"); // falsy null출력
console.log(undefined && "hello"); // falsy undefined 출력
console.log("" && "hello"); // falsy 공백 출력
console.log(0 && "hello"); // falsy 0 출력
console.log(1 && "hello"); // 'hello' 출력
console.log(1 && 1); // 1 출력

// OR 연산자
const namelessDog = {
  name: "",
};

function getNames(animal) {
  const name = animal && animal.name;
  if (!name) {
    return "이름이 없는 동물입니다.";
  }
  return name;
}

const name2 = getNames(namelessDog);
console.log(name2);

function getNamedd(animal) {
  const name = animal && animal.name;
  return name || "이름이 없는 동물입니다.";
}

const name3 = getNamedd(namelessDog);
console.log(name3);

// 앞쪽이 false 이면 뒤에 것 출력
console.log(false || "hello"); // truthy 'hello' 출력
console.log("" || "이름없다."); // '이름없다' 출력
console.log(null || "널이다~!"); //  '널이다~!' 출력
console.log(undefined || "hello"); //  'hello' 출력
console.log(0 || "제로"); // '제로' 출력

// 앞쪽이 true 이면 앞쪽 출력
console.log(1 || "음?"); // 1 출력
console.log(true || "여기 안봄"); // true 출력
console.log([] || "노노"); // [] 출력

// OR 연산자는 어떠한 값이 없을 때 쓰면 유용하다.
