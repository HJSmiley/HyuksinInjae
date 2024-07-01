var myFunc = function (message, title, age) {
    console.log(message);
    console.log(title);
    console.log(age);
    return true;
};
myFunc("hello", "myFirstArrowFunc", 30);
var func = function () { return console.log("func"); };
var func1 = function () { return ({ name: "dave" }); };
// 객체를 반환, 한 줄이므로 return 키워드 불필요
// 자바스크립트에서는 화살표 함수의 본문이 중괄호 {}로 시작할 때 이를 블록으로 해석함. 따라서 객체 리터럴을 반환하기 위해서는 중괄호를 괄호 ()로 감싸서 함수의 본문이 객체 리터럴임을 명확히 해야 함.
var func2 = function () {
    var val = 20;
    return val;
};
console.log(func());
console.log(func1());
console.log(func2());
