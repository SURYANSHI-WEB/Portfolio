import { useEffect, useRef } from "react";

export default function ParallaxBackground({ contained }) {
  const canvasRef = useRef();
  const layers = [
    { speed: 0.1, color: "#0a0a23", opacity: 1 },
    { speed: 0.2, color: "#111133", opacity: 0.7 },
    { speed: 0.4, color: "#1a1a3a", opacity: 0.5 },
  ];
  const particleCount = 60;
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const scrollY = useRef(window.scrollY);

  // Initialize particles
  useEffect(() => {
    particles.current = Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 1.5 + Math.random() * 2.5,
      dx: (Math.random() - 0.5) * 0.001,
      dy: (Math.random() - 0.5) * 0.001,
      layer: Math.floor(Math.random() * layers.length),
    }));
  }, [layers.length]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = contained ? canvas.parentElement.offsetWidth : window.innerWidth;
    let height = contained ? canvas.parentElement.offsetHeight : window.innerHeight;
    let animationId;

    function resize() {
      width = contained ? canvas.parentElement.offsetWidth : window.innerWidth;
      height = contained ? canvas.parentElement.offsetHeight : window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      // Parallax layers
      layers.forEach((layer, i) => {
        ctx.globalAlpha = layer.opacity;
        ctx.fillStyle = layer.color;
        ctx.fillRect(0, 0, width, height);
      });
      // Particles
      particles.current.forEach((p) => {
        // Parallax offset
        const mx = (mouse.current.x - 0.5) * 60 * layers[p.layer].speed;
        const my = (mouse.current.y - 0.5) * 60 * layers[p.layer].speed;
        const sy = (scrollY.current / 100) * 30 * layers[p.layer].speed;
        ctx.globalAlpha = 0.7 + 0.3 * p.layer / layers.length;
        ctx.beginPath();
        ctx.arc(
          p.x * width + mx,
          p.y * height + my + sy,
          p.r,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = `rgba(0,180,255,0.7)`;
        ctx.shadowColor = "#00bfff";
        ctx.shadowBlur = 8 + 8 * p.layer;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      ctx.globalAlpha = 1;
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      // Move particles
      particles.current.forEach((p) => {
        p.x += p.dx * (1 + p.layer);
        p.y += p.dy * (1 + p.layer);
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;
      });
      draw();
      animationId = requestAnimationFrame(animate);
    }
    animate();

    // Mouse move
    function handleMouse(e) {
      if (contained) {
        const rect = canvas.getBoundingClientRect();
        mouse.current.x = (e.clientX - rect.left) / width;
        mouse.current.y = (e.clientY - rect.top) / height;
      } else {
        mouse.current.x = e.clientX / width;
        mouse.current.y = e.clientY / height;
      }
    }
    window.addEventListener("mousemove", handleMouse);
    // Scroll
    function handleScroll() {
      scrollY.current = window.scrollY;
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, [contained]);

  return (
    <canvas
      ref={canvasRef}
      style={contained ? {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        borderRadius: "inherit",
        pointerEvents: "none",
      } : {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
} 