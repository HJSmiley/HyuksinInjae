import React, { useState, useEffect } from "react";

function UseEffectApp1() {
  const [count, setCount] = useState(2);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("렌더링");
  });

  useEffect(() => {
    console.log("count 렌더링");
    // count 로직
  }, [count]);

  useEffect(() => {
    console.log("name 렌더링");
    // name 로직
  }, [name]);

  useEffect(() => {
    console.log("name 렌더링");
    // 처음에
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span>count: {count}</span>

      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}

export default UseEffectApp1;
