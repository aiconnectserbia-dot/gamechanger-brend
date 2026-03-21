import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Instagram } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Kolekcija', href: '#kolekcija' },
    { label: 'O brendu', href: '#o-brendu' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-bebas text-2xl tracking-widest text-white hover:text-white/70 transition-colors">
          GAMECHANGER
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://instagram.com/gamechanger.rs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Instagram @gamechanger.rs"
          >
            <Instagram size={18} />
          </a>
          <a href="#kontakt" className="text-xs tracking-[0.2em] uppercase text-black bg-white px-5 py-2.5 hover:bg-white/90 transition-colors font-medium">
            Poruči
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-[0.2em] uppercase text-black bg-white px-5 py-3 text-center font-medium mt-2"
          >
            Poruči
          </a>
        </div>
      )}
    </nav>
  );
}