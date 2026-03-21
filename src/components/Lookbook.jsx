import React from 'react';

const lookbookImages = [
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/bdc07dff9_IMG_4520.jpg',
    alt: 'Gamechanger lookbook - Don\'t be like the rest majica Srbija',
    span: 'col-span-2 row-span-2',
    aspect: 'aspect-square',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/16367989d_IMG_4522.jpg',
    alt: 'Gamechanger Brad Pitt majica - modni brend Srbija',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/ad1cc0f76_IMG_4523.jpg',
    alt: 'Gamechanger Martini majica - odeća Srbija',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/895f1b77e_IMG_4524.jpg',
    alt: 'Gamechanger Hustle majica - brend majica',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-[3/4]',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/f13bf4a20_IMG_4509.jpg',
    alt: 'Gamechanger F1 majica - majice Srbija',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-[3/4]',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/c1c83f306_IMG_4513.jpg',
    alt: 'Gamechanger Fuck 9-5 sat majica - streetwear Srbija',
    span: 'col-span-2 row-span-1',
    aspect: 'aspect-[2/1]',
  },
];

export default function Lookbook() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-3">Lookbook</p>
            <h2 className="font-bebas text-6xl md:text-8xl text-white tracking-wide leading-none">
              Editorial
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Modni brend Gamechanger — majice koje nose priču.
          </p>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {lookbookImages.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden ${img.span} group relative`}
            >
              <div className={`w-full ${img.aspect} overflow-hidden`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-0 group-hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-1 mt-1">
          {[
            {
              src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/d43fd2c28_IMG_4517.jpg',
              alt: 'Gamechanger Whiskey calm down majica',
              span: 'col-span-1',
            },
            {
              src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/8dc12c00b_IMG_4521.jpg',
              alt: 'Gamechanger playing cards majica - odeća Srbija',
              span: 'col-span-2',
            },
            {
              src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/4615eda47_IMG_4506.jpg',
              alt: 'Gamechanger Scarface majica - modni brend',
              span: 'col-span-1',
            },
          ].map((img, i) => (
            <div key={i} className={`${img.span} overflow-hidden group`}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}