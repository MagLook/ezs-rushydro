"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Fuel, Route, ArrowRight } from "lucide-react";

const news = [
  { date: "Ноябрь 2025", tag: "Развитие", title: "Переход на новое мобильное приложение ЭЗС РусГидро", Icon: Smartphone,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCovZ6dcCRrT17t0tmHV6qbzUv-WTJvzml8W_YAMgezQqnSaBxfPYxM3y3VfYi7taggTv8oXObpcZaaGWDO6CgJnYkHjSqJ5Q3eofHzh_GrQi6mltZ9tGd-PF6i_6Dnb3igpdK0hKaup_TRw1PO8xku8yug2vRdiZG84QLlGCZvj_jirGkMVTXSYO8rnCyiUUKn0XFkjnzfPzpNbClAUbaxPzKbHSNNJ-BugdsV68I42LYwP1E0gmUqHhgq-fcUnYqVxYvx-5O3GcU" },
  { date: "Октябрь 2025", tag: "Расширение", title: "Новый хаб на трассе М-4 «Дон»: 6 быстрых постов", Icon: Fuel,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRiSf9ElYwvReRTZDkJD6kM6UvB77gwV1NhKiV-0fSay1m5U0aVbzhlx04Vagrw-21fGISjxM-agvAJUTxd3d4sn4M7uD4ERmOYrCro0cqr02BtfDn7BaH_tghU_FbqrbKAsyJyDN-tFxGp9mxfv4iQmxdFzxrqGU6GTE04weAhFe4Rs4F66u5XRo96Ds8_XdZugc4pUmFAHMe9sJXVURSgBygsApozjXicGbUN5pXCJIrtNtVEhhEmwsEmbjA4bs3KOokFDVvQWM" },
  { date: "Апрель 2024", tag: "Технологии", title: "Приложение 2.0: предиктивная доступность и планирование маршрута", Icon: Route,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_YuoK9Mhh6Xf5naZVt-nRuhJE2u9eIat-CrSjmU1bls-6XSn9SOG56qBBKdBYTWQVf2yqHUYYZqD2lf--m_tGMGce4RzgXJJJKROlxraO7zEGjhXW9eOqAGZyzvjLleRqIaX2FSX7yt4m2e5I0QCJyk2GU2Sm5YjeHU2Y_ccJRbBH47fVnHv-VUk8Wjl-IPleiC2r4WHGn7wvxmvlHKMaAaT4HA4mbu_9uGDAL-5wyrqhCUPGsNPYeXaB3n1TeVauI4me-zFUUFg" },
];

export default function News() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="news" className="px-8 mb-32" ref={ref}>
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="font-headline text-3xl sm:text-4xl mb-3 dark:text-white">
              Внутри <span className="text-secondary dark:text-blue-400">РусГидро</span>
            </h2>
            <p className="font-body text-on-surface-variant dark:text-gray-400">
              Новые станции, технологии и события сети
            </p>
          </motion.div>
          <a href="#" className="text-primary dark:text-blue-400 font-headline font-bold
            flex items-center gap-2 hover:gap-3 transition-all text-sm">
            Все новости
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-7 relative
                bg-surface-container-high dark:bg-dark-surface
                group-hover:shadow-lg transition-shadow duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-surface-container-lowest/80 dark:bg-dark-bg/80 backdrop-blur
                    px-3 py-1 rounded-[8px] font-body text-[10px] font-bold uppercase tracking-wider
                    dark:text-gray-300">{item.tag}</span>
                </div>
              </div>
              <div className="font-body text-xs text-on-surface-variant dark:text-gray-500
                mb-3 font-bold tracking-[0.15em] uppercase">{item.date}</div>
              <h3 className="font-headline text-xl leading-tight
                group-hover:text-secondary dark:group-hover:text-blue-400
                dark:text-white transition-colors duration-200">
                {item.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
