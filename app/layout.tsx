import './globals.css';
import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

/* Fraunces — variable optical-size serif for headings */
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

/* Plus Jakarta Sans — body copy */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

/* JetBrains Mono — labels and accents */
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

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
    <html
      lang="nl"
      className={`${fraunces.variable} ${jakarta.variable} ${mono.variable} dark`}
    >
      <body className="bg-[#0A0907] text-[#FAF7F2]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
