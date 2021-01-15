// promise란 비동기처리를 쉽게 해주는 장치

function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}
// 1초에 1씩 더해준다. 효율적이지 못한 코드
// increaseAndPrint(0, (n) => {
//   increaseAndPrint(n, (n) => {
//     increaseAndPrint(n, (n) => {
//       increaseAndPrint(n, (n) => {
//         increaseAndPrint(n, (n) => {
//           console.log("작업 끝!");
//         });
//       });
//     });
//   });
// });

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("result"); // 성공하는 상황
  }, 1000); // 어떤 결과물을 반환하고 1초후에 실행하겠다.
});

myPromise.then((result) => {
  console.log(result); // myPromise 끝나고 할 작업을 설정
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error()); // 실패하는 상황
  }, 1000);
});

myPromise2
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    // 1초 뒤에 에러 발생
    console.error(e);
  });

// promise를 만드는 함수
function increaseAndPrint2(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        // 실패 상황 : 5에 도달하면 에러 발생시킨다.
        const error = new Error();
        error.name = "ValueIsFiveError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value); // 성공할 시 출력
    }, 1000);
  });
}

increaseAndPrint2(0)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .then(increaseAndPrint2)
  .catch((e) => {
    console.error(e);
  });

// 단점 : 어느 부분에서 에러가 나왔는지 구분하기 어렵다.
// 특정 값을 공유하면서 하기에도 번거롭다
// -> await, async 로 해결!
