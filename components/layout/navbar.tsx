'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-[#0F1117] tracking-tight">
              Ariance
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] group-hover:scale-125 transition-transform" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#374151] hover:text-[#2563EB] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-semibold bg-[#2563EB] text-white px-4 py-2 rounded-md hover:bg-[#1d4ed8] transition-colors"
            >
              Neem contact op
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-[#0F1117]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu openen"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#374151] hover:text-[#2563EB] transition-colors py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-semibold bg-[#2563EB] text-white px-4 py-2.5 rounded-md hover:bg-[#1d4ed8] transition-colors text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Neem contact op
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
