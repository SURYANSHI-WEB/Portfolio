import { useEffect, useState } from "react";

export default function Intro3D({ onFinish, canAnimate }) {
  const [typed, setTyped] = useState("");

  // Inject Google Fonts link for Orbitron
  useEffect(() => {
    if (!document.getElementById('orbitron-font-intro')) {
      const link = document.createElement('link');
      link.id = 'orbitron-font-intro';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  // Typewriter effect for 'SSSS'
  useEffect(() => {
    if (!canAnimate) {
      setTyped("");
      return;
    }
    const text = "SSSS";
    let i = 0;
    setTyped("");
    const interval = setInterval(() => {
      if (i < text.length) {
        setTyped((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => { if (onFinish) onFinish(); }, 700);
      }
    }, 350);
    return () => clearInterval(interval);
  }, [canAnimate, onFinish]);

  return (
    <div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div
        className="text-6xl tracking-widest select-none text-white"
        style={{
          letterSpacing: "0.1em",
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 700,
        }}
      >
        {canAnimate ? typed : ""}
        <span className="animate-pulse text-white">|</span>
      </div>
    </div>
  );
} 