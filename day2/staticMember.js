// class ClassA {
//   static typeName: string;
//   constructor() {}
//   static getFullName() {
//     return "ClassA " + ClassA.typeName;
//   }
// }
// const a = new ClassA();
// // console.log(a.typeName);
// console.log(ClassA.typeName);
// console.log(ClassA.getFullName());
var Runner = /** @class */ (function () {
    function Runner(typename) {
        this.typename = typename;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typename;
    };
    return Runner;
}());
var a = new Runner("a");
var b = new Runner("b");
a.run();
b.run();
console.log(Runner.lastRunTypeName);
