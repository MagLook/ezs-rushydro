"use client";
import { Globe, Mail, Share2 } from "lucide-react";
import Logo from "./Logo";

const links = {
  "Станции": ["Поиск станций", "Экология", "Партнёрство"],
  "Документы": ["Политика конфиденциальности", "Условия использования", "Cookies"],
};

export default function Footer() {
  return (
    <footer id="contacts" className="bg-surface-container-low dark:bg-dark-card
      rounded-t-[2rem] mt-16 border-t border-outline-variant/10 dark:border-dark-border">
      <div className="max-w-screen-2xl mx-auto px-10 sm:px-12 py-14
        grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="space-y-6">
          <div className="flex items-center gap-1">
            <Logo className="h-10 w-auto" />
            <span className="text-lg font-bold font-headline dark:text-white text-primary">
              РусГидро
            </span>
          </div>
          <p className="text-on-surface-variant dark:text-gray-400 max-w-sm leading-relaxed text-sm">
            Энергия воды для транспорта будущего. Присоединяйтесь к переходу
            на устойчивую энергетику вместе с крупнейшим энергетическим холдингом России.
          </p>
          <div className="flex gap-5">
            {[Globe, Mail, Share2].map((Icon, i) => (
              <a key={i} href="#"
                className="text-on-surface-variant dark:text-gray-500
                  hover:text-secondary dark:hover:text-blue-400 transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="pt-4 space-y-2 text-sm">
            <div className="text-on-surface-variant dark:text-gray-400">
              Горячая линия: <a href="tel:88002221832" className="font-semibold dark:text-white text-on-surface hover:text-secondary transition-colors">8 (800) 222-18-32</a>
            </div>
            <div className="text-on-surface-variant dark:text-gray-400">
              Email: <a href="mailto:ezs@rushydro.ru" className="font-semibold dark:text-white text-on-surface hover:text-secondary transition-colors">ezs@rushydro.ru</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="space-y-3">
              <h4 className="font-headline text-sm font-bold mb-5 dark:text-white text-primary">
                {title}
              </h4>
              {items.map((l) => (
                <a key={l} href="#"
                  className="block text-on-surface-variant dark:text-gray-400
                    hover:text-secondary dark:hover:text-blue-400
                    transition-colors text-sm">{l}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-10 sm:px-12 py-7
        border-t border-outline-variant/10 dark:border-dark-border
        flex flex-col sm:flex-row justify-between items-center gap-3
        text-xs text-on-surface-variant dark:text-gray-500">
        <div>&copy; ПАО &laquo;РусГидро&raquo; 2006&ndash;2026</div>
        <div className="flex gap-6">
          <span>Энергия воды</span>
          <span>Движение будущего</span>
        </div>
      </div>
    </footer>
  );
}
