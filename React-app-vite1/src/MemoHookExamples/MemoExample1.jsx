import React, { useState, useMemo } from "react";

function MemoExample1() {
  const [num, setNum] = useState(1);
  const [other, setOther] = useState(false);

  const factorial = () => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  return (
    <div>
      <h2>
        Factorial of {num}: {factorial()}
      </h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(+e.target.value)}
      />
      <button onClick={() => setOther(!other)}>Toggle Other</button>
    </div>
  );
}

export default MemoExample1;
