import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { SmoothScroll } from '@/components/shared/SmoothScroll'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'ElementUX — Premium UI/UX & Brand Design',
  description:
    'Elite UI/UX and brand design studio. I help businesses build digital experiences that convert and brands that command premium prices.',
  keywords: ['UI/UX Design', 'Brand Identity', 'Product Design', 'Web Design', 'ElementUX'],
  openGraph: {
    title: 'ElementUX — Premium UI/UX & Brand Design',
    description: 'Elite UI/UX and brand design studio.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-obsidian text-white antialiased overflow-x-hidden">
        <div className="noise-overlay" />
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
