import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(4);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>+</button>
      {count}
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default App;
