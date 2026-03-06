import type { Metadata } from 'next';
import { Fredoka, Quicksand } from 'next/font/google';
import './globals.css';

const fredoka = Fredoka({
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
    <html lang="en" className={`${fredoka.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
