export const Pixel = ({ pixel, isActive, onClick }) => (
  <div
    className="pixel"
    style={{
      borderColor: isActive ? "teal" : "black",
      borderWidth: isActive ? 10 : 1,
      backgroundColor: pixel.color,
    }}
    onClick={() => {
      onClick();
    }}
  ></div>
);
