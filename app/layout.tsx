import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Rentora — Software para Rent a Car en El Salvador',
  description:
      'Plataforma de gestión y facturación electrónica DTE diseñada para rentadoras de vehículos en El Salvador. Controla tu flota, gestiona reservas y cumple con el Ministerio de Hacienda.',
  keywords:
      'software rent a car El Salvador, facturación electrónica DTE El Salvador, gestión de flota vehículos, sistema reservas rentadora, Ministerio de Hacienda El Salvador, software rentadora vehículos',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Rentora — Software para Rent a Car en El Salvador',
    description:
        'Gestión de flota, reservas y facturación electrónica DTE en una sola plataforma. Diseñado para rentadoras de vehículos en El Salvador.',
    url: 'https://www.rentora.sv',
    siteName: 'Rentora',
    type: 'website',
    locale: 'es_SV',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rentora — Software para Rent a Car en El Salvador',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rentora — Software para Rent a Car en El Salvador',
    description:
        'Gestión de flota, reservas y facturación electrónica DTE. La plataforma todo-en-uno para rentadoras en El Salvador.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.rentora.sv',
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans`}>{children}</body>
      </html>
  );
}
