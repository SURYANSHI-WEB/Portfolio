import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

// Add Google Fonts import for Orbitron
const orbitronFont = {
  fontFamily: "'Orbitron', sans-serif",
  letterSpacing: "0.1em",
  fontWeight: 700,
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to scroll to section after navigation
  const handleNavSection = (id) => (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // Wait for navigation, then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to hero section (top) from anywhere
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Inject Google Fonts link for Orbitron
  useEffect(() => {
    if (!document.getElementById('orbitron-font')) {
      const link = document.createElement('link');
      link.id = 'orbitron-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isScrolled ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: "rgba(0,0,0,0.8)",
        backdropFilter: isScrolled ? "blur(16px)" : "blur(8px)",
        borderBottom: "1px solid #27272a"
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <motion.div
        animate={{ paddingTop: isScrolled ? 8 : 16, paddingBottom: isScrolled ? 8 : 16 }}
        transition={{ duration: 0.3 }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="flex justify-between items-center">
          <motion.a
            href="#"
            className="text-xl font-bold text-white hover:text-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded"
            whileHover={{ scale: 1.05 }}
            aria-label="Go to top of page"
            style={orbitronFont}
            onClick={handleLogoClick}
            title="Back to the top (hero section)"
          >
            SSS
          </motion.a>
          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Section navigation">
            <NavSectionLink onClick={handleNavSection("about")} title="Meet the human behind the code">About</NavSectionLink>
            <NavSectionLink onClick={handleNavSection("projects")} title="See what I’ve been building at 2am">Projects</NavSectionLink>
            <Link 
              to="/resume" 
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
              aria-label="View resume"
              title="My secret identity (a.k.a. my resume)"
            >
              Resume
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <NavSectionLink onClick={handleNavSection("contact")} title="Coffee strong?">Contact</NavSectionLink>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded p-1"
              aria-label="Open mobile menu"
              aria-expanded={mobileOpen}
              title="Open navigation menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile nav overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center md:hidden transition-all">
            <button
              className="absolute top-6 right-6 text-white text-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded"
              aria-label="Close mobile menu"
              onClick={() => setMobileOpen(false)}
            >
              &times;
            </button>
            <nav className="flex flex-col gap-8 text-2xl text-white font-bold items-center" role="navigation" aria-label="Mobile navigation">
              <button onClick={e => { setMobileOpen(false); handleNavSection("about")(e); }} className="hover:text-blue-400 transition-colors">About</button>
              <button onClick={e => { setMobileOpen(false); handleNavSection("projects")(e); }} className="hover:text-blue-400 transition-colors">Projects</button>
              <Link to="/resume" onClick={() => setMobileOpen(false)} className="hover:text-blue-400 transition-colors">Resume</Link>
              <button onClick={e => { setMobileOpen(false); handleNavSection("contact")(e); }} className="hover:text-blue-400 transition-colors">Contact</button>
            </nav>
          </div>
        )}
      </motion.div>
    </motion.nav>
  );
}

function NavSectionLink({ onClick, children, title }) {
  return (
    <motion.a
      href="#"
      onClick={onClick}
      className="text-gray-300 hover:text-white transition-colors duration-300 relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
      whileHover={{ scale: 1.05 }}
      aria-label={`Navigate to ${children.toLowerCase()} section`}
      title={title}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
    </motion.a>
  );
}

export default Navbar;
