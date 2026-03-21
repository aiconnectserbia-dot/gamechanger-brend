import React from 'react';
import { Instagram } from 'lucide-react';

const igImages = [
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/43dbed585_IMG_4512.jpg',
    alt: 'Gamechanger Instagram majice Srbija',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/1c5470cee_IMG_4514.jpg',
    alt: 'Gamechanger Instagram modni brend',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/5ce97a8f5_IMG_4515.jpg',
    alt: 'Gamechanger Instagram brend majica',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/45d599fd1_IMG_4516.jpg',
    alt: 'Gamechanger Instagram odeća Srbija',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/ec9584fb3_IMG_4518.jpg',
    alt: 'Gamechanger Instagram lookbook',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/763748073_IMG_4519.jpg',
    alt: 'Gamechanger Instagram streetwear Srbija',
  },
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4">Prati nas</p>
          <a
            href="https://instagram.com/gamechanger.rs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
            aria-label="Gamechanger Instagram @gamechanger.rs"
          >
            <Instagram size={20} className="text-white/60 group-hover:text-white transition-colors" />
            <span className="font-bebas text-4xl md:text-5xl text-white tracking-widest group-hover:text-white/70 transition-colors">
              @gamechanger.rs
            </span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-white/5">
          {igImages.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/gamechanger.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden group relative"
              aria-label="Pogledaj na Instagramu"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram size={24} className="text-white" />
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://instagram.com/gamechanger.rs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/40 hover:text-white text-xs tracking-[0.3em] uppercase transition-colors"
          >
            <Instagram size={14} />
            Prati @gamechanger.rs
          </a>
        </div>
      </div>
    </section>
  );
}