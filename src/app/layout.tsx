import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Header } from '@/components/header';
import { getSession } from '@/lib/get-session';
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Avaliações de Desempenho',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
