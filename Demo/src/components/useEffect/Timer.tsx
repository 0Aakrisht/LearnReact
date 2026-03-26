// 2. Timer / Interval Counter

// Description: Build a simple counter that increases automatically every second. Use useEffect to start the interval when the component mounts and clean it up when it unmounts.

import { useState, useEffect } from "react";
const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const handleTime = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(handleTime);
  }, []);
  return (
    <>
      <p>{count}</p>
    </>
  );
};
export default Timer;
