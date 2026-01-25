import { useState } from "react";

const ControlledInput = () => {
  const [value, setValue] = useState<string>(""); // TypeScript: value is a string

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}          // controlled by React state
        onChange={handleChange} // update state on input change
        placeholder="Enter your name"
      />
      <p>You typed: {value}</p>
    </div>
  );
};

export default ControlledInput;
