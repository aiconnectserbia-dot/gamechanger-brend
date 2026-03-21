import React from 'react';

const images = [
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/9ffb5aa5a_IMG_4526.jpg',
    alt: 'Gamechanger ekipa streetwear Srbija',
    caption: 'Zajednica',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/e458269f7_IMG_4527.jpg',
    alt: 'Gamechanger The World Is Yours majica model',
    caption: 'Stav',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/48d203957_IMG_4528.jpg',
    alt: 'Gamechanger model brend majica',
    caption: 'Autentičnost',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/0bf456872_IMG_4529.jpg',
    alt: 'Gamechanger Success majica model',
    caption: 'Mentalitet',
  },
];

export default function LifestyleStrip() {
  return (
    <section className="bg-black py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-4">Lifestyle</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-white font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', letterSpacing: '-0.02em' }}
            >
              Živi brend
            </h2>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs font-light">
              Više od majice — način razmišljanja.
            </p>
          </div>
          <div className="mt-8 h-px bg-white/8" />
        </div>

        {/* Asymmetric image strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* First image — taller */}
          <div className="col-span-2 md:col-span-2 row-span-1 relative overflow-hidden group">
            <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white/60 text-[9px] tracking-[0.4em] uppercase">{images[0].caption}</p>
            </div>
          </div>

          {/* Second image */}
          <div className="col-span-1 relative overflow-hidden group">
            <div className="aspect-[3/4] md:aspect-[3/4] overflow-hidden">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white/60 text-[9px] tracking-[0.4em] uppercase">{images[1].caption}</p>
            </div>
          </div>

          {/* Third image */}
          <div className="col-span-1 relative overflow-hidden group">
            <div className="aspect-[3/4] md:aspect-[3/4] overflow-hidden">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white/60 text-[9px] tracking-[0.4em] uppercase">{images[2].caption}</p>
            </div>
          </div>
        </div>

        {/* Bottom full-width with quote */}
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-2 relative overflow-hidden group">
            <div className="aspect-[16/7] overflow-hidden">
              <img
                src={images[3].src}
                alt={images[3].alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white/60 text-[9px] tracking-[0.4em] uppercase">{images[3].caption}</p>
            </div>
          </div>

          {/* Quote block */}
          <div className="flex flex-col items-center justify-center bg-white/[0.03] border border-white/8 p-8 md:p-10 text-center min-h-[200px]">
            <p className="text-white/20 text-[9px] tracking-[0.5em] uppercase mb-5">Gamechanger motto</p>
            <p
              className="text-white leading-tight font-black uppercase"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.01em' }}
            >
              "Menjaj igru, ne igrača"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}