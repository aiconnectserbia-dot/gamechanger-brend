import React from 'react';

export default function About() {
  return (
    <section id="o-brendu" className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src="https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/e26d987e3_IMG_4507.jpg" alt="Gamechanger modni brend Srbija - o brendu" className="w-full aspect-[3/4] object-cover" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-white/10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 border border-white/10" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-6">O brendu</p>
            <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wide leading-none mb-8">Brend majica<br />Gamechanger</h2>
            <div className="space-y-5 text-white/55 text-sm leading-relaxed">
              <p><span className="text-white font-medium">GAMECHANGER</span> je srpski streetwear brend osnovan s jednom idejom — da odeća bude više od tkanine. Svaka majica nosi poruku, priču, stav.</p>
              <p>Majice Srbija koje se razlikuju. Dizajni inspirisani kulturom, filmom, sportom i slobodom. Oversized fit, premium pamuk, štampa koja traje.</p>
              <p>Odeća Srbija za one koji ne slede pravila — nego ih menjaju.</p>
            </div>
            <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-3 gap-8">
              {[{ num: '100%', label: 'Premium pamuk' }, { num: '2025', label: 'Osnovan u Srbiji' }, { num: '∞', label: 'Sloboda stila' }].map((s, i) => (
                <div key={i}>
                  <p className="font-bebas text-3xl text-white tracking-wide">{s.num}</p>
                  <p className="text-white/40 text-xs tracking-wide mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}