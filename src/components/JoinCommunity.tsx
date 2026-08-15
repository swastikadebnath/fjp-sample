"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function JoinCommunity() {
  return (
    <section className="py-24 px-6 sm:px-8 bg-[var(--color-rust)]/10 border-y border-[var(--color-rust)]/30 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-6xl tracking-wide uppercase text-[var(--color-offwhite)] mb-12"
        >
          Join Our <span className="text-[var(--color-yellow)]">Community!</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full">
          {/* QR Code Frame */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bracket-corners p-4 inline-block bg-[var(--color-background)]"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 bg-white p-2">
              <Image 
                src="/qr-code.png" 
                alt="WhatsApp Group QR Code"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 192px, 224px"
              />
            </div>
          </motion.div>
          
          {/* CTA Button and Caption */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
          >
            <motion.a 
              href="https://chat.whatsapp.com/PLACEHOLDER" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center min-h-[56px] min-w-[200px] px-8 py-4 bg-[var(--color-yellow)] text-[var(--color-background)] font-display text-2xl tracking-widest uppercase shadow-[6px_6px_0_var(--color-rust)] transition-colors hover:bg-[var(--color-offwhite)] hover:text-[var(--color-rust)]"
            >
              Join Now
            </motion.a>
            
            <p className="text-[var(--color-offwhite)]/80 text-lg max-w-xs">
              Scan or tap to join — free, instant, no login needed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
