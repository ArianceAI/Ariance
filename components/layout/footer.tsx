import Link from 'next/link';
import { MapPin, Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { href: '/',         label: 'Home' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/contact',  label: 'Contact' },
];

const contactItems = [
  { icon: MapPin, content: 'Jan van Goyenstraat 29\n1823 GC Alkmaar', href: null },
  { icon: Mail,   content: 'arianceautomation@gmail.com', href: 'mailto:arianceautomation@gmail.com' },
  { icon: Phone,  content: '+31 6 14455066',             href: 'tel:+31614455066' },
  { icon: Clock,  content: 'Ma – Vr: 9:00 – 17:00',    href: null },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--clr-bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Top bar */}
      <div
        className="border-b"
        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <span
                  className="text-xl font-bold tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Ariance
                </span>
                <span
                  className="w-2 h-2 rounded-full bg-[#2563EB]"
                  style={{ boxShadow: '0 0 8px rgba(37,99,235,0.8)' }}
                />
              </div>
              <p className="text-sm leading-relaxed max-w-[220px]" style={{ color: 'var(--clr-text-muted-d)' }}>
                Praktische AI-oplossingen voor het Nederlandse MKB. Geen theorie, maar echte resultaten.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3
                className="text-[11px] font-bold uppercase tracking-[0.16em] mb-5"
                style={{ color: 'rgba(107,122,153,0.6)', fontFamily: 'var(--font-display)' }}
              >
                Navigatie
              </h3>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium flex items-center gap-1 group w-fit transition-colors duration-200"
                    style={{ color: 'var(--clr-text-muted-d)', fontFamily: 'var(--font-display)' }}
                  >
                    <span className="group-hover:text-white transition-colors duration-200">
                      {link.label}
                    </span>
                    <ArrowUpRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white"
                    />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3
                className="text-[11px] font-bold uppercase tracking-[0.16em] mb-5"
                style={{ color: 'rgba(107,122,153,0.6)', fontFamily: 'var(--font-display)' }}
              >
                Contact
              </h3>
              <ul className="flex flex-col gap-3.5">
                {contactItems.map(({ icon: Icon, content, href }) => (
                  <li key={content} className="flex items-start gap-2.5">
                    <Icon size={13} className="mt-0.5 shrink-0 text-[#2563EB] opacity-70" />
                    {href ? (
                      <a
                        href={href}
                        className="text-sm leading-relaxed hover:text-white transition-colors duration-200 whitespace-pre-line"
                        style={{ color: 'var(--clr-text-muted-d)' }}
                      >
                        {content}
                      </a>
                    ) : (
                      <span
                        className="text-sm leading-relaxed whitespace-pre-line"
                        style={{ color: 'var(--clr-text-muted-d)' }}
                      >
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

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs" style={{ color: 'rgba(75,85,99,0.8)' }}>
          &copy; {new Date().getFullYear()} Ariance. Alle rechten voorbehouden.
        </p>
        <p className="text-xs" style={{ color: 'rgba(75,85,99,0.8)' }}>
          Opgericht 2025 · Alkmaar, Nederland
        </p>
      </div>
    </footer>
  );
}
