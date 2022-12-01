import { Pixel } from "./Pixel";

export const PixelBoard = ({
  pixels,
  activePixelIndex,
  setActivePixelIndex,
}) => {
  return (
    <div id="pixel-board">
      {pixels.map((pixel, index) => (
        <Pixel
          key={index}
          pixel={pixel}
          isActive={index === activePixelIndex}
          onClick={() => {
            setActivePixelIndex(index);
          }}
        />
      ))}
    </div>
  );
};
