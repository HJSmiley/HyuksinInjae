function doSomething(a, ...others) {
  // ...oters = [2, 3, 4, 5, 6, 7];
  console.log(a, others, others[others.length - 1]);
}
// 배열의 제일 마지막에 있는 요소에 접근할 때 배열 요소에 -1 해 줌
doSomething(1, 2, 3, 4, 5, 6, 7);
