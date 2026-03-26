import { useState, useEffect } from "react";
export default function Dictionary() {
  const [word, setWord] = useState<string>("");

  useEffect(() => {
    console.log("State Updated ", word);
  }, [word]);

  return (
    <>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />

      <h1>Let's get the definition for {word}</h1>
    </>
  );
}
