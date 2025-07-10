import { motion } from "framer-motion";
import { useRef } from "react";
import { projects, skills, certs, about, contact, stats } from "../data";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import StatsSection from "../components/StatsSection";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import SectionDots from "../components/SectionDots";

// Parallax helper
function useParallax(offset = 40) {
  const ref = useRef();
  const handleScroll = () => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const y = rect.top / window.innerHeight;
    ref.current.style.transform = `translateY(${y * offset}px)`;
  };
  return [ref, handleScroll];
}

export default function Home() {
  // Parallax for hero and about image
  const [heroRef, heroScroll] = useParallax(60);
  const [aboutImgRef, aboutImgScroll] = useParallax(30);
  // Attach scroll listeners
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      heroScroll();
      aboutImgScroll();
    };
  }

  // Animation variants from custom hook
  const { sectionVariants, fadeUp, fadeUpCard } = useSectionAnimation();

  return (
    <>
      <SectionDots />
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section with parallax */}
        <motion.section
          ref={heroRef}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden"
        >
          <motion.div variants={fadeUp} className="text-center max-w-4xl mx-auto">
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
              Suryanshi Singh
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-400 font-light">
              code. coffee. repeat.
            </motion.p>
          </motion.div>
          <motion.div variants={fadeUp} className="mb-12">
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 max-w-xl md:max-w-none mx-auto leading-relaxed md:whitespace-nowrap">
              computer science engineer. i build, deploy, and sometimes break things (on purpose).
            </motion.p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 relative group"
              whileHover={{ scale: 1.07 }}
            >
              projects
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
            <motion.a
              href="#contact"
              className="border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 relative group"
              whileHover={{ scale: 1.07 }}
            >
              contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <StatsSection stats={stats} />

        {/* About Section */}
        <AboutSection about={about} skills={skills} certs={certs} aboutImgRef={aboutImgRef} fadeUp={fadeUp} />

        {/* Projects Section */}
        <ProjectsSection projects={projects} sectionVariants={sectionVariants} fadeUp={fadeUp} fadeUpCard={fadeUpCard} />

        {/* Contact Section */}
        <ContactSection contact={contact} fadeUp={fadeUp} />
      </main>
    </>
  );
}
