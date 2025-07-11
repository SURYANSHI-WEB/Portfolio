import { useEffect, useRef, useState } from "react";

const codeLines = [
  'const greet = name => `Hello, ${name}!`;',
  'let bugsKilled = 42;',
  'let linesOfCode = 123456;',
  'let coffeeCups = 314;',
  'let nightsSkipped = 27;',
  'console.log(greet("World"));',
  '// TODO: consider sleeping. or not. coffee exists for a reason.',
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
    <div className="w-full max-w-2xl mx-auto bg-black border border-gray-800 rounded-xl shadow-lg p-4 mt-12 mb-8 font-mono text-green-400 text-base md:text-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ background: "linear-gradient(180deg,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.2) 100%)" }} />
      {displayed.map((l, i) => (
        <div key={i} className="whitespace-pre">
          {l}
          {i === displayed.length - 1 && !hasAnimated && <span className="animate-pulse">|</span>}
        </div>
      ))}
    </div>
  );
} 