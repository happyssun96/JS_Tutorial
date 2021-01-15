function print(person) {
  if (!person) {
    // 객체가 없거나 null 값이면 오류 출력하지 않도록 함
    return;
  }
  console.log(person.name);
}

const person = {
  name: "John",
};

print(person);

// falsy한 값(undefined, null, 0, '', NAN)의 반대는 truthy(true 같은 값)
console.log(!undefined);
console.log(!null);
console.log(!0); // 0 이 falsy
console.log(!""); // 비어있는 문자도 falsy
console.log(!NaN);
console.log(!false);

// 반대도 마찬가지
console.log(!3);
console.log(!"hello");
console.log(![]); // 배열은 truthy한 값
console.log(!{}); // 객체도 truthy
console.log(!true);

const value = { a: 1 };
if (value) {
  console.log("value가 truthy하네요");
}

const truthy = value ? true : false;
console.log(truthy);

// true인지 false 인지 확인할 거 없이 !! 로 식별 가능!
