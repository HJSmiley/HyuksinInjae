interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(arg: T): number {
  return arg.length;
}

// function getLength<T>(arg: T): number {
//   if (arg.hasOwnProperty("length")) {
//     // (arg as any).hasOwnProperty
//     return arg["length"];
//   }
//   return 0;
// }

console.log(getLength<number>(22)); // number에는 length 속성이 없으므로 0 출력
console.log(getLength("Hello World.")); // 12 출력
