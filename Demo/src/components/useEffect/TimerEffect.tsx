import { useState, useEffect, useRef } from "react";

function TimerEffect() {
  const [count, setCount] = useState(0); // stores timer value
  const [isRunning, setIsRunning] = useState(false); // tracks if timer is running
  const intervalRef = useRef(null); // stores interval ID

  // useEffect to start/stop timer
  useEffect(() => {
    if (isRunning) {
      // start the interval
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      // stop the interval
      clearInterval(intervalRef.current);
    }

    // cleanup when component unmounts
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Button handlers
  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setCount(0);
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{count}</h1>
      <div>
        <button onClick={start} style={{ marginRight: "10px" }}>
          Start
        </button>
        <button onClick={stop} style={{ marginRight: "10px" }}>
          Stop
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default TimerEffect;
