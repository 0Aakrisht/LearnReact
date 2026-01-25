import { useState } from "react";
const ToDoList = () => {
  const [array, setArray] = useState([]);
  const [input, setInput] = useState("");

  const add = () => {
    if (input.trim() != "") {
      setArray((prev) => [...prev, input]);
      setInput("");
    }
  };

  const del = () => {
    setArray([]);
  };

  return (
    <>
      <input
        type="text"
        className="text"
        placeholder="Enter the list"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />

      <button type="button" onClick={add}>
        Add
      </button>
      <button type="button" onClick={del}>
        Delete
      </button>
      {array.map((arr, index) => (
        <li key={index}>{arr}</li>
      ))}
    </>
  );
};
export default ToDoList;
