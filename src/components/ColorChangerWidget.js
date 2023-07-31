import { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("white");
  const [typeField, setTypeField] = useState("");

  return (
    <div className="choose-color-wrapper widget">
      <h1>Color chooser </h1>
      <div style={{ backgroundColor: `${color}` }}></div>
      <h1 style={{ color: `${color}` }}>{color}</h1>

      <h3>put your chosen color below</h3>
      <input type="text" onChange={(e) => setTypeField(e.target.value)} />

      <button onClick={() => setColor(typeField)}>set your color</button>
    </div>
  );
}
