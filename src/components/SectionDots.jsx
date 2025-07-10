import { useEffect, useState } from "react";

const sections = ["about", "projects", "contact"];

export default function SectionDots() {
  const [current, setCurrent] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      let found = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            found = id;
          }
        }
      }
      setCurrent(found);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50"
      role="navigation"
      aria-label="Section navigation"
    >
      {sections.map(sec => (
        <button
          key={sec}
          aria-label={`Go to ${sec} section`}
          aria-current={current === sec ? "page" : undefined}
          onClick={() => {
            const el = document.getElementById(sec);
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className={`w-3 h-3 rounded-full border-2 border-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black ${
            current === sec ? "bg-white border-white scale-125" : "bg-gray-700"
          }`}
        />
      ))}
    </nav>
  );
} 