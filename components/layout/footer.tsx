import Link from 'next/link';
import { MapPin, Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { href: '/',                   label: 'Home' },
  { href: '/diensten',           label: 'Diensten' },
  { href: '/contact',            label: 'Contact' },
];

const servicesLinks = [
  { href: '/diensten#automatisering', label: 'AI Automatisering' },
  { href: '/diensten#consultancy',    label: 'AI Consultancy' },
];

const contactItems = [
  { icon: MapPin, content: 'Jan van Goyenstraat 29\n1823 GC Alkmaar', href: null },
  { icon: Mail,   content: 'arianceautomation@gmail.com',              href: 'mailto:arianceautomation@gmail.com' },
  { icon: Phone,  content: '+31 6 14455066',                           href: 'tel:+31614455066' },
  { icon: Clock,  content: 'Ma – Vr: 9:00 – 17:00',                    href: null },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'var(--bg-cream)', borderTop: '1px solid rgba(129,140,248,0.14)' }}
    >
      {/* Ambient glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 100% at 50% 100%, rgba(129,140,248,0.14) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Main */}
      <div
        className="relative border-b"
        style={{ borderColor: 'rgba(13,12,24,0.08)' }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">

            {/* Brand column (5) */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group">
                <span className="relative">
                  <span className="block w-2.5 h-2.5 rounded-full bg-[var(--accent)] transition-transform duration-500 group-hover:scale-150" />
                  <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-pulse-glow" />
                </span>
                <span className="font-display text-xl font-extrabold tracking-tight" style={{ color: 'var(--ink)' }}>
                  ariance<span style={{ color: 'var(--accent)' }}>.</span>
                </span>
              </Link>
              <p className="text-sm leading-[1.75] max-w-sm mb-7" style={{ color: 'var(--muted-d)' }}>
                Praktische AI-oplossingen voor het Nederlandse MKB.
                Van automatisering tot private AI — in weken live, niet maanden.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 font-display font-semibold text-[13px] px-5 py-2.5 rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'var(--amber)',
                  color: 'var(--ink-dark)',
                  boxShadow: '0 10px 26px rgba(192,132,252,0.3)',
                }}
              >
                Plan een gesprek
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Nav (3) */}
            <div className="md:col-span-3">
              <h3 className="mono-label mb-5" style={{ color: 'var(--accent)' }}>
                Navigatie
              </h3>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center gap-1 font-display text-sm font-medium w-fit transition-colors duration-200"
                    style={{ color: 'var(--muted-d)' }}
                  >
                    <span className="transition-colors duration-200 group-hover:text-[var(--ink)]">
                      {link.label}
                    </span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: 'var(--accent)' }}
                    />
                  </Link>
                ))}
              </nav>

              <h3 className="mono-label mb-5 mt-10" style={{ color: 'var(--accent)' }}>
                Diensten
              </h3>
              <nav className="flex flex-col gap-3">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-display text-sm font-medium transition-colors duration-200 w-fit"
                    style={{ color: 'var(--muted-d)' }}
                  >
                    <span className="hover:text-[var(--ink)] transition-colors duration-200">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact (4) */}
            <div className="md:col-span-4">
              <h3 className="mono-label mb-5" style={{ color: 'var(--accent)' }}>
                Contact
              </h3>
              <ul className="flex flex-col gap-4">
                {contactItems.map(({ icon: Icon, content, href }) => (
                  <li key={content} className="flex items-start gap-3">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: 'rgba(129,140,248,0.08)',
                        border: '1px solid rgba(129,140,248,0.18)',
                      }}
                    >
                      <Icon size={13} style={{ color: 'var(--accent)' }} />
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm leading-[1.6] transition-colors duration-200 whitespace-pre-line"
                        style={{ color: 'var(--muted-d)' }}
                      >
                        <span className="hover:text-[var(--ink)] transition-colors duration-200">
                          {content}
                        </span>
                      </a>
                    ) : (
                      <span className="text-sm leading-[1.6] whitespace-pre-line" style={{ color: 'var(--muted-d)' }}>
                        {content}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="mono-label" style={{ color: 'var(--muted-l)' }}>
          © {new Date().getFullYear()} Ariance · Alle rechten voorbehouden
        </p>
        <p className="mono-label" style={{ color: 'var(--muted-l)' }}>
          Opgericht 2025 · Alkmaar, nederland
        </p>
      </div>
    </footer>
  );
}
