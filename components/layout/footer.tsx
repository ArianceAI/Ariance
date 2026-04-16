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
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Praktische AI-oplossingen voor het Nederlandse MKB. Geen theorie, maar echte resultaten.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
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
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gray-500" />
                <span>Jan van Goyenstraat 29<br />1823 GC Alkmaar</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Mail size={15} className="shrink-0 text-gray-500" />
                <a
                  href="mailto:arianceautomation@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  arianceautomation@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Phone size={15} className="shrink-0 text-gray-500" />
                <a href="tel:+31614455066" className="hover:text-white transition-colors">
                  +31 6 14455066
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Clock size={15} className="shrink-0 text-gray-500" />
                <span>Ma – Vr: 9:00 – 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Ariance. Alle rechten voorbehouden.
          </p>
          <p className="text-xs text-gray-600">
            Opgericht 2025 &middot; Alkmaar, Nederland
          </p>
        </div>
      </div>
    </footer>
  );
}
