"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Fuel, Droplets, ParkingSquare, ArrowRight } from "lucide-react";

const directions = [
  {
    icon: Fuel,
    title: "Заправка топливом",
    desc: "Бензин, дизель, газ на 2000+ партнёрских АЗС по всей России. Единая карта, оплата через приложение, кешбэк Электроклуба.",
    stats: "2 000+ АЗС",
    cta: "Найти АЗС",
    gradient: "from-amber-500 to-orange-600",
    bg: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10",
    iconBg: "bg-amber-500",
  },
  {
    icon: Droplets,
    title: "Автомойки",
    desc: "Партнёрская сеть автомоек рядом с зарядными станциями. До 20% скидка для участников Электроклуба. Запись через приложение.",
    stats: "500+ моек",
    cta: "Найти мойку",
    gradient: "from-blue-500 to-cyan-600",
    bg: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10",
    iconBg: "bg-blue-500",
  },
  {
    icon: ParkingSquare,
    title: "Парковки",
    desc: "Бесплатная парковка на время зарядки на всех станциях. Охраняемые площадки, видеонаблюдение, зоны отдыха и Wi-Fi на хабах.",
    stats: "Бесплатно",
    cta: "Подробнее",
    gradient: "from-violet-500 to-indigo-600",
    bg: "bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/10",
    iconBg: "bg-violet-500",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="px-8 mb-32" ref={ref}>
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.15em] mb-3
            text-secondary dark:text-blue-400">Экосистема для автомобилистов</p>
          <h2 className="font-headline text-3xl sm:text-4xl dark:text-white">
            Не только <span className="text-secondary dark:text-blue-400">зарядка</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {directions.map((dir, i) => {
            const Icon = dir.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-[2rem] p-9 overflow-hidden group
                  cursor-pointer transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl
                  ${dir.bg}`}
              >
                {/* Large background icon */}
                <div className="absolute -right-6 -bottom-6 opacity-[0.06] dark:opacity-[0.08]
                  group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-48 h-48" strokeWidth={0.7} />
                </div>

                <div className="relative z-10">
                  {/* Icon + badge */}
                  <div className="flex items-center justify-between mb-7">
                    <div className={`w-14 h-14 rounded-2xl ${dir.iconBg}
                      flex items-center justify-center shadow-lg shadow-black/10`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="font-headline text-sm font-bold
                      text-on-surface dark:text-white
                      bg-white/60 dark:bg-white/10 backdrop-blur-sm
                      px-4 py-1.5 rounded-full">
                      {dir.stats}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-headline text-2xl mb-3 dark:text-white text-on-surface">
                    {dir.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant dark:text-gray-300
                    leading-relaxed mb-8">
                    {dir.desc}
                  </p>

                  {/* CTA */}
                  <a href="#" className="inline-flex items-center gap-2
                    font-headline font-bold text-sm
                    text-on-surface dark:text-white
                    group-hover:gap-3 transition-all">
                    {dir.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
