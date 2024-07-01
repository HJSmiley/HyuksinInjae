const callerObj = {
  name: "jon",
};

function checkMyThis(age) {
  console.log(`What is this ${this}`);
  console.log(`Do I have a name? ${this.name}`);
  this.age = age;
  console.log(`What is my age ${this.age}`);
}

checkMyThis(); // 일반적인 함수 호출에서는 명시적으로 객체가 지정되지 않았으므로 기본적으로 전역 객체를 참조
checkMyThis.call(callerObj, 25);
