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
