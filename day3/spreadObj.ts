namespace NamespaceA {
  class A {
    aname: string = "A";
  }

  class B {
    bname: string = "B";
  }

  const a = new A();
  const b = new B();
  const c = { ...a, ...b };
  const d = Object.assign(a, b); // 새로운 값을 만든 게 아니라 원본 값을 보고 있음
  console.log(c);
  console.log(d);

  a.aname = "a1";
  console.log(c);
  console.log(d);
}

// d는 alias(원래 있던 변수 값을 바라봄)이고 c는 copy(아예 다른 메모리 공간을 차지하게끔 카피)
