// src/hooks/useSectionAnimation.js

export function useSectionAnimation() {
  const sectionVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const fadeUpCard = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  return { sectionVariants, fadeUp, fadeUpCard };
} 