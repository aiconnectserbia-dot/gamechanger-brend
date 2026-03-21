import React, { useState } from 'react';
import { X, Check, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function OrderModal({ cart, total, onClose, onSuccess }) {
  const [form, setForm] = useState({
    ime: '', prezime: '', email: '', telefon: '',
    adresa: '', grad: '', postanski: '', napomena: ''
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const itemsHtml = cart.map(item =>
      `<tr>
        <td style="padding:8px 12px;border-bottom:1px solid #222;">${item.name}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #222;text-align:center;">${item.size}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #222;text-align:center;">${item.qty}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #222;text-align:right;">${(2390 * item.qty).toLocaleString('sr-RS')} RSD</td>
      </tr>`
    ).join('');

    const body = `
      <div style="font-family:Arial,sans-serif;background:#0a0a0a;color:#fff;padding:40px;max-width:600px;margin:0 auto;">
        <h1 style="font-size:28px;font-weight:900;letter-spacing:-0.02em;margin-bottom:4px;">GAMECHANGER</h1>
        <p style="color:#555;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:32px;">Nova porudžbina</p>

        <h2 style="font-size:13px;letter-spacing:0.25em;text-transform:uppercase;color:#888;margin-bottom:16px;">Podaci kupca</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:32px;">
          <tr><td style="padding:6px 0;color:#555;font-size:12px;width:40%;">Ime i prezime</td><td style="padding:6px 0;font-size:13px;font-weight:600;">${form.ime} ${form.prezime}</td></tr>
          <tr><td style="padding:6px 0;color:#555;font-size:12px;">Email</td><td style="padding:6px 0;font-size:13px;">${form.email}</td></tr>
          <tr><td style="padding:6px 0;color:#555;font-size:12px;">Telefon</td><td style="padding:6px 0;font-size:13px;">${form.telefon}</td></tr>
          <tr><td style="padding:6px 0;color:#555;font-size:12px;">Adresa</td><td style="padding:6px 0;font-size:13px;">${form.adresa}</td></tr>
          <tr><td style="padding:6px 0;color:#555;font-size:12px;">Grad</td><td style="padding:6px 0;font-size:13px;">${form.grad}</td></tr>
          <tr><td style="padding:6px 0;color:#555;font-size:12px;">Poštanski broj</td><td style="padding:6px 0;font-size:13px;">${form.postanski}</td></tr>
          ${form.napomena ? `<tr><td style="padding:6px 0;color:#555;font-size:12px;">Napomena</td><td style="padding:6px 0;font-size:13px;">${form.napomena}</td></tr>` : ''}
        </table>

        <h2 style="font-size:13px;letter-spacing:0.25em;text-transform:uppercase;color:#888;margin-bottom:16px;">Porudžbina</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <thead>
            <tr style="border-bottom:1px solid #333;">
              <th style="padding:8px 12px;text-align:left;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#555;">Majica</th>
              <th style="padding:8px 12px;text-align:center;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#555;">Vel.</th>
              <th style="padding:8px 12px;text-align:center;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#555;">Kom.</th>
              <th style="padding:8px 12px;text-align:right;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#555;">Cena</th>
            </tr>
          </thead>
          <tbody>${itemsHtml}</tbody>
        </table>

        <div style="border-top:1px solid #333;padding-top:16px;text-align:right;">
          <span style="color:#555;font-size:12px;text-transform:uppercase;letter-spacing:0.2em;">Ukupno: </span>
          <span style="font-size:22px;font-weight:900;letter-spacing:-0.02em;">${total.toLocaleString('sr-RS')} RSD</span>
        </div>
        <p style="color:#444;font-size:11px;margin-top:8px;text-align:right;">+ Dostava po cenovniku kurirske službe · Plaćanje pouzećem</p>
      </div>
    `;

    await base44.integrations.Core.SendEmail({
      to: 'matejakrstic512@gmail.com',
      subject: `🛍️ Nova porudžbina — ${form.ime} ${form.prezime}`,
      body,
    });

    setLoading(false);
    setDone(true);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
        <div className="bg-zinc-950 border border-white/10 w-full max-w-lg max-h-[95vh] overflow-y-auto">

          {/* Header */}
          <div className="sticky top-0 bg-zinc-950 flex items-center justify-between px-6 py-5 border-b border-white/8 z-10">
            <p className="text-white text-sm tracking-[0.2em] uppercase font-semibold">Podaci za dostavu</p>
            <button onClick={onClose} className="text-white/40 hover:text-white transition-colors"><X size={18} /></button>
          </div>

          {done ? (
            <div className="px-6 py-16 text-center">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center mx-auto mb-5">
                <Check size={20} className="text-white" />
              </div>
              <h3 className="text-white font-black text-xl uppercase tracking-tight mb-2">Porudžbina primljena!</h3>
              <p className="text-white/35 text-sm leading-7 max-w-xs mx-auto">
                Javićemo ti se uskoro na <span className="text-white/60">{form.email}</span> ili telefon radi potvrde i dogovora oko dostave.
              </p>
              <button
                onClick={onSuccess}
                className="mt-10 bg-white text-black text-[9px] tracking-[0.35em] uppercase px-8 py-3.5 font-bold hover:bg-white/90 transition-colors"
              >
                Zatvori
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
              
              {/* Order summary */}
              <div className="bg-black/60 border border-white/6 p-4 space-y-2">
                <p className="text-white/30 text-[9px] tracking-[0.4em] uppercase mb-3">Tvoja porudžbina</p>
                {cart.map(item => (
                  <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
                    <span className="text-white/60">{item.name} <span className="text-white/30">× {item.qty} ({item.size})</span></span>
                    <span className="text-white font-medium">{(2390 * item.qty).toLocaleString('sr-RS')} RSD</span>
                  </div>
                ))}
                <div className="pt-2 mt-2 border-t border-white/8 flex justify-between">
                  <span className="text-white/40 text-xs uppercase tracking-widest">Ukupno</span>
                  <span className="text-white font-black">{total.toLocaleString('sr-RS')} RSD</span>
                </div>
                <p className="text-white/20 text-[9px] pt-1">Plaćanje pouzećem · Dostava kurirskom službom</p>
              </div>

              {/* Personal info */}
              <div>
                <p className="text-white/30 text-[9px] tracking-[0.4em] uppercase mb-3">Lični podaci</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-white/40 text-[9px] tracking-widest uppercase block mb-1.5">Ime *</label>
                    <input required value={form.ime} onChange={e => set('ime', e.target.value)} placeholder="Marko"
                      className="w-full bg-black border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 placeholder-white/20 transition-colors" />
                  </div>
                  <div>
                    <label className="text-white/40 text-[9px] tracking-widest uppercase block mb-1.5">Prezime *</label>
                    <input required value={form.prezime} onChange={e => set('prezime', e.target.value)} placeholder="Jovanović"
                      className="w-full bg-black border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 placeholder-white/20 transition-colors" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-white/40 text-[9px] tracking-widest uppercase block mb-1.5">Email *</label>
                <input required type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="marko@gmail.com"
                  className="w-full bg-black border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 placeholder-white/20 transition-colors" />
              </div>

              <div>
                <label className="text-white/40 text-[9px] tracking-widest uppercase block mb-1.5">Broj telefona *</label>
                <input required value={form.telefon} onChange={e => set('telefon', e.target.value)} placeholder="+381 60 123 4567"
                  className="w-full bg-black border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 placeholder-white/20 transition-colors" />
              </div>

              {/* Address */}
              <div>
                <p className="text-white/30 text-[9px] tracking-[0.4em] uppercase mb-3">Adresa dostave</p>
                <div className="space-y-3">
                  <div>
                    <label className="text-white/40 text-[9px] tracking-widest uppercase block mb-1.5">Ulica i broj *</label>
                    <input required value={form.adresa} onChange={e => set('adresa', e.target.value)} placeholder="Cara Lazara 12"
                      className="w-full bg-black border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 placeholder-white/20 transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-white/40 text-[9px] tracking-widest uppercase block mb-1.5">Grad *</label>
                      <input required value={form.grad} onChange={e => set('grad', e.target.value)} placeholder="Beograd"
                        className="w-full bg-black border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 placeholder-white/20 transition-colors" />
                    </div>
                    <div>
                      <label className="text-white/40 text-[9px] tracking-widest uppercase block mb-1.5">Poštanski br. *</label>
                      <input required value={form.postanski} onChange={e => set('postanski', e.target.value)} placeholder="11000"
                        className="w-full bg-black border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 placeholder-white/20 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="text-white/40 text-[9px] tracking-widest uppercase block mb-1.5">Napomena (opciono)</label>
                <textarea value={form.napomena} onChange={e => set('napomena', e.target.value)} placeholder="Posebne instrukcije za dostavu..."
                  rows={2}
                  className="w-full bg-black border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-white/40 placeholder-white/20 transition-colors resize-none" />
              </div>

              {error && <p className="text-red-400 text-xs">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black text-[10px] tracking-[0.35em] uppercase py-4 font-bold hover:bg-white/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? <><Loader2 size={14} className="animate-spin" /> Slanje...</> : 'Potvrdi porudžbinu — Plaćanje pouzećem'}
              </button>

              <p className="text-white/20 text-[9px] text-center leading-relaxed pb-2">
                Slanjem potvrđuješ porudžbinu. Kontaktiraćemo te radi potvrde isporuke.
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}