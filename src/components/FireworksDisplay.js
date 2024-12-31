import { useEffect } from "react";
import { Fireworks } from "fireworks-js";

const FireworksDisplay = () => {
  useEffect(() => {
    console.log("Fireworks mounted");
    const container = document.getElementById("fireworks-container");
    const fireworks = new Fireworks(container, {
      speed: 3,
      acceleration: 1.05,
      friction: 0.98,
      gravity: 1.5,
    });
    fireworks.start();

    return () => fireworks.stop(); // Clean up on unmount
  }, []);

  return (
    <div
      id="fireworks-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
      }}
    ></div>
  );
};

export default FireworksDisplay;
