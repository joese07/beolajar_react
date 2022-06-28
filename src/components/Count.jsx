import { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const [kali, setKali] = useState();

  function buttonMinus() {
    setCount(count - 1);
  }

  function buttonPlus() {
    setCount(count + 1);
  }

  useEffect(() => {
    setKali(count * 2);
  });

  return (
    <>
      <h4>Hasil kali 2 dari </h4>
      <p>{count}</p>
      <div>
        <button onClick={buttonMinus}>-1</button>
        <button onClick={buttonPlus}>+1</button>
      </div>
      <h4>Adalah {kali}</h4>
    </>
  );
}

export default Count;
