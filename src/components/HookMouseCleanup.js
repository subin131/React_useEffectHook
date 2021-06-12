import React, { useState, useEffect } from "react";
import HookMouse from "./HookMouse";

function HookMouseCleanup() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  );
}

export default HookMouseCleanup;
