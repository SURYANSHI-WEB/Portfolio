import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

export default function GlowyCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [trail, setTrail] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const requestRef = useRef();
  const cursorRef = useRef();

  // Only show on desktop
  useEffect(() => {
    if (isTouchDevice()) return;
    setVisible(true);
  }, []);

  // Mouse move and trail
  useEffect(() => {
    if (!visible) return;
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [visible]);

  // Animate trailing effect
  useEffect(() => {
    if (!visible) return;
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [pos, visible]);

  // Hover detection for clickable elements
  useEffect(() => {
    if (!visible) return;
    const checkHover = (e) => {
      const el = e.target;
      if (
        el.closest("button, a, [role='button'], [tabindex]:not([tabindex='-1']), .cursor-magnetic")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };
    window.addEventListener("mousemove", checkHover);
    return () => window.removeEventListener("mousemove", checkHover);
  }, [visible]);

  // Hide cursor when leaving window
  useEffect(() => {
    if (!visible) return;
    const hide = () => setVisible(false);
    const show = () => setVisible(true);
    window.addEventListener("mouseleave", hide);
    window.addEventListener("mouseenter", show);
    return () => {
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("mouseenter", show);
    };
  }, [visible]);

  if (!visible) return null;

  return createPortal(
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: trail.x - (hovered ? 24 : 14),
          top: trail.y - (hovered ? 24 : 14),
          width: hovered ? 48 : 28,
          height: hovered ? 48 : 28,
          borderRadius: "50%",
          background: hovered
            ? "radial-gradient(circle, #00bfff 60%, #0ff 100%)"
            : "radial-gradient(circle, #00bfff 60%, #222 100%)",
          boxShadow: hovered
            ? "0 0 32px 12px #00bfff88, 0 0 0 2px #0ff"
            : "0 0 16px 4px #00bfff55",
          transition: "width 0.18s, height 0.18s, box-shadow 0.18s, background 0.18s",
          mixBlendMode: "screen",
          opacity: 0.85,
        }}
      />
    </div>,
    document.body
  );
} 