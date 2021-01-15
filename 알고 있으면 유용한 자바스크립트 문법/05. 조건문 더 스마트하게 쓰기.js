function isAnimal(text) {
  return (
    text === "고양이" || text === "개" || text === "거북이" || text === "너구리"
  );
}

console.log(isAnimal("개"));

// 더 간단히 표현
function isAnimal2(text) {
  const animals = ["고양이", "개", "거북이", "너구리"];
  return animals.includes(text);
}
console.log(isAnimal2("개"));
console.log(isAnimal2("노트북"));

// 화살표 함수로 표현
const isAnimal3 = (text) => ["고양이", "개", "거북이", "너구리"].includes(text);
console.log(isAnimal3("너구리"));

function getSound(animal) {
  if (animal === "개") return "멍멍!";
  if (animal === "고양이") return "야옹~!";
  if (animal === "참새 ") return "쨱쨱";
  if (animal === "비둘기") return "구구 구 구!";

  return "...??";
}
console.log(getSound("개"));
console.log(getSound("비둘기"));
console.log(getSound("인간"));

function getSound2(animal) {
  const sounds = {
    개: "멍멍!",
    고양이: "야옹~!",
    참새: "짹짹",
    비둘기: "구구 구 구!",
  };
  return sounds[animal] || "...?";
}
console.log(getSound2("참새"));

function makeSound(animal) {
  const tasks = {
    개: () => {
      console.log("멍멍!");
    },
    고양이() {
      console.log("야옹~!");
    },
    비둘기() {
      console.log("구구 구 구!");
    },
    참새: () => {
      console.log("짹짹!");
    },
  };
  const task = tasks[animal];
  if (!task) {
    console.log("...??");
    return;
  }
  task();
}

makeSound("고양이");
makeSound("사람");
