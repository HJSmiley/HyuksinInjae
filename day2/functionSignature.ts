type Run = (miles: number) => boolean;

let runner: Run = function (miles: number): boolean {
  let bool = miles > 10 ? true : false;
  return bool;
  // if (miles > 10) {
  //   return true;
  // }
  // return false;
};

console.log(runner(9));
