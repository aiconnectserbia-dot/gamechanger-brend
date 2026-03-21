import React from 'react';

export default function FeaturesStrip() {
  return (
    <div className="bg-black relative overflow-hidden">
      {/* Full bleed image with text overlay — split editorial */}
      <div className="grid md:grid-cols-2 min-h-[70vh] md:min-h-[85vh]">

        {/* Left — image */}
        <div className="relative overflow-hidden min-h-[50vw] md:min-h-0">
          <img
            src="https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/0bf456872_IMG_4529.jpg"
            alt="Gamechanger majica model"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ filter: 'brightness(0.75)' }}
          />
          {/* subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
        </div>

        {/* Right — text */}
        <div className="flex flex-col justify-center px-8 py-14 md:px-16 md:py-0 bg-black">
          <p className="text-white/25 text-[9px] tracking-[0.55em] uppercase mb-6">Novi dizajni — SS 2025</p>

          <h2
            className="text-white font-black uppercase leading-[0.88] mb-8"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)', letterSpacing: '-0.025em' }}
          >
            Svaka majica<br />je izjava.
          </h2>

          <p className="text-white/35 text-sm leading-[1.85] font-light max-w-sm mb-10">
            Dizajni koji govore — bez potrebe za rečima. Inspirisano kulturom, filmom i slobodom. Nosi priču koja je tvoja.
          </p>

          <a
            href="#kolekcija"
            className="self-start bg-white text-black text-[9px] tracking-[0.35em] uppercase px-7 py-3.5 font-bold hover:bg-white/90 transition-colors"
          >
            Istraži kolekciju
          </a>

          {/* bottom decorative line */}
          <div className="mt-16 h-px bg-white/8 hidden md:block" />
          <p className="text-white/15 text-[8px] tracking-[0.45em] uppercase mt-5 hidden md:block">
            Gamechanger — Srpski streetwear brend
          </p>
        </div>
      </div>
    </div>
  );
}