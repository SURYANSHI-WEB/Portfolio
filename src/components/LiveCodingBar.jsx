import { useEffect, useRef, useState } from "react";

const codeLines = [
  'function deployPortfolio() {',
  '  const skills = ["React", "Tailwind", "Three.js", "Vercel"]',
  '  let bugsSquashed = 42;',
  '  let caffeineLevel = "HIGH";',
  '  let deployTime = "2:00am";',
  '  // TODO: consider sleeping.',
  '}',
  'deployPortfolio();',
];

export default function LiveCodingBar() {
  const [displayed, setDisplayed] = useState([""]);
  const [progress, setProgress] = useState({ line: 0, char: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const intervalRef = useRef();

  // Reset animation if component remounts (user revisits section/page)
  useEffect(() => {
    setDisplayed([""]);
    setProgress({ line: 0, char: 0 });
    setHasAnimated(false);
  }, []);

  useEffect(() => {
    if (hasAnimated) return;
    intervalRef.current = setInterval(() => {
      setDisplayed((prev) => {
        const { line, char } = progress;
        const currentLine = codeLines[line] || "";
        if (char < currentLine.length) {
          // Add next char to current line
          const newLines = [...prev];
          newLines[line] = (newLines[line] || "") + currentLine[char];
          return newLines;
        } else if (line < codeLines.length - 1) {
          // Move to next line
          return [...prev, ""];
        } else {
          // Animation finished, keep code displayed
          setHasAnimated(true);
          clearInterval(intervalRef.current);
          return prev;
        }
      });
      setProgress(({ line, char }) => {
        const currentLine = codeLines[line] || "";
        if (char < currentLine.length) {
          return { line, char: char + 1 };
        } else if (line < codeLines.length - 1) {
          return { line: line + 1, char: 0 };
        } else {
          return { line, char };
        }
      });
    }, 40);
    return () => clearInterval(intervalRef.current);
  }, [progress, hasAnimated]);

  return (
    <section className="w-full max-w-2xl mx-auto mt-20 mb-12">
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 border-2 border-blue-700 rounded-2xl shadow-2xl p-6 relative overflow-hidden">
        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2 tracking-widest uppercase">live coding session</h3>
        <p className="text-sm md:text-base text-blue-200 mb-4 italic">watch the magic (and caffeine) happen in real time</p>
        <div className="font-mono text-green-400 text-base md:text-lg">
          {displayed.map((l, i) => (
            <div key={i} className="whitespace-pre">
              {l}
              {i === displayed.length - 1 && !hasAnimated && <span className="animate-pulse">|</span>}
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ background: "linear-gradient(180deg,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.2) 100%)" }} />
      </div>
    </section>
  );
} 