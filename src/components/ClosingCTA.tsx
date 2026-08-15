"use client";

import { motion } from "framer-motion";

export default function ClosingCTA() {
  return (
    <section className="py-24 px-6 sm:px-8 bg-gradient-to-b from-transparent to-[var(--color-rust)]/10 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="font-display text-5xl sm:text-7xl md:text-8xl tracking-widest uppercase text-[var(--color-offwhite)] leading-tight mb-8"
        >
          One Community.<br />
          <span className="text-[var(--color-yellow)]">Endless Possibilities.</span><br />
          Let&apos;s Build Our Future Together!
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-display text-2xl sm:text-3xl text-[var(--color-teal)] tracking-widest uppercase mb-12 brush-underline"
        >
          Stay Active. Stay Hungry. Stay Unstoppable.
        </motion.p>

        <motion.a 
          href="https://chat.whatsapp.com/PLACEHOLDER" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="inline-flex items-center justify-center min-h-[56px] min-w-[200px] px-10 py-5 bg-[var(--color-yellow)] text-[var(--color-background)] font-display text-3xl tracking-widest uppercase shadow-[8px_8px_0_var(--color-rust)] transition-colors hover:bg-[var(--color-offwhite)] hover:text-[var(--color-rust)]"
        >
          Join Now
        </motion.a>
      </div>
    </section>
  );
}
