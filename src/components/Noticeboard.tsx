"use client";

import { motion, Variants } from "framer-motion";
import { MessageSquarePlus } from "lucide-react";

export default function Noticeboard() {
  const notices = [
    {
      id: 1,
      title: "Looking for Frontend Dev",
      content: "Building a Web3 bounty platform for the upcoming hackathon. Need someone who knows React/Next.js.",
      author: "@alex_codes",
      tag: "Hackathon",
      color: "bg-[var(--color-rust)] text-[var(--color-background)]",
      rotation: "-rotate-2",
    },
    {
      id: 2,
      title: "Help with UI Design?",
      content: "My backend works perfectly but the frontend looks like it's from 1999. Anyone willing to pair program on Figma?",
      author: "@sarah_designs",
      tag: "Help Needed",
      color: "bg-[var(--color-teal)] text-[var(--color-background)]",
      rotation: "rotate-3",
    },
    {
      id: 3,
      title: "Project Idea: Smart Campus",
      content: "Looking for hardware enthusiasts (Arduino/Raspberry Pi) to build a smart campus prototype. DM me!",
      author: "@hardware_hacker",
      tag: "LFG",
      color: "bg-[var(--color-yellow)] text-[var(--color-background)]",
      rotation: "-rotate-1",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="py-24 px-6 sm:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display uppercase tracking-tight text-[var(--color-foreground)]"
            >
              Community <span className="brush-underline text-[var(--color-yellow)]">Noticeboard</span>
            </motion.h2>
            <motion.p 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-xl text-[var(--color-foreground)]/70 max-w-xl"
            >
              Looking for a hackathon team? Need help debugging? This is where the magic happens.
            </motion.p>
          </div>
          
          <motion.a
            href="https://chat.whatsapp.com/DoBwZL9e3dWKzYZkpJkcYv?s=cl&p=a&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            className="group flex items-center gap-3 px-6 py-4 bg-[var(--color-foreground)] text-[var(--color-background)] font-display uppercase tracking-wider hover:bg-[var(--color-yellow)] transition-colors"
          >
            <MessageSquarePlus className="w-5 h-5" />
            <span>Post a Request</span>
          </motion.a>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {notices.map((notice) => (
            <motion.div 
              key={notice.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className={`${notice.color} ${notice.rotation} p-6 sm:p-8 shadow-xl relative transition-transform duration-300 ease-out`}
              style={{
                boxShadow: "8px 8px 0px rgba(0,0,0,0.2)"
              }}
            >
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[var(--color-offwhite)]/40 -rotate-3 mix-blend-overlay"></div>
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-bold uppercase tracking-wider opacity-60">
                  {notice.tag}
                </span>
                <span className="text-sm font-bold opacity-80">
                  {notice.author}
                </span>
              </div>
              <h3 className="text-2xl font-display leading-tight mb-3">
                {notice.title}
              </h3>
              <p className="opacity-90 leading-relaxed font-medium">
                {notice.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-[var(--color-foreground)]/50 text-sm italic">
            * Tap "Post a Request" to drop your message in the WhatsApp group.
          </p>
        </div>
      </div>
    </section>
  );
}
