import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Intro3D from "./components/Intro3D";
import GlowyCursor from "./components/GlowyCursor";
// import ParallaxBackground from "./components/ParallaxBackground";

function App() {
  // Always show intro for development/testing
  const [showIntro, setShowIntro] = useState(true);
  const [canAnimate, setCanAnimate] = useState(false);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <div
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        onClick={() => setCanAnimate(true)}
        style={{ cursor: canAnimate ? 'default' : 'pointer' }}
      >
        <Intro3D onFinish={handleIntroFinish} canAnimate={canAnimate} />
      </div>
    );
  }

  return (
    <>
      <GlowyCursor />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
