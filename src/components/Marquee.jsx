import React from 'react';

const items = ['GAMECHANGER', '·', 'Brend majica iz Srbije', '·', 'Oversized fit', '·', 'Premium kvalitet', '·', 'GAMECHANGER', '·', 'Streetwear Srbija', '·', 'Novi dizajni', '·'];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-3.5">
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 22s linear infinite' }}>
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`text-[10px] tracking-[0.3em] uppercase mx-5 ${item === '·' ? 'text-black/30' : 'text-black font-bold'}`}
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}