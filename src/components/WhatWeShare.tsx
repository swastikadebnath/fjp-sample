import { Share2 } from "lucide-react";

export default function WhatWeShare() {
  return (
    <section className="py-20 px-6 sm:px-8 max-w-4xl mx-auto text-center">
      <div className="flex justify-center mb-8">
        <div className="p-4 bg-[var(--color-rust)]/20 rounded-full inline-block">
          <Share2 className="w-10 h-10 text-[var(--color-yellow)]" />
        </div>
      </div>
      
      <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-widest text-[var(--color-rust)] mb-6">
        What We Share
      </h3>
      
      <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed font-medium text-[var(--color-offwhite)]/90">
        Here, we&apos;ll share <span className="text-[var(--color-yellow)]">opportunities</span>, <span className="text-[var(--color-teal)]">internships</span>, coding resources, roadmaps, contest updates, interview preparation, open-source contributions, and everything you need to become <span className="brush-underline text-[var(--color-offwhite)]">industry-ready</span>.
      </p>
    </section>
  );
}
