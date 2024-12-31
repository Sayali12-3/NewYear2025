import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("Jan 1, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft("🎉 It's New Year!");
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center"}}>
      <h2 style={{ color: "#4B0082" }}>⏳ Countdown to New Year:</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold",color:'#61000E' }}>{timeLeft}</p>
    </div>
  );
};

export default CountdownTimer;