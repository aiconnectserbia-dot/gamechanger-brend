import React from 'react';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/8 py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div>
            <p
              className="text-white font-black uppercase mb-3"
              style={{ fontSize: '1.5rem', letterSpacing: '-0.01em' }}
            >
              GAMECHANGER
            </p>
            <p className="text-white/30 text-xs leading-relaxed max-w-xs font-light">
              Srpski brend majica. Streetwear iz Srbije.
            </p>
          </div>

          <div className="flex gap-16 md:gap-24">
            <div>
              <p className="text-white/25 text-[9px] tracking-[0.4em] uppercase mb-5">Navigacija</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Kolekcija', href: '#kolekcija' },
                  { label: 'O brendu', href: '#o-brendu' },
                  { label: 'Instagram', href: '#instagram' },
                  { label: 'Kontakt', href: '#kontakt' },
                ].map((l) => (
                  <a key={l.label} href={l.href} className="text-white/40 hover:text-white text-xs font-light transition-colors">{l.label}</a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white/25 text-[9px] tracking-[0.4em] uppercase mb-5">Kontakt</p>
              <a
                href="https://instagram.com/gamechanger.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white text-xs transition-colors"
              >
                <Instagram size={12} />
                @gamechanger.rs
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/8 mb-8" />

        <div className="flex flex-col md:flex-row justify-between gap-3">
          <p className="text-white/20 text-[9px] tracking-[0.25em] uppercase">© 2025 GAMECHANGER. Sva prava zadržana.</p>
          <p className="text-white/20 text-[9px] tracking-[0.25em] uppercase">Brend majica — Srbija</p>
        </div>
      </div>
    </footer>
  );
}