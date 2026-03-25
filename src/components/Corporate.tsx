"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, CreditCard } from "lucide-react";

export default function Corporate() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="corporate" className="px-8 mb-32" ref={ref}>
      <div className="max-w-screen-2xl mx-auto bg-inverse-surface dark:bg-dark-card
        rounded-[2rem] p-10 sm:p-16 lg:p-20 relative overflow-hidden text-inverse-on-surface">

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <span className="font-body text-secondary dark:text-blue-400
              uppercase tracking-[0.2em] font-bold text-sm mb-5 block">
              Решения для бизнеса
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-[2.8rem] mb-8 leading-tight">
              Масштабируйте бизнес с{" "}
              <span className="text-tertiary-fixed-dim">нулевыми выбросами</span>
            </h2>

            <ul className="space-y-6 mb-10">
              {[
                { Icon: CheckCircle, title: "Соответствие 223-ФЗ", desc: "Полная прозрачность для госзакупок и корпоративных тендеров." },
                { Icon: CreditCard, title: "Корпоративные RFID-карты", desc: "Централизованный биллинг и управление автопарком." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <item.Icon className="w-6 h-6 text-tertiary-fixed-dim mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-headline text-lg mb-1">{item.title}</div>
                    <p className="font-body text-sm text-gray-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button className="bg-white text-primary px-10 py-4 rounded-[14px]
              font-body font-bold hover:bg-gray-100 transition-all active:scale-95">
              Запросить предложение
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            <div className="aspect-video bg-white/5 rounded-[1.5rem] border border-white/10
              backdrop-blur-sm p-8">
              <div className="flex justify-between items-center mb-8">
                <div className="font-headline text-sm">Обзор дашборда</div>
                <div className="w-8 h-8 rounded-full bg-secondary" />
              </div>
              <div className="space-y-5">
                <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-tertiary-fixed-dim rounded-full" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-16 bg-white/5 rounded-[12px]" />
                  <div className="h-16 bg-white/5 rounded-[12px]" />
                  <div className="h-16 bg-white/5 rounded-[12px]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] -z-0" />
      </div>
    </section>
  );
}
