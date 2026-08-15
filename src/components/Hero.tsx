"use client";

import { motion, Variants } from "framer-motion";
import { Code2, BookOpen, Hammer, TrendingUp } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative pt-24 pb-16 px-6 sm:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* Logo Lockup */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: -2 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1 }}
        className="mb-12 inline-block relative z-10"
      >
        <div className="bg-[var(--color-rust)] text-[var(--color-offwhite)] font-display text-4xl sm:text-6xl md:text-7xl px-4 py-2 leading-none uppercase tracking-wider inline-block shadow-[8px_8px_0_var(--color-yellow)]">
          Freshers
        </div>
        <br />
        <div className="bg-[var(--color-yellow)] text-[var(--color-background)] font-display text-4xl sm:text-6xl md:text-7xl px-4 py-2 mt-1 leading-none uppercase tracking-wider inline-block shadow-[8px_8px_0_var(--color-rust)]">
          Janata Party
        </div>
        <motion.div 
          animate={{ rotate: [6, 12, 6] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-6 -right-6 md:-right-10 bg-[var(--color-teal)] text-[var(--color-offwhite)] font-display text-xl sm:text-2xl px-3 py-1 rotate-6 shadow-[4px_4px_0_var(--color-background)] border-2 border-[var(--color-background)]"
        >
          #FJP
        </motion.div>
      </motion.div>

      {/* Headline */}
      <motion.h1 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
        className="font-display text-5xl sm:text-6xl md:text-8xl tracking-wide uppercase text-[var(--color-offwhite)] max-w-4xl leading-tight mb-8 relative z-10"
      >
        Where <span className="brush-underline text-[var(--color-yellow)]">Average</span> is Never the Goal.
      </motion.h1>

      {/* Subtext */}
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg sm:text-xl md:text-2xl text-[var(--color-offwhite)]/80 max-w-3xl mb-12 font-medium relative z-10"
      >
        This isn&apos;t just another college WhatsApp group. It&apos;s a community of builders, coders, innovators, and future leaders.
      </motion.p>

      {/* Pillars */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl relative z-10"
      >
        {[
          { icon: Code2, label: "Code", color: "text-[var(--color-rust)]" },
          { icon: BookOpen, label: "Learn", color: "text-[var(--color-yellow)]" },
          { icon: Hammer, label: "Build", color: "text-[var(--color-teal)]" },
          { icon: TrendingUp, label: "Grow", color: "text-[var(--color-dark-rust)]" },
        ].map((pillar, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center p-6 bg-[var(--color-offwhite)]/5 border border-[var(--color-offwhite)]/10 rounded-none backdrop-blur-sm hover:bg-[var(--color-offwhite)]/10 transition-colors cursor-pointer"
          >
            <pillar.icon className={`w-8 h-8 sm:w-10 sm:h-10 mb-3 ${pillar.color}`} strokeWidth={1.5} />
            <span className="font-display tracking-widest uppercase text-xl text-[var(--color-offwhite)]">{pillar.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
