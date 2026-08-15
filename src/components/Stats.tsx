"use client";

import { Users, Code, Calendar } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      id: 1,
      name: "Active Members",
      value: "150+",
      icon: Users,
      color: "text-[var(--color-rust)]",
    },
    {
      id: 2,
      name: "Projects Built",
      value: "20+",
      icon: Code,
      color: "text-[var(--color-teal)]",
    },
    {
      id: 3,
      name: "Upcoming Events",
      value: "4",
      icon: Calendar,
      color: "text-[var(--color-yellow)]",
    },
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
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="py-16 px-6 sm:px-8 border-y border-[var(--color-offwhite)]/10 bg-[var(--color-offwhite)]/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.dl 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.id} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bracket-corners relative"
            >
              <stat.icon className={`w-8 h-8 mb-4 ${stat.color}`} aria-hidden="true" />
              <dt className="text-lg leading-6 font-medium text-[var(--color-offwhite)]/70 uppercase tracking-widest font-display">
                {stat.name}
              </dt>
              <dd className={`mt-2 text-5xl sm:text-6xl font-display tracking-tight ${stat.color}`}>
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
