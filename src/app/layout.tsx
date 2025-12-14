import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Paperbee Books | Bringing Stories to Children Everywhere',
  description: "Paperbee Books publishes vibrant children's literature and educational materials in multiple languages.",
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