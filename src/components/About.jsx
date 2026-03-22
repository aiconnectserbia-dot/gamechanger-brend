import React from 'react';

export default function About() {
  return (
    <section id="o-brendu" className="bg-black py-16 md:py-28 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-24 items-center">

          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[1/1] md:aspect-[3/4] overflow-hidden outline outline-1 outline-white/20 outline-offset-8">
              <img
                src="https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/e16a0b1df_IMG_4527.jpg"
                alt="Gamechanger The World Is Yours majica model"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-white/8 hidden md:block" />
          </div>

          {/* Right: Text */}
          <div>
            <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-4 md:mb-6">O brendu</p>
            <h2
              className="text-white font-black uppercase leading-none mb-6 md:mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              Brend majica<br />Gamechanger
            </h2>

            <div className="space-y-4 text-white/45 text-sm leading-7 font-light">
              <p>
                <span className="text-white font-semibold">GAMECHANGER</span> je srpski streetwear brend koji veruje da odeća govori pre nego što progovoriš. Svaka majica nosi poruku.
              </p>
              <p>
                Dizajni inspirisani kulturom, filmom, sportom i slobodom. Oversized fit, premium pamuk, štampa koja ne blijedi.
              </p>
              <p>
                Odeća za one koji menjaju pravila.
              </p>
            </div>

            <div className="mt-12 h-px bg-white/8" />

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { num: '100%', label: 'Premium pamuk' },
                { num: '2024', label: 'Osnovan u Srbiji' },
                { num: '∞', label: 'Sloboda stila' },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-white font-black text-2xl mb-1" style={{ letterSpacing: '-0.02em' }}>{s.num}</p>
                  <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}