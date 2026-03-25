"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const nav = [
  { label: "Сеть", href: "#map" },
  { label: "Тарифы", href: "#drivers" },
  { label: "Бизнесу", href: "#corporate" },
  { label: "Электроклуб", href: "#electroclub" },
  { label: "Новости", href: "#news" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#map");

  return (
    <nav className="fixed top-0 w-full z-50 shadow-ambient
      bg-white dark:bg-dark-bg border-b border-outline-variant/10 dark:border-dark-border">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1">
          <Logo className="h-12 w-auto" />
          <span className="text-[1.5rem] font-extrabold tracking-tight font-headline
            dark:text-white text-primary">РусГидро</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <a key={item.href} href={item.href}
              onClick={() => setActive(item.href)}
              className={`py-1 transition-all duration-300 text-sm font-medium
                ${active === item.href
                  ? "text-primary dark:text-blue-400 font-semibold border-b-2 border-primary dark:border-blue-400"
                  : "dark:text-gray-400 text-on-surface-variant hover:text-primary dark:hover:text-white"}`}>
              {item.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="#contacts"
            className="hidden sm:block kinetic-gradient text-on-primary px-6 py-2.5 rounded-[12px]
              font-body font-semibold text-sm hover:shadow-lg hover:shadow-primary/20
              transition-all duration-300 active:scale-95">
            Контакты
          </a>
          <button onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center
              hover:bg-surface-container dark:hover:bg-white/10">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden dark:bg-dark-bg/95 bg-white/95 backdrop-blur-xl">
            <div className="px-8 py-4 space-y-1">
              {nav.map((item) => (
                <a key={item.href} href={item.href}
                  onClick={() => { setOpen(false); setActive(item.href); }}
                  className="block py-3 text-base font-medium
                    dark:text-gray-300 text-on-surface-variant hover:text-primary">
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
