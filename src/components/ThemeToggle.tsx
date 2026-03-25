"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-on-surface-variant dark:text-gray-400
        hover:bg-surface-container-high dark:hover:bg-white/10
        p-2 rounded-full transition-all duration-300 active:scale-95"
      aria-label="Переключить тему"
    >
      {theme === "dark"
        ? <Sun className="w-5 h-5 text-amber-400" />
        : <Moon className="w-5 h-5" />}
    </button>
  );
}
