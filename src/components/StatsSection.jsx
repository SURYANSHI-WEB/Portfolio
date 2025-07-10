import { motion } from "framer-motion";
import { useSectionAnimation } from "../hooks/useSectionAnimation";

export default function StatsSection({ stats }) {
  const { fadeUp } = useSectionAnimation();
  
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-16 px-6 bg-gray-900/50"
    >
      <motion.div variants={fadeUp} className="max-w-4xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl mb-4">achievements</motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-400">the numbers that matter (mostly to me)</motion.p>
        </motion.div>
        <motion.div 
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
} 