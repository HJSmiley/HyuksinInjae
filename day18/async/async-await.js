async function myName() {
  return "Andy";
}

async function showName() {
  const name = await myName();
  console.log(name);
}

// console.log(myName());
// myName().then(console.log);
console.log(showName());

function waitOneSecond(msg) {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(`${msg}`), 1000);
  });
}

async function countOneToTen() {
  // array가 10개 만들어지고, key에 해당하는 값들이 x로 반환됨
  for (let x of [...Array(10).keys()]) {
    let result = await waitOneSecond(`${x + 1}초 대기 중...`);
    console.log(result);
  }
  console.log("완료");
}

countOneToTen();
