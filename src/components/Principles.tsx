"use client";

import { motion, Variants } from "framer-motion";

export default function Principles() {
  const principles = [
    {
      text: "There are no shortcuts here. Only consistency, discipline & relentless growth.",
      accent: "bg-[var(--color-rust)]",
    },
    {
      text: "If you're ready to challenge yourself, support your peers, and become the best version of yourself...",
      accent: "bg-[var(--color-yellow)]",
    },
    {
      text: "We don't compete with others. We outgrow who we were yesterday.",
      accent: "bg-[var(--color-teal)]",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      <h2 className="sr-only">Our Principles</h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
      >
        {principles.map((principle, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="relative p-8 bg-[var(--color-background)] border border-[var(--color-offwhite)]/10 shadow-xl group hover:-translate-y-2 transition-transform duration-300"
          >
            <div className={`absolute top-0 left-0 w-full h-2 ${principle.accent}`}></div>
            <div className="absolute -top-4 -left-4 font-display text-7xl text-[var(--color-offwhite)]/5 select-none pointer-events-none group-hover:text-[var(--color-offwhite)]/10 transition-colors">
              0{idx + 1}
            </div>
            <p className="relative z-10 text-xl md:text-2xl font-medium leading-relaxed text-[var(--color-offwhite)]/90 mt-4">
              "{principle.text}"
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
