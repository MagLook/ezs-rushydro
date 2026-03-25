"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Car, Star, Diamond } from "lucide-react";

const levels = [
  { level: "01", name: "Старт", pct: "3%", desc: "Кешбэк за каждый кВт·ч на станциях РусГидро.", Icon: Rocket, bg: "bg-surface-container-low dark:bg-dark-card" },
  { level: "02", name: "Актив", pct: "5%", desc: "От 200 кВт·ч/мес. Скидки у партнёров.", Icon: Car, bg: "bg-surface-container-high dark:bg-dark-surface" },
  { level: "03", name: "Премиум", pct: "8%", desc: "От 500 кВт·ч/мес. Бесплатный кофе на хабах.", Icon: Star, bg: "kinetic-gradient text-on-primary ring-4 ring-primary/10 dark:ring-blue-500/20 scale-105 shadow-2xl" },
  { level: "04", name: "VIP", pct: "12%", desc: "Персональный менеджер. Приоритетная бронь.", Icon: Diamond, bg: "bg-surface-container-low dark:bg-dark-card" },
];

export default function Electroclub() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="electroclub" className="px-8 mb-32" ref={ref}>
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-3xl sm:text-4xl mb-4 dark:text-white">
            Бонусы <span className="text-tertiary dark:text-tertiary-fixed-dim">Электроклуба</span>
          </h2>
          <p className="font-body text-on-surface-variant dark:text-gray-400 text-lg">
            Больше заряжаете — больше экономите. Присоединяйтесь к экосистеме.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {levels.map((lvl, i) => {
            const isPremium = i === 2;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className={`p-9 rounded-[2rem] relative overflow-hidden group ${lvl.bg}`}
              >
                <div className="relative z-10">
                  <div className={`font-headline text-xs tracking-[0.15em] uppercase mb-2
                    ${isPremium ? "text-on-primary/60" : "text-on-surface-variant dark:text-gray-500"}`}>
                    Уровень {lvl.level}
                  </div>
                  <h3 className={`font-headline text-xl mb-7
                    ${isPremium ? "" : "dark:text-white"}`}>{lvl.name}</h3>
                  <div className={`text-5xl font-headline mb-4
                    ${isPremium ? "text-tertiary-fixed-dim" : "text-primary dark:text-blue-400"}`}>
                    {lvl.pct}
                  </div>
                  <p className={`font-body text-sm leading-relaxed
                    ${isPremium ? "text-on-primary/80" : "text-on-surface-variant dark:text-gray-400"}`}>
                    {lvl.desc}
                  </p>
                </div>
                <div className="absolute -right-3 -bottom-3 opacity-5 dark:opacity-10
                  group-hover:scale-110 transition-transform duration-300">
                  <lvl.Icon className="w-28 h-28" strokeWidth={0.8} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
