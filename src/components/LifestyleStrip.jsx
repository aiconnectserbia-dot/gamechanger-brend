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

        {/* Collage grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-start">
          {images.map((img, i) => (
            <div key={i} className="group flex flex-col gap-3">
              <div className="relative overflow-hidden bg-zinc-950 outline outline-1 outline-white/20 outline-offset-4">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                </div>
              </div>
              <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase text-center">{img.caption}</p>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="mt-3 flex flex-col items-center justify-center bg-white/[0.03] border border-white/8 p-10 text-center">
          <p className="text-white/20 text-[9px] tracking-[0.5em] uppercase mb-5">Gamechanger motto</p>
          <p
            className="text-white leading-tight font-black uppercase"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.01em' }}
          >
            "Menjaj igru, ne igrača"
          </p>
        </div>
      </div>
    </section>
  );
}