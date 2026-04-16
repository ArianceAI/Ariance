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
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,border-color] duration-300 ${
        scrolled ? 'glass-nav-light shadow-[0_1px_20px_rgba(0,0,0,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[68px]">

          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-[#0F1117] tracking-tight">Ariance</span>
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#2563EB]
                         transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         group-hover:scale-[2.5] group-hover:shadow-[0_0_8px_rgba(37,99,235,0.6)]"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#374151] hover:text-[#2563EB] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-semibold bg-[#2563EB] text-white px-4 py-2 rounded-md
                         transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)]
                         active:translate-y-0"
            >
              Neem contact op
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-[#374151] hover:text-[#0F1117] transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu openen"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(255,255,255,0.97)', borderTop: '1px solid #f1f5f9' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#374151] hover:text-[#2563EB] transition-colors duration-200 py-1"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-semibold bg-[#2563EB] text-white px-4 py-2.5 rounded-md
                       hover:bg-[#1d4ed8] transition-colors duration-200 text-center mt-1"
            onClick={() => setIsOpen(false)}
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </header>
  );
}
