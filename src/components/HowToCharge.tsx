"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Navigation, CreditCard, Cable, Play, CheckCircle } from "lucide-react";

const steps = [
  { icon: Smartphone, title: "Скачайте приложение", desc: "Установите ЭЗС РусГидро или используйте RFID-карту" },
  { icon: Navigation, title: "Найдите станцию", desc: "Выберите свободную ЭЗС на карте" },
  { icon: CreditCard, title: "Оплатите", desc: "Привяжите карту, резерв — 300 руб." },
  { icon: Cable, title: "Подключите", desc: "CCS2, CHAdeMO или Type 2" },
  { icon: Play, title: "Зарядка", desc: "Запустите сессию в приложении" },
  { icon: CheckCircle, title: "Готово", desc: "Отключите кабель и продолжайте путь" },
];

const stores = [
  { name: "Google Play", href: "https://play.google.com/store/apps/details?id=ru.rushydro.car" },
  { name: "App Store", href: "https://apps.apple.com/ru/app/%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%B8/id6739352201" },
  { name: "RuStore", href: "https://www.rustore.ru/catalog/app/ru.rushydro.car" },
  { name: "AppGallery", href: "https://appgallery.huawei.com/app/C112693685" },
];

export default function HowToCharge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="drivers" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Steps */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-display font-bold text-2xl sm:text-3xl mb-8 dark:text-white text-rh-heading"
            >
              Как зарядиться
            </motion.h2>

            <div className="space-y-3">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors
                      dark:hover:bg-white/5 hover:bg-gray-50"
                  >
                    <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center
                      dark:bg-white/5 bg-rh-blue/5">
                      <Icon className="w-5 h-5 dark:text-blue-400 text-rh-blue" />
                    </div>
                    <div>
                      <span className="text-xs font-bold mr-2 dark:text-gray-500 text-rh-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-semibold text-sm dark:text-white text-rh-heading">
                        {step.title}
                      </span>
                      <span className="text-sm ml-1 dark:text-gray-400 text-rh-body">
                        — {step.desc}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* App + tariffs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:sticky lg:top-28 self-start"
          >
            <div className="rounded-2xl p-8 dark:bg-dark-card bg-gray-50 border dark:border-dark-border border-gray-100">
              <h3 className="font-display font-bold text-xl mb-2 dark:text-white text-rh-heading">
                Мобильное приложение
              </h3>
              <p className="text-sm mb-8 dark:text-gray-400 text-rh-body leading-relaxed">
                Находите станции, оплачивайте зарядку, отслеживайте историю и баллы Электроклуба.
              </p>

              {/* Tariffs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { price: "15", label: "быстрая зарядка" },
                  { price: "13", label: "медленная зарядка" },
                ].map((t) => (
                  <div key={t.label} className="rounded-xl p-4 text-center
                    dark:bg-dark-surface bg-white border dark:border-dark-border border-gray-100">
                    <div className="font-display font-bold text-2xl dark:text-white text-rh-blue">
                      {t.price}
                    </div>
                    <div className="text-xs dark:text-gray-500 text-rh-muted">руб/кВт·ч</div>
                    <div className="text-xs mt-1 dark:text-gray-500 text-rh-muted">{t.label}</div>
                  </div>
                ))}
              </div>

              {/* Store buttons */}
              <div className="grid grid-cols-2 gap-3">
                {stores.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 rounded-xl
                      text-sm font-medium transition-colors
                      dark:bg-dark-surface dark:border-dark-border dark:text-white dark:hover:bg-dark-border/50
                      bg-white border border-gray-200 text-rh-heading hover:bg-gray-50">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
