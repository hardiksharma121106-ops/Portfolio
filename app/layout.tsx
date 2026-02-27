import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/smooth-scroll';
import { CustomCursor } from '@/components/custom-cursor';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Hardik Sharma — Portfolio',
  description: 'A minimalist editorial portfolio for Hardik Sharma.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-[var(--font-sans)] tracking-[0.03em] selection:bg-charcoal selection:text-bg">
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
