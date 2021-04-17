import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(5);

  function handleReset() {
    //use setCount to modify state at runtime
    setCount(0);
  }
  function handleUp() {
    setCount((prevCount) => prevCount + 1);
  }

  // JSX always comes last
  return (
    <div className="Counter">
      <h3>Counter</h3>
      <p>{count}</p>
      <p>
        {/* This is a way to put the function in the JSX directly */}
        <button
          type="button"
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          Down
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="button" onClick={handleUp}>
          Up
        </button>
      </p>
    </div>
  );
}
export default Counter;
