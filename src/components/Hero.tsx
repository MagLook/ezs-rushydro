"use client";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative pt-36 pb-24 px-8 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-headline text-[2rem] sm:text-[3rem] lg:text-[4rem] leading-[1.1]
              tracking-tighter mb-8 dark:text-white text-on-surface"
          >
            Заряжаем{" "}
            <span className="text-secondary dark:text-blue-400 italic">Россию</span>
            <br />
            <span className="text-[0.65em]">От Калининграда до Владивостока</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl max-w-xl mb-12 leading-relaxed
              text-on-surface-variant dark:text-gray-400"
          >
            400+ станций быстрой зарядки в 40+ регионах России.
            Зарядка, топливо, программа лояльности — всё в одном приложении.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-5"
          >
            <a href="#map"
              className="kinetic-gradient text-on-primary px-10 py-4 rounded-[14px]
                font-body text-base font-semibold shadow-lg shadow-primary/20
                hover:scale-[1.03] transition-all duration-300 active:scale-95">
              Найти станцию
            </a>
            <a href="#drivers"
              className="px-10 py-4 rounded-[14px] font-body text-base font-semibold
                transition-all duration-300 active:scale-95
                bg-surface-container-highest dark:bg-white/10
                text-primary dark:text-white
                hover:bg-surface-container-high dark:hover:bg-white/15">
              Скачать приложение
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10
            dark:shadow-blue-900/30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMLJJj-zwIm3Q2zobIFymcMxU1r7sMh-_UR5An_vEArwEUoGJOfN_GciS_d99QjUOZH_G4P5KL-wF5FXhZiCXmqbnI6B_tanFE-EJXI_Z60LbOs38-ixsD2fNykbKPCQ9P9jQeGRQvJZeAATvBcT4DyNyzayA__dgeHY8iSEHwUqi7nue8gmSZEd_WG5rbcgjwb582TcJhcvke4oL9Jb6oHjBkLMKmeJUQF01TftP7Go5etAo72GNISI6E-eSpTp4cP8AeWbUeVAo"
              alt="Зарядная станция ЭЗС РусГидро"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary/10 blur-[100px] -z-10" />
        </motion.div>
      </div>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="max-w-screen-2xl mx-auto mt-20
          bg-surface-container-low dark:bg-dark-card
          rounded-[2rem] p-10 sm:p-12
          grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
      >
        {[
          { value: "400+", label: "Станций", color: "text-primary dark:text-blue-400" },
          { value: "40+", label: "Регионов", color: "text-primary dark:text-blue-400" },
          { value: "10 мин", label: "Быстрая зарядка", color: "text-tertiary dark:text-tertiary-fixed-dim" },
        ].map((s, i) => (
          <div key={i} className={i === 1 ? "sm:border-x border-outline-variant/20 dark:border-dark-border" : ""}>
            <div className={`font-headline text-4xl mb-2 ${s.color}`}>{s.value}</div>
            <div className="font-body text-on-surface-variant dark:text-gray-500
              uppercase tracking-[0.15em] text-xs font-bold">{s.label}</div>
          </div>
        ))}
      </motion.section>
    </header>
  );
}
