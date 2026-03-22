import React from 'react';

const images = [
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/dd53c886e_IMG_4550.jpg',
    alt: 'Gamechanger Enjoy the Process devojka kafić',
    caption: 'Enjoy the Process',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/9ffb5aa5a_IMG_4526.jpg',
    alt: 'Gamechanger ekipa streetwear Srbija',
    caption: 'Zajednica',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/a81fea2a3_IMG_4551.jpg',
    alt: 'Gamechanger Martini devojka ulica',
    caption: 'Sloboda',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/e458269f7_IMG_4527.jpg',
    alt: 'Gamechanger The World Is Yours majica model',
    caption: 'Stav',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/c4a6d66da_IMG_4552.jpg',
    alt: 'Gamechanger devojka kafana Kalemegdan',
    caption: 'Autentičnost',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/48d203957_IMG_4528.jpg',
    alt: 'Gamechanger model brend majica',
    caption: 'Stil',
  },
  {
    src: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/0bf456872_IMG_4529.jpg',
    alt: 'Gamechanger Success majica model',
    caption: 'Mentalitet',
  },
];

function Tile({ img, className = '', style = {} }) {
  return (
    <div className={`relative overflow-hidden group bg-zinc-950 ${className}`} style={style}>
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/65 to-transparent">
        <p className="text-white/60 text-[9px] tracking-[0.4em] uppercase">{img.caption}</p>
      </div>
    </div>
  );
}

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

        {/* Desktop collage: 3 rows × flexible cols, all same height per row */}
        <div className="hidden md:flex flex-col gap-2">
          {/* Row 1: 3 images — wide, narrow, wide */}
          <div className="flex gap-2" style={{ height: '380px' }}>
            <Tile img={images[0]} className="flex-[3]" />
            <Tile img={images[1]} className="flex-[2]" />
            <Tile img={images[2]} className="flex-[3]" />
          </div>
          {/* Row 2: 4 images — equal width */}
          <div className="flex gap-2" style={{ height: '300px' }}>
            <Tile img={images[3]} className="flex-1" />
            <Tile img={images[4]} className="flex-1" />
            <Tile img={images[5]} className="flex-1" />
            <Tile img={images[6]} className="flex-1" />
          </div>
        </div>

        {/* Mobile collage */}
        <div className="md:hidden flex flex-col gap-2">
          {/* Row 1: 2 images */}
          <div className="flex gap-2" style={{ height: '260px' }}>
            <Tile img={images[0]} className="flex-[3]" />
            <Tile img={images[1]} className="flex-[2]" />
          </div>
          {/* Row 2: 1 wide */}
          <div style={{ height: '220px' }}>
            <Tile img={images[2]} className="w-full" />
          </div>
          {/* Row 3: 2 images */}
          <div className="flex gap-2" style={{ height: '240px' }}>
            <Tile img={images[3]} className="flex-[2]" />
            <Tile img={images[4]} className="flex-[3]" />
          </div>
          {/* Row 4: 2 images */}
          <div className="flex gap-2" style={{ height: '220px' }}>
            <Tile img={images[5]} className="flex-1" />
            <Tile img={images[6]} className="flex-1" />
          </div>
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