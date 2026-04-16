import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Cursor from '@/components/layout/cursor';

export const metadata: Metadata = {
  metadataBase: new URL('https://ariance.nl'),
  title: 'Ariance — AI Oplossingen voor Nederlandse Bedrijven',
  description:
    'Ariance bouwt praktische AI-oplossingen voor Nederlandse MKB-bedrijven. AI Automatisering, Consultancy, Private AI en Digitalisering. Gevestigd in Alkmaar.',
  keywords: 'AI automatisering, kunstmatige intelligentie, MKB, Nederland, Alkmaar, digitalisering',
  authors: [{ name: 'Léon Ariëns' }],
  openGraph: {
    title: 'Ariance — AI Oplossingen voor Nederlandse Bedrijven',
    description: 'Praktische AI-oplossingen voor het Nederlandse MKB.',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
