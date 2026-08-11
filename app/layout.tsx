import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ОЗСК-Строй — Надёжный генеральный подрядчик',
  description:
    'ООО «ОЗСК-Строй» — производственно-строительная организация. Реализуем сложные проекты точно в срок и с гарантией качества.',
  keywords: 'ОЗСК-Строй, генеральный подрядчик, строительство, Гатчина',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
