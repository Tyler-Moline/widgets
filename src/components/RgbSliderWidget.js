// A RGB slider widget which will include:
// 1 (one) rendered small box with a solid background color
// 1 (one) rendered label with 3 (three) numbers underneath detailing how much red, green and blue are used in the color based on the RGB number system
// 3 (three) rendered range slider input elements
// Consider that when sliding one of the three sliders it should:
// Update the cooresponding value in the label to the appropriate red, green or blue value
// Update the background color of the small box to the appropriate color

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
