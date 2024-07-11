import React, { useEffect, useRef } from "react";

const UseRefApp4 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
      console.log(inputRef.current);
      inputRef.current.addEventListener("dblclick", () => {
        alert("test");
      });
    }
  });

  const login = () => {
    alert(`환영합니다. ${inputRef.current!.value}`);
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default UseRefApp4;
