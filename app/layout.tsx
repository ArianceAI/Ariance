import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://ariance.nl'),
  title: 'Ariance — AI die écht werkt voor Nederlandse bedrijven',
  description:
    'Ariance bouwt praktische AI-oplossingen voor Nederlandse MKB-bedrijven. AI Automatisering, Consultancy, Private AI en Digitalisering. Gevestigd in Alkmaar — werkzaam door heel Nederland.',
  keywords: 'AI automatisering, private AI, AI consultancy, MKB Nederland, Alkmaar, digitalisering, AVG AI',
  authors: [{ name: 'Léon Ariëns' }],
  openGraph: {
    title: 'Ariance — AI die écht werkt voor Nederlandse bedrijven',
    description: 'Praktische AI-oplossingen voor het Nederlandse MKB — in weken live, niet maanden.',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
