import { useState } from "react";

export default function Greeting() {
  const [greet, setGreet] = useState(false);

  return (
    <div className="greeting widget">
      <h1>Greeting Widget</h1>
      <h1>{greet ? "Goodbye" : "Hello"}</h1>

      <button onClick={() => setGreet((greet) => (greet = !greet))}>
        Toggle Greeting
      </button>
    </div>
  );
}
