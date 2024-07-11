import React, { useState, useEffect } from "react";

function UseSampleApp1() {
  // Addition
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [resultAB, setResultAB] = useState(NaN);
  const handlerA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(parseInt(e.target.value));
  };
  const handlerB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setB(parseInt(e.target.value));
  };
  const handlerAdddition = () => {
    setResultAB(a + b);
  };

  // Subtraction
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [resultCD, setResultCD] = useState(NaN);
  const handlerC = (e: React.ChangeEvent<HTMLInputElement>) => {
    setC(parseInt(e.target.value));
  };
  const handlerD = (e: React.ChangeEvent<HTMLInputElement>) => {
    setD(parseInt(e.target.value));
  };
  const handlerMinus = () => {
    setResultCD(c - d);
  };

  // Multiplication
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [resultEF, setResultEF] = useState(NaN);
  const handlerE = (e: React.ChangeEvent<HTMLInputElement>) => {
    setE(parseInt(e.target.value));
  };
  const handlerF = (e: React.ChangeEvent<HTMLInputElement>) => {
    setF(parseInt(e.target.value));
  };
  const handlerMultiply = () => {
    setResultEF(e * f);
  };

  // Division
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);
  const [resultGH, setResultGH] = useState(NaN);
  const handlerG = (e: React.ChangeEvent<HTMLInputElement>) => {
    setG(parseInt(e.target.value));
  };
  const handlerH = (e: React.ChangeEvent<HTMLInputElement>) => {
    setH(parseInt(e.target.value));
  };
  const handlerDivision = () => {
    setResultGH(g / h);
  };

  return (
    <div>
      <div>
        <span>a: </span>
        <input type="number" value={a} onChange={handlerA} />
        <span>b: </span>
        <input type="number" value={b} onChange={handlerB} />
        <button onClick={handlerAdddition}>+</button>
        <span>{resultAB}</span>
      </div>
      <div>
        <span>c: </span>
        <input type="number" value={c} onChange={handlerC} />
        <span>d: </span>
        <input type="number" value={d} onChange={handlerD} />
        <button onClick={handlerMinus}>-</button>
        <span>{resultCD}</span>
      </div>
      <div>
        <span>e: </span>
        <input type="number" value={e} onChange={handlerE} />
        <span>f: </span>
        <input type="number" value={f} onChange={handlerF} />
        <button onClick={handlerMultiply}>*</button>
        <span>{resultEF}</span>
      </div>
      <div>
        <span>g: </span>
        <input type="number" value={g} onChange={handlerG} />
        <span>h: </span>
        <input type="number" value={h} onChange={handlerH} />
        <button onClick={handlerDivision}>/</button>
        <span>{resultGH}</span>
      </div>
    </div>
  );
}

export default UseSampleApp1;
