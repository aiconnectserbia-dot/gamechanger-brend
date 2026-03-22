import React, { useState, useEffect } from 'react';

const heroImages = [
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/9ffb5aa5a_IMG_4526.jpg', alt: 'Gamechanger ekipa majice Srbija' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/e458269f7_IMG_4527.jpg', alt: 'Gamechanger The World Is Yours majica' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/48d203957_IMG_4528.jpg', alt: 'Gamechanger brend majica model Srbija' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % heroImages.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {heroImages.map((img, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-[1500ms] ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-top" style={{ filter: 'brightness(0.35)' }} />
        </div>
      ))}

      {/* Strong bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />

      {/* Content — centered on mobile, bottom on desktop */}
      <div className="absolute inset-0 md:inset-auto md:bottom-0 md:left-0 md:right-0 flex items-center md:block px-6 md:px-16 pb-0 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/40 text-[9px] tracking-[0.5em] uppercase mb-4 md:hidden">Srpski streetwear brend</p>
          <h1
            className="text-white leading-[0.88] mb-6 md:mb-8 font-black uppercase"
            style={{ fontSize: 'clamp(3rem, 15vw, 9rem)', letterSpacing: '-0.02em', fontFamily: "'Inter', sans-serif" }}
          >
            GAME<br />CHANGER
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
            <a
              href="#kolekcija"
              className="inline-block bg-white text-black text-[9px] tracking-[0.35em] uppercase px-7 py-3.5 md:px-8 md:py-4 font-semibold hover:bg-white/90 transition-colors"
            >
              Istraži kolekciju
            </a>
            <a href="#o-brendu" className="text-white/40 text-[10px] tracking-[0.3em] uppercase hover:text-white transition-colors">
              O brendu →
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-16 flex gap-1.5">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-px transition-all duration-500 ${i === current ? 'bg-white w-8' : 'bg-white/30 w-4'}`}
            aria-label={`Slajd ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}