import { useState } from "react";

export default function HideMe() {
  const [hide, setHide] = useState(false);

  return (
    <div className="hide-wrapper widget">
      <h1>Hiding Widget</h1>
      <h1>{hide ? "" : "Hide"}</h1>

      <button onClick={() => setHide((hide) => (hide = !hide))}>
        {hide ? "Show me" : "Hide me"}
      </button>
    </div>
  );
}
