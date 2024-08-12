import "./colorpicker.css";
import {useState} from "react";

function ColorPicker() {
  const [color, setColor] = useState("#000000");

  const colors = [
    "red",
    "green",
    "blue",
    "violet",
    "brown",
    "orange",
    "yellow",
    "pink",
    "gray",
    "black",
  ];

  return (
    <div className="color-picker" style={{backgroundColor: color}}>
      <div className="bar">
        {colors.map((colorName) => (
          <button
            key={colorName}
            className="btn"
            style={{backgroundColor: colorName}}
            onClick={() => setColor(colorName)}
          >
            {colorName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
