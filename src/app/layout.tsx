import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Paperbee Books | Where Billion Minds Become Brilliant Minds',
  description: "Paperbee Books publishes vibrant children's literature and educational materials in multiple languages.",
  icons: {
    icon: '/images/logo_only.png',
  },
  openGraph: {
    images: ['/images/logo_only.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}