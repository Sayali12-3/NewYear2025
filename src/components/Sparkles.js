import { Particles } from "react-tsparticles";

const Sparkles = () => (
  <Particles
    options={{
      particles: {
        number: { value: 50 },
        color: { value: "#ffffff" },
        shape: { type: "star" },
        opacity: { value: 0.8 },
        size: { value: 5 },
      },
    }}
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "1000",
    }}
  />
);

export default Sparkles;
