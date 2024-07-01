class A {
  name: string = "A";
  go() {
    console.log(this.name);
  }
}

class B {
  name: string = "B";
  go() {
    console.log(this.name);
  }
}

const a = new A();
a.go();

const b = new B();
b.go = b.go.bind(a);
// 이렇게 바인딩을 설정하면 b.go 함수 내부에서 사용되는 this는 더 이상 b 객체를 가리키지 않고 a 객체를 가리키게 됨.
b.go();
