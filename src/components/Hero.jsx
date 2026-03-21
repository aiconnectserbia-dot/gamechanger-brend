import React, { useState, useEffect } from 'react';

const heroImages = [
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/4615eda47_IMG_4506.jpg', alt: 'Gamechanger model majica lookbook fotografija' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/e26d987e3_IMG_4507.jpg', alt: 'Gamechanger brend majica Srbija' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/8d334e862_IMG_4508.jpg', alt: 'Gamechanger modni brend lookbook' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {heroImages.map((img, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-center" style={{ filter: 'brightness(0.45)' }} />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-white/50 text-xs tracking-[0.4em] uppercase mb-6">Srpski streetwear brend</p>
        <h1 className="font-bebas text-[clamp(5rem,18vw,16rem)] leading-none tracking-wider text-white mb-6">GAMECHANGER</h1>
        <p className="text-white/60 text-sm tracking-[0.15em] uppercase mb-12 max-w-sm">Majice koje govore pre nego što progovoriš</p>
        <a href="#kolekcija" className="border border-white text-white text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-white hover:text-black transition-all duration-300">
          Istraži kolekciju
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Skroluji</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
      <div className="absolute bottom-10 right-8 flex gap-2">
        {heroImages.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-6' : 'bg-white/30 w-1.5'}`} aria-label={`Slajd ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}