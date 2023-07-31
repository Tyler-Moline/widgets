// A RGB slider widget which will include:
// 1 (one) rendered small box with a solid background color
// 1 (one) rendered label with 3 (three) numbers underneath detailing how much red, green and blue are used in the color based on the RGB number system
// 3 (three) rendered range slider input elements
// Consider that when sliding one of the three sliders it should:
// Update the cooresponding value in the label to the appropriate red, green or blue value
// Update the background color of the small box to the appropriate color

import { useState } from "react";

export default function Slider() {
  const [redColor, setRedColor] = useState(0);
  const [greenColor, setGreenColor] = useState(0);
  const [blueColor, setBlueColor] = useState(0);

  function handleRed(event) {
    setRedColor(event.target.value);
  }
  function handleGreen(event) {
    setGreenColor(event.target.value);
  }
  function handleBlue(event) {
    setBlueColor(event.target.value);
  }

  return (
    <div className="slider-wrapper widget">
      <h1>Color Slider Widget</h1>
      <div
        className="visible-color"
        style={{
          backgroundColor: `rgb(${redColor}, ${greenColor}, ${blueColor})`,
        }}
      ></div>

      <div>
        <label htmlFor="">Red</label>
        <input
          className="red"
          type="range"
          min={1}
          max={255}
          onChange={handleRed}
        />
      </div>
      <div>
        <label htmlFor="">Green</label>
        <input
          className="green"
          type="range"
          min={1}
          max={255}
          onChange={handleGreen}
        />
      </div>
      <div>
        <label htmlFor="">Blue</label>
        <input
          className="blue"
          type="range"
          min={1}
          max={255}
          onChange={handleBlue}
        />
      </div>
    </div>
  );
}
