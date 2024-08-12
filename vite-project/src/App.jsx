import {useState} from "react";
import "./App.css";

function App() {
  let [varName, setVar] = useState(0);
  let [rotation, setRotation] = useState(0);

  function increase() {
    setVar(varName + 1);

    setRotation((prevRotation) => {
      const newRotation = prevRotation + 180;
      document.getElementById(
        "line"
      ).style.transform = `rotate(${newRotation}deg)`;
      return newRotation;
    });

    const counter = document.getElementById("counter");
    const circle = document.getElementById("circle");

    counter.style.color = "green";
    circle.style.backgroundColor = "rgba(0, 128, 0, 0.331)";
    circle.style.opacity = 0.7;

    setTimeout(() => {
      counter.style.color = "white";
      circle.style.backgroundColor = "initial";
      circle.style.opacity = 0.3;
    }, 100);

    if (varName < -1 || varName > 8) {
      circle.style.height = "400px";
      circle.style.width = "400px";
    } else {
      circle.style.height = "350px";
      circle.style.width = "350px";
    }
  }

  function decrease() {
    setVar(varName - 1);

    setRotation((prevRotation) => {
      const newRotation = prevRotation - 180;
      document.getElementById(
        "line"
      ).style.transform = `rotate(${newRotation}deg)`;
      return newRotation;
    });

    const counter = document.getElementById("counter");
    const circle = document.getElementById("circle");

    counter.style.color = "red";
    circle.style.backgroundColor = "rgba(255, 0, 0, 0.331)";
    circle.style.opacity = 0.7;

    setTimeout(() => {
      counter.style.color = "white";
      circle.style.backgroundColor = "initial";
      circle.style.opacity = 0.3;
    }, 100);

    if (varName < 1 || varName > 10) {
      circle.style.height = "400px";
      circle.style.width = "400px";
    } else {
      circle.style.height = "350px";
      circle.style.width = "350px";
    }
  }

  return (
    <>
      <div className="App">
        <div id="circle" className="circle"></div>
        <div id="line" className="line"></div>
        <button onClick={decrease}>
          <i className="bi bi-dash"></i>
        </button>
        <h1 id="counter" style={{color: "white"}}>
          {varName}
        </h1>
        <button onClick={increase}>
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </>
  );
}

export default App;
