import { useState } from "react";

function IncrementDecrement() {
  const [count, setCount] = useState(0);
  const handleIncrementClick = (e) => {
    console.log("Increment Button is clicked!!!", e);
    setCount(count + 1);
  };
  const handleDecrementClick = (e) => {
    console.log("Decrement Button is clicked!!!", e);
    setCount(count - 1);
  };
  const handleClearClick = (e) => {
    console.log("Clear Button is clicked!!!", e);
    setCount(0);
  };
  return (
    <div>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleClearClick}>Clear</button>
      <div>Count: {count}</div>
    </div>
  );
}

export default IncrementDecrement;
