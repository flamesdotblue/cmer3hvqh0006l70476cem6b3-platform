import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Background from '@/components/Background';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Skeuomorphism Demo',
  description: 'A soft, tactile skeuomorphic landing page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        {children}
      </body>
    </html>
  );
}
