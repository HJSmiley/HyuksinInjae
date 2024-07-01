async function delayedResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I completed successfully");
    }, 500);
  });
}

// 익명함수 ()();, 앞쪽은 함수, 뒤쪽은 그 함수를 실행한다는 의미
(async function execAsyncFunc() {
  const result = await delayedResult();
  console.log(result);
})();
