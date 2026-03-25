"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Cable, MapPin, ShieldCheck } from "lucide-react";

const items = [
  { icon: Zap, title: "Быстрая зарядка", text: "Станции мощностью до 150 кВт — возвращение в путь за считанные минуты." },
  { icon: Cable, title: "Все стандарты", text: "CCS2, CHAdeMO и Type 2 — на каждой станции для любого электромобиля." },
  { icon: MapPin, title: "Удобные локации", text: "Стратегическое расположение на трассах, у ТРЦ и бизнес-центров." },
  { icon: ShieldCheck, title: "Безопасность", text: "Круглосуточный мониторинг и защита высшего класса для вашего авто." },
];

export default function Advantages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-8 mb-32" ref={ref}>
      <div className="max-w-screen-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-headline text-3xl sm:text-4xl mb-14 dark:text-white"
        >
          Создано для <span className="text-secondary dark:text-blue-400">эффективности</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="bg-surface-container-lowest dark:bg-dark-card
                  p-9 rounded-[2rem] shadow-ambient dark:shadow-none
                  hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-14 h-14 rounded-[14px] mb-7 flex items-center justify-center
                  bg-surface-container dark:bg-dark-surface
                  text-primary dark:text-blue-400
                  group-hover:bg-primary group-hover:text-on-primary
                  dark:group-hover:bg-blue-600 dark:group-hover:text-white
                  transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-lg mb-3 dark:text-white">{item.title}</h3>
                <p className="font-body text-on-surface-variant dark:text-gray-400 leading-relaxed text-sm">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
