"use client";

import { Trophy, GraduationCap, Briefcase, Cpu, Users, Flame } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Mission() {
  const missions = [
    { icon: Trophy, text: "Crack Hackathons" },
    { icon: GraduationCap, text: "Excel in Academics" },
    { icon: Briefcase, text: "Build Real-World Projects" },
    { icon: Cpu, text: "Learn New Technologies" },
    { icon: Users, text: "Network & Grow Together" },
    { icon: Flame, text: "Push Beyond Your Comfort Zone" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-[var(--color-offwhite)] inline-block relative"
        >
          Our Mission
          <span className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-[var(--color-teal)] rounded-full"></span>
        </motion.h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {missions.map((mission, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.03, x: 5 }}
            className="flex items-start p-6 bg-[var(--color-offwhite)]/5 border-l-4 border-[var(--color-rust)] rounded-r-lg hover:bg-[var(--color-offwhite)]/10 transition-colors"
          >
            <div className="flex-shrink-0 mr-4 mt-1">
              <mission.icon className="w-6 h-6 text-[var(--color-yellow)]" />
            </div>
            <p className="text-lg font-medium text-[var(--color-offwhite)]">
              {mission.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
