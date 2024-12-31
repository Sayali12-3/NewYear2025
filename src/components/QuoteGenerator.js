import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

const quotes = [
  {
    text: "🥂Cheers to a new year and new opportunities!🥂",
    color: "#FF6F61",
    animation: "confetti",
  },
  {
    text: "🎊 Write your story for 2025 with joy and passion! 🎊",
    color: "#6B5B95",
    animation: "confetti",
  },
  {
    text: "🎇 Make 2025 your best year yet! 🎇 ",
    color: "#88B04B",
    animation: "confetti",
  },
  {
    text: "🎊Code hard, sleep harder. Happy New Year!🎊",
    color: "#FF4500", // Orange Red
    animation: "confetti",
  },
  {
    text: "🌟 Push to master, pull to happiness! 🌟",
    color: "#00BFFF", // Deep Sky Blue
    animation: "confetti",
  },
  {
    text: "💫 New Year, new algorithms to master! 💫",
    color: "#DC143C", // Crimson
    animation: "confetti",
  },
  {
    text: "✨2025: The year of scalable solutions and clean code✨.",
    color: "#1E90FF", // Dodger Blue
    animation: "confetti",
  },
  {
    text: "✨ Sparkle brighter in 2025! ✨",
    color: "#F7CAC9",
    animation: "confetti",
  },
  {
    text: "🍾Celebrate every moment of the New Year!🍾",
    color: "#C2FFB5",
    animation: "confetti",
  },
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const [popupColor, setPopupColor] = useState("#FFFFFF");
  const [currentAnimation, setCurrentAnimation] = useState("");

  const generateQuote = () => {
    setCelebrate(true);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    setQuote(selectedQuote.text);
    setPopupColor(selectedQuote.color);
    setCurrentAnimation(selectedQuote.animation);
    setShowCard(true);
    setTimeout(() => setShowCard(false), 3000);
    setTimeout(() => setCelebrate(false), 3000);
  };

  const renderAnimation = () => {
    console.log("Current Animation:", currentAnimation);
    switch (currentAnimation) {
      case "confetti":
        return <Confetti numberOfPieces={300} />;
      case "fireworks":
        return (
          <Confetti numberOfPieces={300} />
        );
      case "sparkle":
        return (
        <Confetti numberOfPieces={300} />
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <button
        onClick={generateQuote}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Power Up with Quotes
      </button>
      {showCard && (
        <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          rotateY: 180, // Initial 180-degree rotation
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateY: 0, // Rotate to 0 degrees for the final state
          backgroundColor: popupColor,
        }}
        transition={{
          duration: 1, // Set a duration for the transition to make the effect smooth
          backgroundColor: { duration: 0.8, ease: "easeInOut" },
        }}
        style={{
          position: "absolute",
          top: "40%",
          left: "35%",
          backgroundColor: "#CCCCFF",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          transformStyle: "preserve-3d", // Ensures the 3D effect works
          transform: "perspective(600px)", // Adds perspective for a more realistic 3D effect
        }}
      >
        <h2>🎉 Happy New Year 2025 🎉</h2>
        <p style={{ fontSize: "18px", fontStyle: "italic" }}>{quote}</p>
      </motion.div>
      )}
      {celebrate && renderAnimation()}
    </div>
  );
};

export default QuoteGenerator;
