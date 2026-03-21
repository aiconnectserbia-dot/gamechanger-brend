import React from 'react';

const row1 = [
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/bdc07dff9_IMG_4520.jpg', alt: "Gamechanger lookbook Don't be like the rest majica Srbija", cls: 'col-span-2 row-span-2' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/16367989d_IMG_4522.jpg', alt: 'Gamechanger Brad Pitt majica - modni brend Srbija', cls: 'col-span-1' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/ad1cc0f76_IMG_4523.jpg', alt: 'Gamechanger Martini majica - odeća Srbija', cls: 'col-span-1' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/895f1b77e_IMG_4524.jpg', alt: 'Gamechanger Hustle majica - brend majica', cls: 'col-span-1' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/f13bf4a20_IMG_4509.jpg', alt: 'Gamechanger F1 majica - majice Srbija', cls: 'col-span-1' },
];

const row2 = [
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/d43fd2c28_IMG_4517.jpg', alt: 'Gamechanger Whiskey majica', cls: 'col-span-1' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/8dc12c00b_IMG_4521.jpg', alt: 'Gamechanger playing cards majica - odeća Srbija', cls: 'col-span-2' },
  { src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/c1c83f306_IMG_4513.jpg', alt: 'Gamechanger Fuck 9-5 sat majica - streetwear Srbija', cls: 'col-span-1' },
];

export default function Lookbook() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-3">Lookbook</p>
            <h2 className="font-bebas text-6xl md:text-8xl text-white tracking-wide leading-none">Editorial</h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">Modni brend Gamechanger — majice koje nose priču.</p>
        </div>
        <div className="grid grid-cols-4 gap-1 auto-rows-[200px] md:auto-rows-[260px]">
          {row1.map((img, i) => (
            <div key={i} className={`${img.cls} overflow-hidden group`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-1 mt-1 auto-rows-[200px] md:auto-rows-[260px]">
          {row2.map((img, i) => (
            <div key={i} className={`${img.cls} overflow-hidden group`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}