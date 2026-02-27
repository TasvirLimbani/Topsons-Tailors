import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ClientLayout } from '@/components/client-layout'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Topsonss Tailors | Bespoke Tailoring for the Modern Gentleman',
  description: 'Crafted luxury clothing with custom fit, premium fabrics, and made-to-measure precision. Design your perfect shirt, pants, and blazer.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/flogo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/flogo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/flogo.png',
        type: 'image/png',
      },
    ],
    apple: '/flogo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1F3A2E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
        <Analytics />
      </body>
    </html>
  )
}
