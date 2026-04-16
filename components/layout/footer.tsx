import Link from 'next/link';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#070605',
        borderTop: '1px solid rgba(217,119,6,0.18)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading text-xl font-bold text-[#FAF7F2] tracking-tight italic">
                Ariance
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#D97706]"
                style={{ boxShadow: '0 0 8px rgba(217,119,6,0.7)' }}
              />
            </div>
            <p className="font-sans text-sm text-[#6B5A48] leading-relaxed max-w-xs">
              Praktische AI-oplossingen voor het Nederlandse MKB. Geen theorie, maar echte resultaten.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B5A48] mb-4">
              Navigatie
            </h3>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/diensten', label: 'Diensten' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-[#6B5A48] hover:text-[#FAF7F2] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B5A48] mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 font-sans text-sm text-[#6B5A48]">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: '#D97706', opacity: 0.6 }} />
                <span>Jan van Goyenstraat 29<br />1823 GC Alkmaar</span>
              </li>
              <li className="flex items-center gap-2.5 font-sans text-sm text-[#6B5A48]">
                <Mail size={14} className="shrink-0" style={{ color: '#D97706', opacity: 0.6 }} />
                <a href="mailto:arianceautomation@gmail.com" className="hover:text-[#FAF7F2] transition-colors duration-200">
                  arianceautomation@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 font-sans text-sm text-[#6B5A48]">
                <Phone size={14} className="shrink-0" style={{ color: '#D97706', opacity: 0.6 }} />
                <a href="tel:+31614455066" className="hover:text-[#FAF7F2] transition-colors duration-200">
                  +31 6 14455066
                </a>
              </li>
              <li className="flex items-center gap-2.5 font-sans text-sm text-[#6B5A48]">
                <Clock size={14} className="shrink-0" style={{ color: '#D97706', opacity: 0.6 }} />
                <span>Ma – Vr: 9:00 – 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(217,119,6,0.08)' }}
        >
          <p className="font-mono text-[10px] tracking-wider uppercase text-[#3D3028]">
            &copy; {new Date().getFullYear()} Ariance. Alle rechten voorbehouden.
          </p>
          <p className="font-mono text-[10px] tracking-wider uppercase text-[#3D3028]">
            Opgericht 2025 &middot; Alkmaar, Nederland
          </p>
        </div>
      </div>
    </footer>
  );
}
