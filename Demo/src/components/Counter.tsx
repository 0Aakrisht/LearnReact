import { useState } from "react";
const Counter = () => {
    const[count,setCount] = useState<number>(0);
    const decrement = () => {
        setCount(prevCount =>prevCount-1)
    }
    const increment = () => {
    setCount(prevCount=>prevCount+1)
    }
    const reset =() => {
        setCount(0);
    }
    return (
        <>
        <button onClick={decrement} disabled={count == 0 }>-</button>
        <p >{count}</p>
        <button onClick={increment} disabled={count==10 }>+</button>
        <button onClick={reset}>Reset</button>
        </>
    );
};
export default Counter ;