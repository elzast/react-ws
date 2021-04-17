import { useState } from "react";
import "./Counter.css";

function Counter() {
  // Will always have two variables.  One is the data the other is the set.  The name does not change what it does, but the order does.
  const [count, setCount] = useState(5);

  function handleReset() {
    //use setCount to modify state at runtime
    setCount(0);
  }
  function handleUp() {
    setCount((prevCount) => prevCount + 1);
  }

  let classes = "";
  if (count < 0) {
    classes += "negative";
  }

  // JSX always comes last
  return (
    <div className={classes}>
      <h3>Counter</h3>
      <p className="Counter__count">{count}</p>
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
        {count !== 0 && (
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        )}
        <button type="button" onClick={handleUp}>
          Up
        </button>
      </p>
    </div>
  );
}
export default Counter;
