import React from 'react';

export default function FeaturesStrip() {
  return (
    <div className="bg-black border-t border-b border-white/8 py-16 md:py-24 px-6 md:px-16 overflow-hidden relative">
      
      {/* Big background number */}
      <p
        className="absolute inset-0 flex items-center justify-center text-white/[0.03] font-black select-none pointer-events-none"
        style={{ fontSize: 'clamp(10rem, 35vw, 28rem)', letterSpacing: '-0.05em' }}
        aria-hidden="true"
      >
        GC
      </p>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-24">
          
          {/* Left — big quote */}
          <div className="flex-1">
            <p className="text-white/20 text-[9px] tracking-[0.5em] uppercase mb-5">Filozofija brenda</p>
            <h2
              className="text-white font-black uppercase leading-[0.9]"
              style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', letterSpacing: '-0.025em' }}
            >
              Odeća koja<br />govori pre<br />nego što<br className="md:hidden" /> progovoriš.
            </h2>
          </div>

          {/* Right — 3 stats */}
          <div className="flex flex-row md:flex-col gap-8 md:gap-6 md:text-right">
            {[
              { num: '8', label: 'unikatnih dizajna' },
              { num: '100%', label: 'premium pamuk' },
              { num: '1', label: 'srpski brend' },
            ].map((s, i) => (
              <div key={i}>
                <p
                  className="text-white font-black leading-none"
                  style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
                >
                  {s.num}
                </p>
                <p className="text-white/30 text-[9px] tracking-[0.35em] uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 md:mt-16 h-px bg-white/8" />
        <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase">Streetwear — Srbija — 2024</p>
          <p className="text-white/20 text-[9px] tracking-[0.4em] uppercase">Menjaj igru, ne igrača</p>
        </div>
      </div>
    </div>
  );
}