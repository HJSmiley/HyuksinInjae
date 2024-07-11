import React, { useMemo, useState } from "react";

function hardCalculate(hardNumber: number): any {
  console.log("어려운 계산!");
  for (let i = 0; i < 99999999; i++) {
    // 생각하는 시간
  }
  return hardNumber + 10000;
}

function easyCalculate(easyNumber: number) {
  console.log("짱 쉬운 계산");
  return easyNumber + 1;
}

function UseMemoApp1() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => {
          setHardNumber(Number(e.target.value));
        }}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => {
          setEasyNumber(Number(e.target.value));
        }}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

export default UseMemoApp1;
