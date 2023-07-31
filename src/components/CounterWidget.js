import { useState } from "react";

export default function CounterWidget() {
  const [count, setCount] = useState(1);

  return (
    <div className="counter-widget-wrapper widget">
      <h1>Counter Widget</h1>
      <h1>{count}</h1>

      <button onClick={() => setCount((count) => count + 1)}>Add it up</button>
      <button
        onClick={() => setCount((count) => (count > 1 ? count - 1 : count))}
      >
        Remove it
      </button>
    </div>
  );
}
