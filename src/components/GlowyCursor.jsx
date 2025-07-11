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
  const [isTouching, setIsTouching] = useState(false);
  const requestRef = useRef();
  const cursorRef = useRef();

  // Show on all devices now
  useEffect(() => {
    setVisible(true);
  }, []);

  // Mouse move and trail (desktop)
  useEffect(() => {
    if (!visible || isTouchDevice()) return;
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [visible]);

  // Touch events (mobile)
  useEffect(() => {
    if (!visible || !isTouchDevice()) return;
    
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      setPos({ x: touch.clientX, y: touch.clientY });
      setIsTouching(true);
    };
    
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      setPos({ x: touch.clientX, y: touch.clientY });
    };
    
    const handleTouchEnd = () => {
      setIsTouching(false);
    };
    
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [visible]);

  // Animate trailing effect
  useEffect(() => {
    if (!visible) return;
    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * (isTouchDevice() ? 0.3 : 0.18),
        y: prev.y + (pos.y - prev.y) * (isTouchDevice() ? 0.3 : 0.18),
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [pos, visible]);

  // Hover detection for clickable elements (desktop only)
  useEffect(() => {
    if (!visible || isTouchDevice()) return;
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

  // Hide cursor when leaving window (desktop only)
  useEffect(() => {
    if (!visible || isTouchDevice()) return;
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

  const isMobile = isTouchDevice();
  const baseSize = isMobile ? 20 : 28;
  const hoverSize = isMobile ? 32 : 48;
  const currentSize = (isMobile && isTouching) || hovered ? hoverSize : baseSize;

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
          left: trail.x - currentSize / 2,
          top: trail.y - currentSize / 2,
          width: currentSize,
          height: currentSize,
          borderRadius: "50%",
          background: (isMobile && isTouching) || hovered
            ? "radial-gradient(circle, #00bfff 60%, #0ff 100%)"
            : "radial-gradient(circle, #00bfff 60%, #222 100%)",
          boxShadow: (isMobile && isTouching) || hovered
            ? "0 0 32px 12px #00bfff88, 0 0 0 2px #0ff"
            : "0 0 16px 4px #00bfff55",
          transition: "width 0.18s, height 0.18s, box-shadow 0.18s, background 0.18s",
          mixBlendMode: "screen",
          opacity: isMobile ? 0.7 : 0.85,
        }}
      />
    </div>,
    document.body
  );
} 