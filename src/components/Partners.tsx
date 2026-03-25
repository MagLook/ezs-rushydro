"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPinPlus, Wrench, BarChart3, Fuel, ArrowRight } from "lucide-react";

const items = [
  { icon: MapPinPlus, title: "Предложить место", desc: "Площадка для установки ЭЗС" },
  { icon: Fuel, title: "Топливным сетям", desc: "Интеграция АЗС в единую карту" },
  { icon: Wrench, title: "Подрядчикам", desc: "Сервис, строительство, проектирование" },
  { icon: BarChart3, title: "Инвесторам", desc: "Отчётность, собрания акционеров" },
];

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="partners" className="py-20 dark:bg-dark-card/50 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="font-display font-bold text-2xl sm:text-3xl mb-3 dark:text-white text-rh-heading"
        >
          Партнёрам
        </motion.h2>
        <p className="mb-10 dark:text-gray-400 text-rh-body max-w-xl">
          Развивайте зарядную и топливную инфраструктуру вместе с крупнейшим энергетическим холдингом
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href="#contacts"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-2xl transition-colors
                  dark:bg-dark-surface dark:hover:bg-dark-border/50
                  bg-white hover:bg-white shadow-sm dark:shadow-none"
              >
                <Icon className="w-6 h-6 mb-4 dark:text-blue-400 text-rh-blue" />
                <h3 className="font-display font-semibold text-base mb-1
                  dark:text-white text-rh-heading">{item.title}</h3>
                <p className="text-sm mb-4 dark:text-gray-400 text-rh-body">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium
                  dark:text-blue-400 text-rh-blue group-hover:gap-2 transition-all">
                  Подробнее <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
