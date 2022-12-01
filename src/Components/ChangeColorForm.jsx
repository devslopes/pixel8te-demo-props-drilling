import { useState } from "react";

export const ChangeColorForm = ({ activePixel, changePixelColor }) => {
  const doesPixelExist = !!activePixel;

  const [colorInput, setColorInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        changePixelColor(colorInput);
        setColorInput("");
      }}
      style={{ padding: 20, fontSize: 30 }}
    >
      <label htmlFor="">Color: </label>
      <input
        type="text"
        placeholder={'"green" | "yellow" | #380'}
        style={{ fontSize: 30 }}
        value={colorInput}
        onChange={(e) => {
          setColorInput(e.target.value);
        }}
        disabled={!doesPixelExist}
      />
      <input
        type="submit"
        value="Submit"
        style={{ fontSize: 30, marginLeft: 10 }}
        disabled={!doesPixelExist}
      />
    </form>
  );
};
