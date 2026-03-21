import React from 'react';
import { Instagram } from 'lucide-react';

const igImages = [
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/43dbed585_IMG_4512.jpg', alt: 'Gamechanger Instagram majice Srbija' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/1c5470cee_IMG_4514.jpg', alt: 'Gamechanger Instagram modni brend' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/5ce97a8f5_IMG_4515.jpg', alt: 'Gamechanger Instagram brend majica' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/45d599fd1_IMG_4516.jpg', alt: 'Gamechanger Instagram odeća Srbija' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/ec9584fb3_IMG_4518.jpg', alt: 'Gamechanger Instagram lookbook' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/763748073_IMG_4519.jpg', alt: 'Gamechanger Instagram streetwear Srbija' },
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="bg-black py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16">
          <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-4">Društvene mreže</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <a
              href="https://instagram.com/gamechanger.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <h2
                className="text-white font-black uppercase leading-none group-hover:text-white/70 transition-colors"
                style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', letterSpacing: '-0.02em' }}
              >
                @gamechanger.rs
              </h2>
            </a>
            <p className="text-white/35 text-sm font-light">Prati nas na Instagramu</p>
          </div>
          <div className="mt-8 h-px bg-white/8" />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
          {igImages.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/gamechanger.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden group relative aspect-square"
              aria-label="Pogledaj na Instagramu"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-60" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram size={20} className="text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}