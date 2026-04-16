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
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,border-color,box-shadow] duration-500 ${
        scrolled
          ? 'glass-nav shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[68px]">

          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-heading text-xl font-bold text-[#FAF7F2] tracking-tight italic">
              Ariance
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#D97706] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[2]"
              style={{ boxShadow: '0 0 8px rgba(217,119,6,0.7)' }}
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-[#A89880] hover:text-[#FAF7F2] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="font-sans text-sm font-semibold text-[#0A0907] bg-[#D97706] px-4 py-2 rounded-md
                         transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         hover:-translate-y-0.5 hover:bg-[#F59E0B] hover:shadow-[0_8px_24px_rgba(217,119,6,0.45)]
                         active:translate-y-0"
            >
              Neem contact op
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#A89880] hover:text-[#FAF7F2] transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu openen"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          background: 'rgba(10,9,7,0.97)',
          borderTop: '1px solid rgba(217,119,6,0.1)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-[#A89880] hover:text-[#FAF7F2] transition-colors duration-200 py-1"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-sans text-sm font-semibold text-[#0A0907] bg-[#D97706] px-4 py-2.5 rounded-md
                       hover:bg-[#F59E0B] transition-colors duration-200 text-center mt-1"
            onClick={() => setIsOpen(false)}
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </header>
  );
}
