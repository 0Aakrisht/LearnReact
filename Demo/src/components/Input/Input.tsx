import { useState } from "react";

const ControlledInput = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="enter anything..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <p>{input}</p>
    </div>
  );
};

export default ControlledInput;
