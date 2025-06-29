import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PAPERBEE BOOKS - Multilingual Children\'s Books',
  description: 'Discover magical stories and educational materials for children in multiple languages including English, Arabic, Japanese, Indonesian, Hindi, Malayalam, Kannada, Tamil, and Urdu.',
  keywords: 'children books, multilingual, storybooks, educational books, Arabic books, Hindi books, Japanese books',
  authors: [{ name: 'PAPERBEE BOOKS' }],
  openGraph: {
    title: 'PAPERBEE BOOKS - Multilingual Children\'s Books',
    description: 'Discover magical stories and educational materials for children worldwide',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}