import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="kontakt" className="bg-black relative overflow-hidden py-32 px-6">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/8d334e862_IMG_4508.jpg"
          alt="Gamechanger nova kolekcija uskoro - majice Srbija"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.12)' }}
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />

      {/* Decorative large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-bebas text-[20vw] text-white/[0.03] tracking-widest select-none whitespace-nowrap">
          USKORO
        </span>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-6">Ekskluzivno</p>
        <h2 className="font-bebas text-6xl md:text-8xl text-white tracking-wide leading-none mb-6">
          Uskoro nova<br />kolekcija
        </h2>
        <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-md mx-auto">
          Budi prvi koji saznaje. Upišite email adresu i dobijte obaveštenje čim nova kolekcija majica bude dostupna.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
              <Check size={20} className="text-white" />
            </div>
            <p className="text-white/60 text-sm tracking-wide">Hvala! Bićete prvi obavešteni.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Vaša email adresa"
              required
              className="flex-1 bg-white/5 border border-white/20 border-r-0 text-white placeholder-white/30 text-sm px-5 py-4 focus:outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-black text-xs tracking-[0.2em] uppercase px-6 py-4 hover:bg-white/90 transition-colors flex items-center justify-center gap-2 font-medium whitespace-nowrap"
            >
              Prijavi se
              <ArrowRight size={14} />
            </button>
          </form>
        )}

        <p className="text-white/20 text-xs mt-6 tracking-wide">
          Bez spama. Samo nova kolekcija odeće Srbija.
        </p>
      </div>
    </section>
  );
}