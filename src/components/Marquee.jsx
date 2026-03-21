import React from 'react';

const items = ['GAMECHANGER', '—', 'Brend majica iz Srbije', '—', 'Oversized fit', '—', 'Premium kvalitet', '—', 'GAMECHANGER', '—', 'Streetwear Srbija', '—', 'Novi dizajni', '—'];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-4">
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className={`text-xs tracking-[0.25em] uppercase mx-6 ${item === '—' ? 'text-black/40' : 'text-black font-semibold'}`}>{item}</span>
        ))}
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}