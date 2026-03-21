import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, Truck, Shield } from 'lucide-react';
import OrderModal from './OrderModal';

export default function CartDrawer({ cart, onClose, onUpdateQty, onRemove }) {
  const [showOrder, setShowOrder] = useState(false);

  const total = cart.reduce((sum, item) => sum + 2390 * item.qty, 0);

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 border-l border-white/8 z-50 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} className="text-white" />
            <span className="text-white text-sm tracking-[0.2em] uppercase font-semibold">Korpa</span>
            <span className="text-white/40 text-xs">({cart.reduce((s, i) => s + i.qty, 0)})</span>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {cart.length === 0 && (
            <p className="text-white/30 text-sm text-center mt-16 tracking-wide">Korpa je prazna.</p>
          )}
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex gap-4 pb-5 border-b border-white/6">
              <div className="w-20 h-24 bg-zinc-900 flex-shrink-0 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{item.name}</p>
                <p className="text-white/35 text-[10px] tracking-[0.3em] uppercase mt-0.5">Veličina: {item.size}</p>
                <p className="text-white text-sm font-bold mt-2">2.390 RSD</p>
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => onUpdateQty(item.id, item.size, item.qty - 1)}
                    className="w-6 h-6 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
                  >
                    <Minus size={10} />
                  </button>
                  <span className="text-white text-sm w-4 text-center">{item.qty}</span>
                  <button
                    onClick={() => onUpdateQty(item.id, item.size, item.qty + 1)}
                    className="w-6 h-6 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
                  >
                    <Plus size={10} />
                  </button>
                  <button
                    onClick={() => onRemove(item.id, item.size)}
                    className="ml-auto text-white/25 hover:text-white/60 transition-colors text-[10px] tracking-widest uppercase"
                  >
                    Ukloni
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-6 py-6 border-t border-white/8 space-y-4">
            {/* Perks */}
            <div className="flex gap-4 text-[9px] tracking-[0.25em] uppercase text-white/30">
              <span className="flex items-center gap-1.5"><Truck size={10} /> Plaćanje pouzećem</span>
              <span className="flex items-center gap-1.5"><Shield size={10} /> Sigurna dostava</span>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-xs tracking-[0.2em] uppercase">Ukupno</span>
              <span className="text-white font-black text-xl" style={{ letterSpacing: '-0.02em' }}>
                {total.toLocaleString('sr-RS')} RSD
              </span>
            </div>

            <p className="text-white/25 text-[9px] leading-relaxed">
              * Dostava se naplaćuje posebno. Plaćanje isključivo pouzećem pri preuzimanju paketa.
            </p>

            <button
              onClick={() => setShowOrder(true)}
              className="w-full bg-white text-black text-[10px] tracking-[0.35em] uppercase py-4 font-bold hover:bg-white/90 transition-colors"
            >
              Završi porudžbinu
            </button>
          </div>
        )}
      </div>

      {showOrder && (
        <OrderModal cart={cart} total={total} onClose={() => setShowOrder(false)} onSuccess={onClose} />
      )}
    </>
  );
}