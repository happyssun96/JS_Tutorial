const array = [1, 2];
let text =
  array.length === 0 ? "배열이 비어있습니다." : "배열이 비어있지 않습니다.";
console.log(text);

const condition1 = false;
const condition2 = false;

const value = condition1 ? "와우!" : condition2 ? "블라블라" : "foo";
// 첫번째도 false이고 두번째에서도 false이기 때문에 'foo'가 출력
console.log(value);

// 삼항연산자는 왠만하면 1번만, 위 처럼 길게 하려면 차라리 if문이 낫다!
