import { motion } from "framer-motion";
import { useSectionAnimation } from "../hooks/useSectionAnimation";
// import KineticTitle from "./KineticTitle";

export default function AboutSection({ about, skills, certs, aboutImgRef }) {
  const { fadeUp } = useSectionAnimation();
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 px-6"
    >
      <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl mb-6">about</motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {about.intro}
          </motion.p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image on the left with parallax */}
          <motion.div
            ref={aboutImgRef}
            variants={fadeUp}
            className="flex justify-center"
          >
            <img
              src={about.image}
              alt="Suryanshi Singh portrait"
              className="rounded-3xl shadow-lg w-64 h-80 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] object-cover border-4 border-gray-800"
            />
          </motion.div>
          {/* About content on the right */}
          <div className="space-y-12">
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl mb-4">skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full text-sm font-semibold shadow-md hover:scale-105 hover:from-pink-600 hover:to-yellow-500 transition-transform duration-300 cursor-pointer"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.04, type: "spring", stiffness: 200 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl mb-4">certs</h3>
              <ul className="relative border-l-2 border-blue-700 ml-4">
                {certs.map((cert, i) => (
                  <motion.li
                    key={i}
                    className="mb-6 ml-6 text-gray-200 flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.03, duration: 0.3 }}
                  >
                    <span className="w-3 h-3 bg-blue-700 rounded-full absolute -left-1.5 border-2 border-white"></span>
                    <span className="text-base font-medium">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
} 