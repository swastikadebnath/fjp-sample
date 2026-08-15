"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--color-offwhite)]/20">
        <span className="sr-only">Toggle theme</span>
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--color-offwhite)]/20 bg-[var(--color-background)] hover:bg-[var(--color-offwhite)]/10 transition-colors text-[var(--color-offwhite)]"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-[var(--color-yellow)]" />
      ) : (
        <Moon className="w-5 h-5 text-[var(--color-teal)]" />
      )}
    </button>
  );
}
