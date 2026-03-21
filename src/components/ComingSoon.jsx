import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="kontakt" className="bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/9ffb5aa5a_IMG_4526.jpg"
          alt="Gamechanger nova kolekcija"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.1)' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 py-36 text-center">
        <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-8">Ekskluzivno</p>
        <h2
          className="text-white font-black uppercase leading-none mb-6"
          style={{ fontSize: 'clamp(3rem, 10vw, 9rem)', letterSpacing: '-0.02em' }}
        >
          Uskoro
        </h2>
        <p className="text-white/35 text-sm leading-7 mb-14 font-light max-w-md mx-auto">
          Nova kolekcija stiže uskoro. Upišite email i budite prvi koji saznaju.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
              <Check size={16} className="text-white" />
            </div>
            <p className="text-white/50 text-sm tracking-wide font-light">Hvala! Bićete prvi obavešteni.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email adresa"
              required
              className="flex-1 bg-transparent border border-white/20 sm:border-r-0 text-white placeholder-white/25 text-sm px-5 py-4 focus:outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-black text-[9px] tracking-[0.35em] uppercase px-7 py-4 hover:bg-white/90 transition-colors flex items-center justify-center gap-2 font-bold"
            >
              Prijavi se <ArrowRight size={12} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}