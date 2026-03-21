import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Mona Lisa', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/2bfe3c430_IMG_4510.jpg', alt: 'Gamechanger majica Mona Lisa', tag: 'Bestseller' },
  { id: 2, name: 'The Fighter', price: '3.199 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/f36007ada_IMG_4511.jpg', alt: 'Gamechanger majica The Fighter', tag: null },
  { id: 3, name: 'El Diego', price: '3.449 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/43dbed585_IMG_4512.jpg', alt: 'Gamechanger majica El Diego', tag: 'Novo' },
  { id: 4, name: 'No Smoking Club', price: '3.299 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/1c5470cee_IMG_4514.jpg', alt: 'Gamechanger majica No Smoking Club', tag: null },
  { id: 5, name: 'Tutto Passa', price: '3.199 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/5ce97a8f5_IMG_4515.jpg', alt: 'Gamechanger majica Tutto Passa', tag: null },
  { id: 6, name: 'Be Unique', price: '3.449 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/45d599fd1_IMG_4516.jpg', alt: 'Gamechanger majica Be Unique', tag: 'Bestseller' },
  { id: 7, name: 'Brad', price: '3.290 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/ec9584fb3_IMG_4518.jpg', alt: 'Gamechanger majica Brad', tag: null },
  { id: 8, name: 'Martini', price: '3.449 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/763748073_IMG_4519.jpg', alt: 'Gamechanger majica Martini', tag: 'Novo' },
];

export default function Collection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="kolekcija" className="bg-black py-16 md:py-28 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="mb-10 md:mb-16">
          <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-3">SS 2025</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-6">
            <h2
              className="text-white font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 6rem)', letterSpacing: '-0.02em' }}
            >
              Kolekcija
            </h2>
            <p className="text-white/35 text-xs md:text-sm leading-relaxed max-w-xs font-light">
              Brend majica Gamechanger — svaki dizajn nosi priču.
            </p>
          </div>
          <div className="mt-6 md:mt-8 h-px bg-white/8" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-zinc-950 aspect-[3/4] mb-3">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {p.tag && (
                  <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-white text-black text-[7px] md:text-[8px] tracking-[0.25em] uppercase px-2 py-0.5 md:px-2.5 md:py-1 font-bold">
                    {p.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-400" />
                <div className="absolute bottom-0 inset-x-0 px-3 pb-3 md:px-4 md:pb-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-white text-black text-[8px] md:text-[9px] tracking-[0.3em] uppercase py-2.5 md:py-3 font-bold">
                    Poruči
                  </button>
                </div>
              </div>

              {/* Info */}
              <div>
                <p className="text-white text-xs md:text-sm font-medium leading-tight mb-0.5 truncate">{p.name}</p>
                <p className="text-white/35 text-[10px] md:text-xs tracking-wide">{p.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="#kontakt"
            className="text-white/40 hover:text-white text-[10px] tracking-[0.4em] uppercase transition-colors border-b border-white/20 hover:border-white/60 pb-1"
          >
            Sve majice
          </a>
        </div>
      </div>
    </section>
  );
}