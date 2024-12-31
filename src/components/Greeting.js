import React from "react";
import { motion } from "framer-motion"
import CountdownTimer from "./CountdownTimer";
import QuoteGenerator from "./QuoteGenerator";

const Greeting = () => {
  const year = new Date().getFullYear();
  return (
    <motion.div 
    style={{
      position: "absolute", // Makes the container fill the screen
      top: 0,
      left: 0,
      width: "100vw", // Full width of the viewport
      height: "100vh", // Full height of the viewport
      backgroundImage: `url(/pink-7761356_1280.webp)`, // Replace with your image name
      backgroundSize: "cover", // Ensures the image covers the entire container
      backgroundPosition: "center", // Centers the image
      backgroundRepeat: "no-repeat", // Prevents repetition
      color: "white", // Ensures readability of text
      display: "flex", // For centering text
      flexDirection: "column",
      justifyContent: "center", // Centers text vertically
      alignItems: "center", // Centers text horizontally
      textAlign: "center",
      // padding: "20px",
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
      
     
      <h1 style={{ color: "#EFBF04" }}>🎉 Happy New Year {year}! 🎉</h1> {/* Dark Purple for contrast */}
      <p style={{ color: "#FF2C2C", fontSize: "20px",fontWeight: "bold" }}>Wishing you a year full of success, joy, and great code!</p> {/* Dark Blue for contrast */}
    <CountdownTimer />
      <QuoteGenerator />
    </motion.div>
  );
};
// #A8DCAB
// #1E3A5F
export default Greeting;