import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Enjoy the Process', price: '3.490 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/2bfe3c430_IMG_4510.jpg', alt: 'Gamechanger majica Enjoy the Process - brend majica Srbija', tag: 'Bestseller' },
  { id: 2, name: 'Good Vibes & Grooves', price: '3.490 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/f36007ada_IMG_4511.jpg', alt: 'Gamechanger majica Good Vibes Grooves martini - odeća Srbija', tag: null },
  { id: 3, name: "Isn't It Crazy", price: '3.490 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/43dbed585_IMG_4512.jpg', alt: 'Gamechanger majica dollar - modni brend Gamechanger', tag: 'Novo' },
  { id: 4, name: 'Mona Lisa', price: '3.490 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/1c5470cee_IMG_4514.jpg', alt: 'Gamechanger majica Mona Lisa - majice Srbija', tag: null },
  { id: 5, name: 'Young Fighter', price: '3.490 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/5ce97a8f5_IMG_4515.jpg', alt: 'Gamechanger majica Young Fighter bokser - brend majica', tag: null },
  { id: 6, name: 'Diego', price: '3.490 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/45d599fd1_IMG_4516.jpg', alt: 'Gamechanger majica Diego Maradona - majice Srbija', tag: 'Bestseller' },
  { id: 7, name: 'No Smoking', price: '3.490 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/ec9584fb3_IMG_4518.jpg', alt: 'Gamechanger majica No Smoking - modni brend Srbija', tag: null },
  { id: 8, name: 'Tutto Passa', price: '3.490 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/763748073_IMG_4519.jpg', alt: 'Gamechanger majica Tutto Passa - odeća Srbija', tag: 'Novo' },
];

export default function Collection() {
  return (
    <section id="kolekcija" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-3">SS 2025</p>
            <h2 className="font-bebas text-6xl md:text-8xl text-white tracking-wide leading-none">Kolekcija</h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">Svaka majica je izjava. Brend majica Gamechanger — dizajn koji razlikuje.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5">
          {products.map((p) => (
            <div key={p.id} className="bg-black group cursor-pointer relative overflow-hidden">
              <div className="relative overflow-hidden aspect-square">
                <img src={p.img} alt={p.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {p.tag && <span className="absolute top-3 left-3 bg-white text-black text-[9px] tracking-[0.2em] uppercase px-2 py-1 font-semibold">{p.tag}</span>}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-white text-black text-xs tracking-[0.2em] uppercase py-3 font-medium hover:bg-white/90 transition-colors">Poruči</button>
                </div>
              </div>
              <div className="p-4 border-t border-white/5">
                <p className="text-white text-sm font-medium tracking-wide truncate">{p.name}</p>
                <p className="text-white/40 text-xs mt-1">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <a href="#kontakt" className="border border-white/30 text-white/60 hover:border-white hover:text-white text-xs tracking-[0.3em] uppercase px-12 py-4 transition-all duration-300">Sve majice</a>
        </div>
      </div>
    </section>
  );
}