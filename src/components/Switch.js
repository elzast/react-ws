import React, { useState } from "react";
import "./Switch.css";

function Switch() {
  const [on, setOn] = useState();
  const stateClass = on ? "Switch--on" : "Switch--off";

  return (
    <div className={"Switch " + stateClass}>
      <h3>Switch</h3>
      <p>{on ? "ON" : "OFF"}</p>
      <p>
        {on ? (
          <button type="button" onClick={() => setOn(false)}>
            Turn Off
          </button>
        ) : (
          <button type="button" onClick={() => setOn(true)}>
            Turn On
          </button>
        )}
      </p>
    </div>
  );
}

export default Switch;
