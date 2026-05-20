import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { rentoraBrand, rentoraSeo } from '@/lib/rentora-seo'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(rentoraBrand.siteUrl),
  title: {
    default: rentoraSeo.title,
    template: `%s | ${rentoraBrand.name}`,
  },
  description: rentoraSeo.description,
  keywords: rentoraSeo.keywords,
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: rentoraSeo.openGraphTitle,
    description: rentoraSeo.openGraphDescription,
    url: rentoraBrand.canonicalUrl,
    siteName: rentoraBrand.name,
    type: 'website',
    locale: 'es_SV',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Rentora - Software de gestión para rentadoras de vehículos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: rentoraSeo.openGraphTitle,
    description: rentoraSeo.openGraphDescription,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: rentoraBrand.canonicalUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
