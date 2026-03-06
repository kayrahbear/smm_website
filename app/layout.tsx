import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ashley Brewer Books',
  description: 'Official website for Ashley Brewer and the Savannah Manor Mysteries series.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
