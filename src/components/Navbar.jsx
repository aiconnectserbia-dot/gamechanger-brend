import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Kolekcija', href: '#kolekcija' },
    { label: 'O brendu', href: '#o-brendu' },
    { label: 'Instagram', href: '#instagram' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/96 border-b border-white/8' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#" className="hover:opacity-75 transition-opacity">
          <img
            src="https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/841e7bd15_Photoroom_20260321_191036.png"
            alt="Gamechanger logo"
            className="h-14 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-[10px] tracking-[0.3em] uppercase text-white/50 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a href="https://instagram.com/gamechanger.rs" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="https://www.instagram.com/gamechanger.rs/" target="_blank" rel="noopener noreferrer" className="text-[9px] tracking-[0.3em] uppercase text-black bg-white px-5 py-2.5 hover:bg-white/90 transition-colors font-bold">
            Poruči
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/8 px-6 py-8 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setMenuOpen(false)} className="text-[9px] tracking-[0.3em] uppercase text-black bg-white px-5 py-3.5 text-center font-bold mt-2">
            Poruči
          </a>
        </div>
      )}
    </nav>
  );
}