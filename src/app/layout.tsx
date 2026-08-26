import Header from '@/components/header/Header';
import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
