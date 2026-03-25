"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

declare global {
  interface Window { ymaps: any; }
}

const cities = [
  { name: "Москва", count: 124 },
  { name: "Санкт-Петербург", count: 86 },
  { name: "Владивосток", count: 42 },
  { name: "Краснодар", count: 31 },
];

const coords: [number, number, string][] = [
  [55.7558, 37.6173, "Москва"], [59.9343, 30.3351, "СПб"],
  [43.1332, 131.9113, "Владивосток"], [52.2978, 104.2964, "Иркутск"],
  [56.0184, 92.8672, "Красноярск"], [55.0084, 82.9357, "Новосибирск"],
  [56.8389, 60.6057, "Екатеринбург"], [53.1959, 50.1002, "Самара"],
  [54.9885, 73.3242, "Омск"], [50.2907, 127.5272, "Благовещенск"],
  [46.9651, 142.738, "Южно-Сахалинск"], [48.4802, 135.0719, "Хабаровск"],
  [54.7388, 55.9721, "Уфа"], [55.7879, 49.1233, "Казань"],
  [45.0355, 38.9753, "Краснодар"], [56.3287, 44.002, "Нижний Новгород"],
];

export default function StationMap() {
  const ref = useRef(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=demo&lang=ru_RU";
    script.async = true;
    script.onload = () => {
      window.ymaps.ready(() => {
        if (!mapRef.current) return;
        const map = new window.ymaps.Map(mapRef.current, {
          center: [55.76, 60.0], zoom: 4, controls: ["zoomControl"],
        }, { suppressMapOpenBlock: true });
        const cl = new window.ymaps.Clusterer({ preset: "islands#blueClusterIcons" });
        cl.add(coords.map(([lat, lng, n]) =>
          new window.ymaps.Placemark([lat, lng], {
            balloonContentHeader: `<b>ЭЗС ${n}</b>`,
            balloonContentBody: "CCS2 / CHAdeMO / Type2<br/>до 150 кВт",
            hintContent: `ЭЗС ${n}`,
          }, { preset: "islands#blueDotIcon" })
        ));
        map.geoObjects.add(cl);
      });
    };
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, [inView]);

  return (
    <section id="map" className="mb-32 relative" ref={ref}>
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-0 lg:ml-auto
        grid grid-cols-1 lg:grid-cols-12 overflow-hidden
        bg-surface-container-low dark:bg-dark-card
        lg:rounded-l-[2rem]">
        {/* Sidebar */}
        <div className="lg:col-span-4 p-10 lg:p-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-headline text-3xl sm:text-4xl mb-10 leading-tight dark:text-white"
          >
            Федеральный охват,{" "}
            <span className="text-secondary dark:text-blue-400">локальный сервис</span>
          </motion.h2>

          <div className="space-y-3">
            {cities.map((city, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.06 }}
                className={`w-full flex justify-between items-center p-5 rounded-[14px]
                  transition-all duration-200
                  ${i === 0
                    ? "bg-surface-container-lowest dark:bg-dark-surface shadow-sm dark:shadow-none"
                    : "bg-surface-container-lowest/50 dark:bg-dark-surface/50 hover:bg-surface-container-lowest dark:hover:bg-dark-surface"}`}
              >
                <span className="font-headline text-base dark:text-white">{city.name}</span>
                <span className="text-on-surface-variant dark:text-gray-500 text-sm">
                  {city.count} станций
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-8 min-h-[500px] lg:min-h-[600px] relative">
          <div ref={mapRef} className="absolute inset-0" />

          {/* Glass station card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              glass-nav dark:bg-dark-card/90 dark:backdrop-blur-xl
              p-7 rounded-[1.5rem] shadow-2xl w-72 z-10"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-3 h-3 bg-tertiary-fixed-dim rounded-full" />
              <span className="font-body font-bold text-xs tracking-[0.15em] uppercase
                dark:text-gray-400 text-on-surface-variant">
                Активна
              </span>
            </div>
            <div className="font-headline text-lg mb-1 dark:text-white">Станция #0241</div>
            <div className="text-on-surface-variant dark:text-gray-400 text-sm mb-5">
              Ленинградский пр-т, 37
            </div>
            <div className="flex gap-2 mb-6">
              {["CCS2", "Type 2"].map((c) => (
                <span key={c} className="bg-secondary-container dark:bg-blue-600/20
                  text-on-secondary-container dark:text-blue-300
                  text-[10px] px-2.5 py-1 rounded-[8px] font-bold uppercase">{c}</span>
              ))}
            </div>
            <button className="w-full kinetic-gradient text-on-primary py-3 rounded-[12px]
              font-body font-bold text-sm">
              Построить маршрут
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
