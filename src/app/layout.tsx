import Header from '@/components/header/Header';
import './globals.css';
import type { ReactNode } from 'react';
import Footer from '@/components/footer/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className='flex min-h-screen flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
