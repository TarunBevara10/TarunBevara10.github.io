"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const active = theme === "system" ? systemTheme : theme;
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(active === "dark" ? "light" : "dark")}
      className="rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-1 text-xs hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {active === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
