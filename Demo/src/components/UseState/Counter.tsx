import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  function decrement() {
    setCount((prev) => prev - 1);
  }
  function increment() {
    setCount((prev) => prev + 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <button onClick={decrement} disabled={count == 0}>
        -
      </button>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </>
  );
};
export default Counter;
