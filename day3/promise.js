const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I completed successfully.");
    // reject("I failed.");
  }, 1000);
});

// then: promise의 실행이 끝나고 나서 실행됨(기다려 줌)
myPromise
  .then((done) => {
    console.log("done: ", done);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
