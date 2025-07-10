import { motion, AnimatePresence } from "framer-motion";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import { useState, useCallback, useEffect, useRef } from "react";

export default function ProjectsSection({ projects }) {
  const { sectionVariants, fadeUp, fadeUpCard } = useSectionAnimation();
  const [modalProject, setModalProject] = useState(null);
  const modalRef = useRef(null);

  // Close modal on ESC
  useEffect(() => {
    if (!modalProject) return;
    const onKey = (e) => {
      if (e.key === "Escape") setModalProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalProject]);

  // Focus management for modal
  useEffect(() => {
    if (modalProject && modalRef.current) {
      modalRef.current.focus();
    }
  }, [modalProject]);

  // Modal overlay click
  const handleOverlayClick = useCallback((e) => {
    if (e.target.id === "modal-overlay") setModalProject(null);
  }, []);

  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 px-6"
    >
      <motion.div variants={fadeUp} className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl mb-6">projects</motion.h2>
        </motion.div>
        <motion.div variants={sectionVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) =>
            proj.link ? (
              <motion.a
                key={i}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUpCard}
                className="bg-black p-6 rounded-lg border border-gray-800 hover:border-white transition-all duration-300 block cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.05 }}
                aria-label={`View ${proj.title} project (opens in new tab)`}
              >
                <h3 className="text-xl mb-3 underline hover:text-blue-400 transition-colors">{proj.title}</h3>
                <p className="text-gray-300 mb-4">{proj.description}</p>
                <div className="flex gap-2">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-gray-800 text-sm rounded-full">{tag}</span>
                  ))}
                </div>
              </motion.a>
            ) : (
              <motion.button
                key={i}
                variants={fadeUpCard}
                className="bg-black p-6 rounded-lg border border-gray-800 hover:border-white transition-all duration-300 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.05 }}
                onClick={() => setModalProject(proj)}
                aria-label={`View details for ${proj.title} project`}
              >
                <h3 className="text-xl mb-3">{proj.title}</h3>
                <p className="text-gray-300 mb-4">{proj.description}</p>
                <div className="flex gap-2">
                  {proj.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-gray-800 text-sm rounded-full">{tag}</span>
                  ))}
                </div>
              </motion.button>
            )
          )}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {modalProject && (
          <motion.div
            id="modal-overlay"
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <motion.div
              ref={modalRef}
              className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative focus:outline-none"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              tabIndex={-1}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                onClick={() => setModalProject(null)}
                aria-label="Close modal"
              >
                &times;
              </button>
              <h3 id="modal-title" className="text-2xl mb-2 text-white">{modalProject.title}</h3>
              <p id="modal-description" className="text-gray-300 mb-4">{modalProject.details}</p>
              {modalProject.images && modalProject.images.length > 0 && (
                <img
                  src={modalProject.images[0]}
                  alt={`Screenshot of ${modalProject.title}`}
                  className="rounded-lg mb-4 w-full object-cover border border-gray-800"
                />
              )}
              {modalProject.stack && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {modalProject.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 text-sm rounded-full">{tech}</span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
} 