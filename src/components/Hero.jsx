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

      {/* Content — bottom aligned for editorial feel */}
      <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-white leading-[0.9] mb-8 font-black uppercase"
            style={{ fontSize: 'clamp(4rem, 14vw, 13rem)', letterSpacing: '-0.02em', fontFamily: "'Inter', sans-serif" }}
          >
            GAME<br />CHANGER
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="#kolekcija"
              className="inline-block bg-white text-black text-[10px] tracking-[0.35em] uppercase px-8 py-4 font-semibold hover:bg-white/90 transition-colors"
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
      <div className="absolute bottom-8 right-8 md:right-16 flex gap-1.5">
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