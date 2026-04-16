import Link from 'next/link';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F1117] text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tight">Ariance</span>
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"
                style={{ boxShadow: '0 0 6px rgba(37,99,235,0.8)' }}
              />
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-xs">
              Praktische AI-oplossingen voor het Nederlandse MKB. Geen theorie, maar echte resultaten.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#4B5563] mb-4">
              Navigatie
            </h3>
            <nav className="flex flex-col gap-2.5">
              {[{ href: '/', label: 'Home' }, { href: '/diensten', label: 'Diensten' }, { href: '/contact', label: 'Contact' }].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#6B7280] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#4B5563] mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-[#6B7280]">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#2563EB] opacity-70" />
                <span>Jan van Goyenstraat 29<br />1823 GC Alkmaar</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-[#6B7280]">
                <Mail size={14} className="shrink-0 text-[#2563EB] opacity-70" />
                <a href="mailto:arianceautomation@gmail.com" className="hover:text-white transition-colors duration-200">
                  arianceautomation@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-[#6B7280]">
                <Phone size={14} className="shrink-0 text-[#2563EB] opacity-70" />
                <a href="tel:+31614455066" className="hover:text-white transition-colors duration-200">
                  +31 6 14455066
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-[#6B7280]">
                <Clock size={14} className="shrink-0 text-[#2563EB] opacity-70" />
                <span>Ma – Vr: 9:00 – 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs text-[#374151]">&copy; {new Date().getFullYear()} Ariance. Alle rechten voorbehouden.</p>
          <p className="text-xs text-[#374151]">Opgericht 2025 · Alkmaar, Nederland</p>
        </div>
      </div>
    </footer>
  );
}
