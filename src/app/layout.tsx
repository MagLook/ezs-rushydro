import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "ЭЗС РусГидро — Федеральная сеть электрозарядных станций",
  description: "Крупнейшая в России сеть быстрых электрозарядных станций. 400+ станций в 40+ регионах.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="dark:bg-dark-bg bg-surface dark:text-inverse-on-surface text-on-surface font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
