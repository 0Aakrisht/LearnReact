// 3. Document Title Updater

// Description: Make a component with a state variable (like a counter) that updates the browser’s document title whenever the state changes. Add a cleanup effect to reset the title when the component unmounts.
import { useState, useEffect } from "react";
const DocumentTitleUpdater = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = "Aakrisht :" + count;
    return () => {
      document.title = "Null";
    };
  }, [count]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>change</button>
    </>
  );
};
export default DocumentTitleUpdater;
