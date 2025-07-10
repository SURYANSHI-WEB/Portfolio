import { motion } from "framer-motion";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
import ContactForm from "./ContactForm";

export default function ContactSection({ contact }) {
  const { fadeUp } = useSectionAnimation();
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 px-6"
    >
      <motion.div variants={fadeUp} className="max-w-4xl mx-auto text-center">
        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl mb-6">contact</motion.h2>
        <motion.p variants={fadeUp} className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          inbox open. coffee ready.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-6">
          <ContactForm />
          <div className="flex gap-4 mt-6 justify-center">
            <motion.a 
              href={contact.github}
              className="text-gray-400 hover:text-white transition-colors duration-300 relative group flex items-center gap-1"
              whileHover={{ scale: 1.07 }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
              github
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
            <motion.a 
              href={contact.linkedin}
              className="text-gray-400 hover:text-white transition-colors duration-300 relative group flex items-center gap-1"
              whileHover={{ scale: 1.07 }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z"/></svg>
              linkedin
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
            {contact.twitter && (
              <motion.a
                href={contact.twitter}
                className="text-gray-400 hover:text-white transition-colors duration-300 relative group flex items-center gap-1"
                whileHover={{ scale: 1.07 }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
              >
                <svg className="w-5 h-5 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 6.477h3.181l-6.953 7.965 8.188 9.058h-6.453l-5.07-5.617-5.8 5.617h-3.19l7.41-8.19-7.98-8.833h6.47l4.36 4.83 4.84-4.83zm-1.13 15.523h2.19l-6.29-6.95-2.19 2.05 6.29 6.9zm-8.4-7.9l-5.29-5.85h2.19l5.29 5.85-2.19 2.05zm3.19-2.95l2.19-2.05-5.29-5.85h-2.19l5.29 5.85zm8.4-7.9l-6.29 6.95 2.19 2.05 6.29-6.95h-2.19z"/></svg>
                x
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
} 