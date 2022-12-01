import "./App.css";
import { ChangeColorForm } from "./Components/ChangeColorForm";
import { PixelBoard } from "./Components/PixelBoard";
import { useState } from "react";

const initialPixels = [
  {
    color: "green",
  },
  {
    color: "red",
  },
  {
    color: "blue",
  },
  {
    color: "red",
  },
  {
    color: "green",
  },
  {
    color: "red",
  },
];

function App() {
  const [pixels, setPixels] = useState(initialPixels);
  const [activePixelIndex, setActivePixelIndex] = useState(null);

  const activePixel = pixels[activePixelIndex];

  const changePixelColor = (newColor) => {
    setPixels(
      pixels.map((pixel, i) => {
        if (i === activePixelIndex) {
          return {
            color: newColor,
          };
        }
        return pixel;
      })
    );
  };

  return (
    <div className="App">
      <h1>pixel8te</h1>
      <PixelBoard
        pixels={pixels}
        activePixelIndex={activePixelIndex}
        setActivePixelIndex={setActivePixelIndex}
      />
      <ChangeColorForm
        activePixel={activePixel}
        changePixelColor={changePixelColor}
      />
    </div>
  );
}

export default App;
