import type { Metadata } from 'next';
import { Playpen_Sans, Quicksand } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import './globals.css';

const playpenSans = Playpen_Sans({
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ashley Brewer Books',
  description: 'Official website for Ashley Brewer and the Savannah Manor Mysteries series.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playpenSans.variable} ${quicksand.variable}`}>
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
