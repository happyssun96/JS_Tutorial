const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log(number.innerText);
console.log(increase.offsetTop);
console.log(decrease.id);

increase.onclick = () => {
  const current = parseInt(number.innerText, 10); // number.innerText 문자열을 Int형 10진수로 바꾼다.
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10); // number.innerText 문자열을 Int형 10진수로 바꾼다.
  number.innerText = current - 1;
};
