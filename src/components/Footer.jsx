import React from 'react';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-bebas text-3xl text-white tracking-widest mb-4">GAMECHANGER</p>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs">
              Srpski brend majica. Odeća koja govori. Streetwear iz Srbije za one koji menjaju igru.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-5">Navigacija</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Kolekcija', href: '#kolekcija' },
                { label: 'O brendu', href: '#o-brendu' },
                { label: 'Instagram', href: '#instagram' },
                { label: 'Poruči', href: '#kontakt' },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-white/50 hover:text-white text-xs tracking-[0.15em] uppercase transition-colors w-fit"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social / Contact */}
          <div>
            <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-5">Kontakt</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/gamechanger.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white text-xs tracking-[0.15em] transition-colors"
                aria-label="Instagram Gamechanger Srbija"
              >
                <Instagram size={14} />
                @gamechanger.rs
              </a>
              <p className="text-white/30 text-xs">Srbija</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase">
            © 2025 GAMECHANGER. Sva prava zadržana.
          </p>
          <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase">
            Modni brend Gamechanger — Majice Srbija
          </p>
        </div>
      </div>
    </footer>
  );
}