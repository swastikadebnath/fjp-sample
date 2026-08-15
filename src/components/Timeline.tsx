"use client";

import { motion, Variants } from "framer-motion";

// TODO: replace with real event data
const events: { date: string; title: string; description: string }[] = [
  {
    date: "Sep 15",
    title: "Hackathon Prep Session",
    description: "Learn how to brainstorm, build, and pitch in 24 hours.",
  },
  {
    date: "Oct 05",
    title: "Open Source Sprint",
    description: "First PRs, navigating large codebases, and giving back.",
  },
  {
    date: "Oct 20",
    title: "Resume & Interview Workshop",
    description: "Mock interviews and resume roasts by seniors.",
  },
  {
    date: "Nov 10",
    title: "Project Showcase Night",
    description: "Demo what you've built this semester.",
  },
];

export default function Timeline() {
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
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-[var(--color-offwhite)] inline-block relative"
        >
          Upcoming Events
          <span className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-[var(--color-yellow)] rounded-full"></span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Desktop Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
          className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[var(--color-yellow)] -translate-y-1/2 rounded-full"
        ></motion.div>
        
        {/* Mobile Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
          className="md:hidden absolute top-0 bottom-0 left-6 w-1 bg-[var(--color-yellow)] rounded-full"
        ></motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10"
        >
          {events.map((event, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative flex md:flex-col items-start md:items-center pl-16 md:pl-0 cursor-default"
            >
              {/* Mobile Timeline Node */}
              <div className="md:hidden absolute left-[1.1rem] top-2 w-4 h-4 rounded-full bg-[var(--color-background)] border-4 border-[var(--color-yellow)]"></div>
              
              {/* Desktop Timeline Node */}
              <div className="hidden md:block w-5 h-5 rounded-full bg-[var(--color-background)] border-4 border-[var(--color-yellow)] mb-6 shadow-[0_0_0_4px_var(--color-background)] transition-transform hover:scale-125"></div>
              
              <div className="bg-[var(--color-offwhite)]/5 p-6 border-t-2 border-[var(--color-rust)] w-full text-left md:text-center hover:bg-[var(--color-offwhite)]/10 transition-colors backdrop-blur-sm">
                <span className="inline-block text-[var(--color-teal)] font-display tracking-widest uppercase mb-2">
                  {event.date}
                </span>
                <h4 className="text-xl font-bold text-[var(--color-offwhite)] mb-2">
                  {event.title}
                </h4>
                <p className="text-[var(--color-offwhite)]/70">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
