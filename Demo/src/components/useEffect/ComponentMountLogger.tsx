//1. Component Mount Logger

//Description: Create a component that logs a message to the console when it first mounts. Experiment with adding a second effect that logs every time the component re-renders.

import { useState, useEffect } from "react";

const ComponentMountLogger = () => {
  const [word, setWord] = useState("");
  useEffect(() => {
    console.log("Component mounted");
  }, []);
  useEffect(() => {
    console.log("Word changed");
  }, [word]);
  return (
    <>
      <button onClick={() => setWord("hello")}>click me</button>
      <p>{word}</p>
    </>
  );
};

export default ComponentMountLogger;
