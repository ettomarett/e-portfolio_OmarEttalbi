import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from './components/providers/theme-provider'
import Navbar from './components/navigation/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import AnimatedGeometricBackground from './components/AnimatedGeometricBackground'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Modern Portfolio',
  description: 'A modern portfolio website built with Next.js and Tailwind CSS',
  keywords: ['portfolio', 'developer', 'designer', 'UI/UX', 'web development'],
  icons: {
    icon: [
      '/favicon/favicon.ico',
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-secondary text-gray-100`}>
        <AnimatedGeometricBackground />
        <ThemeProvider>
          <Navbar />
          <div className="px-4 md:px-8 lg:px-12">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 