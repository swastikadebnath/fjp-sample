export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 sm:px-8 border-t border-[var(--color-offwhite)]/10 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-left">
          <p className="font-display tracking-widest uppercase text-xl text-[var(--color-offwhite)]">
            Freshers Janata Party <span className="text-[var(--color-yellow)]">#FJP</span>
          </p>
          <p className="text-[var(--color-offwhite)]/50 text-sm mt-1">
            Where average is never the goal.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-[var(--color-offwhite)]/70 hover:text-[var(--color-yellow)] transition-colors">Instagram</a>
          <a href="#" className="text-[var(--color-offwhite)]/70 hover:text-[var(--color-teal)] transition-colors">LinkedIn</a>
          <a href="#" className="text-[var(--color-offwhite)]/70 hover:text-[var(--color-rust)] transition-colors">GitHub</a>
        </div>
        
        <div className="text-[var(--color-offwhite)]/40 text-sm">
          &copy; {year} #FJP Community. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
