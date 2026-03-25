"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BatteryCharging, Cable, Plug, CreditCard, ShoppingBag, ArrowRight } from "lucide-react";

const products = [
  {
    icon: BatteryCharging,
    title: "Домашние зарядные станции",
    desc: "Медленная зарядка 7–22 кВт для дома и гаража. Установка под ключ.",
    price: "от 45 000 ₽",
    tag: "Хит",
  },
  {
    icon: Plug,
    title: "Портативные зарядки",
    desc: "Компактные зарядные устройства для розетки 220В. Всегда с собой.",
    price: "от 12 000 ₽",
    tag: null,
  },
  {
    icon: Cable,
    title: "Кабели и адаптеры",
    desc: "Type 2, CCS2, CHAdeMO — переходники и удлинители для любого разъёма.",
    price: "от 3 500 ₽",
    tag: null,
  },
  {
    icon: CreditCard,
    title: "RFID-карты и стикеры",
    desc: "Корпоративные и персональные карты для быстрой авторизации на ЭЗС.",
    price: "от 500 ₽",
    tag: "Новинка",
  },
];

export default function Shop() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="shop" className="px-8 mb-32" ref={ref}>
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="font-headline text-3xl sm:text-4xl mb-3 dark:text-white">
              <span className="text-tertiary dark:text-tertiary-fixed-dim">Магазин</span> оборудования
            </h2>
            <p className="font-body text-on-surface-variant dark:text-gray-400 max-w-lg">
              Всё для зарядки вашего электромобиля — от домашних станций до кабелей и аксессуаров
            </p>
          </motion.div>
          <a href="#" className="text-primary dark:text-blue-400 font-headline font-bold
            flex items-center gap-2 hover:gap-3 transition-all text-sm whitespace-nowrap">
            Весь каталог
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="bg-surface-container-lowest dark:bg-dark-card
                  p-8 rounded-[2rem] shadow-ambient dark:shadow-none
                  hover:-translate-y-2 transition-transform duration-300 group
                  flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-[12px] flex items-center justify-center
                    bg-surface-container dark:bg-dark-surface
                    text-primary dark:text-blue-400
                    group-hover:bg-primary group-hover:text-on-primary
                    dark:group-hover:bg-blue-600 dark:group-hover:text-white
                    transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  {item.tag && (
                    <span className="text-[10px] font-bold uppercase tracking-wider
                      px-2.5 py-1 rounded-[8px]
                      bg-tertiary-fixed-dim/20 text-tertiary dark:text-tertiary-fixed-dim">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-headline text-base mb-2 dark:text-white">{item.title}</h3>
                <p className="font-body text-on-surface-variant dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-headline text-lg text-primary dark:text-blue-400">
                    {item.price}
                  </span>
                  <button className="w-9 h-9 rounded-[10px] flex items-center justify-center
                    bg-surface-container dark:bg-dark-surface
                    hover:bg-primary hover:text-white
                    dark:hover:bg-blue-600 transition-colors duration-200">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
