import Link from 'next/link';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#090c12', borderTop: '1px solid rgba(37,99,235,0.15)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading text-xl font-bold text-[#F8FAFC] tracking-tight italic">Ariance</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" style={{ boxShadow: '0 0 8px rgba(37,99,235,0.8)' }} />
            </div>
            <p className="font-sans text-sm text-[#475569] leading-relaxed max-w-xs">
              Praktische AI-oplossingen voor het Nederlandse MKB. Geen theorie, maar echte resultaten.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#475569] mb-4">Navigatie</h3>
            <nav className="flex flex-col gap-2.5">
              {[{ href: '/', label: 'Home' }, { href: '/diensten', label: 'Diensten' }, { href: '/contact', label: 'Contact' }].map((link) => (
                <Link key={link.href} href={link.href} className="font-sans text-sm text-[#475569] hover:text-[#F8FAFC] transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#475569] mb-4">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 font-sans text-sm text-[#475569]">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#2563EB] opacity-60" />
                <span>Jan van Goyenstraat 29<br />1823 GC Alkmaar</span>
              </li>
              <li className="flex items-center gap-2.5 font-sans text-sm text-[#475569]">
                <Mail size={14} className="shrink-0 text-[#2563EB] opacity-60" />
                <a href="mailto:arianceautomation@gmail.com" className="hover:text-[#F8FAFC] transition-colors duration-200">arianceautomation@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5 font-sans text-sm text-[#475569]">
                <Phone size={14} className="shrink-0 text-[#2563EB] opacity-60" />
                <a href="tel:+31614455066" className="hover:text-[#F8FAFC] transition-colors duration-200">+31 6 14455066</a>
              </li>
              <li className="flex items-center gap-2.5 font-sans text-sm text-[#475569]">
                <Clock size={14} className="shrink-0 text-[#2563EB] opacity-60" />
                <span>Ma – Vr: 9:00 – 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="font-mono text-[10px] tracking-wider uppercase text-[#2a3040]">&copy; {new Date().getFullYear()} Ariance. Alle rechten voorbehouden.</p>
          <p className="font-mono text-[10px] tracking-wider uppercase text-[#2a3040]">Opgericht 2025 &middot; Alkmaar, Nederland</p>
        </div>
      </div>
    </footer>
  );
}
