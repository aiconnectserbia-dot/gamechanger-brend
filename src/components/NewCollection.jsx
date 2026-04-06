import React, { useState } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import CartDrawer from './CartDrawer';

const newProducts = [
  { id: 101, name: 'Eternal Flame', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486461/GAMECHANGER_tjroyw.png', alt: 'Gamechanger Eternal Flame majica', tag: 'Novo' },
  { id: 102, name: 'Midnight Rebel', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486461/GAMECHANGER_7_ppoqjl.png', alt: 'Gamechanger Midnight Rebel majica', tag: 'Novo' },
  { id: 103, name: 'Shadow Protocol', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486462/GAMECHANGER_12_um1zau.png', alt: 'Gamechanger Shadow Protocol majica', tag: null },
  { id: 104, name: 'Golden Era', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486463/GAMECHANGER_1_qvqh7y.png', alt: 'Gamechanger Golden Era majica', tag: 'Bestseller' },
  { id: 105, name: 'Dark Matter', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486463/GAMECHANGER_8_twqjaa.png', alt: 'Gamechanger Dark Matter majica', tag: null },
  { id: 106, name: 'Phantom Vibes', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486463/GAMECHANGER_3_eo6dld.png', alt: 'Gamechanger Phantom Vibes majica', tag: 'Novo' },
  { id: 107, name: 'Silent Storm', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486464/GAMECHANGER_11_edoeck.png', alt: 'Gamechanger Silent Storm majica', tag: null },
  { id: 108, name: 'Empire State', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486465/GAMECHANGER_13_cxpen5.png', alt: 'Gamechanger Empire State majica', tag: 'Bestseller' },
  { id: 109, name: 'Raw Energy', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486466/GAMECHANGER_2_ouk860.png', alt: 'Gamechanger Raw Energy majica', tag: null },
  { id: 110, name: 'Neon Noir', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486466/GAMECHANGER_9_cofjhz.png', alt: 'Gamechanger Neon Noir majica', tag: 'Novo' },
  { id: 111, name: 'Velvet Rush', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486467/GAMECHANGER_6_dkzuh6.png', alt: 'Gamechanger Velvet Rush majica', tag: null },
  { id: 112, name: 'Chrome Dreams', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486468/GAMECHANGER_4_dqwma8.png', alt: 'Gamechanger Chrome Dreams majica', tag: null },
  { id: 113, name: 'Obsidian', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486468/GAMECHANGER_10_ymmahx.png', alt: 'Gamechanger Obsidian majica', tag: 'Bestseller' },
  { id: 114, name: 'Black Swan', price: '2.490 RSD', img: 'https://res.cloudinary.com/dnik9se1m/image/upload/v1775486468/GAMECHANGER_5_uahcfb.png', alt: 'Gamechanger Black Swan majica', tag: 'Novo' },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function NewCollection() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [sizeError, setSizeError] = useState(false);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const openProduct = (p) => {
    setSelectedProduct(p);
    setSelectedSize('');
    setSizeError(false);
  };

  const addToCart = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setCart(prev => {
      const existing = prev.find(i => i.id === selectedProduct.id && i.size === selectedSize);
      if (existing) return prev.map(i => i.id === selectedProduct.id && i.size === selectedSize ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...selectedProduct, size: selectedSize, qty: 1 }];
    });
    setSelectedProduct(null);
    setCartOpen(true);
  };

  const updateQty = (id, size, qty) => {
    if (qty <= 0) setCart(prev => prev.filter(i => !(i.id === id && i.size === size)));
    else setCart(prev => prev.map(i => i.id === id && i.size === size ? { ...i, qty } : i));
  };

  const remove = (id, size) => setCart(prev => prev.filter(i => !(i.id === id && i.size === size)));

  return (
    <>
      <section id="nova-kolekcija" className="bg-black py-16 md:py-28 px-4 md:px-12 border-t border-white/8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-10 md:mb-16">
            {/* Label */}
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-white/40" />
              <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase">SS 2026</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-6">
              <div>
                <h2 className="text-white font-black uppercase leading-none" style={{ fontSize: 'clamp(2.2rem, 7vw, 6rem)', letterSpacing: '-0.02em' }}>
                  Nova
                </h2>
                <h2 className="text-white font-black uppercase leading-none" style={{ fontSize: 'clamp(2.2rem, 7vw, 6rem)', letterSpacing: '-0.02em' }}>
                  Kolekcija
                </h2>
              </div>
              <div className="flex flex-col md:items-end gap-4">
                <p className="text-white/35 text-xs md:text-sm leading-relaxed max-w-xs font-light hidden md:block text-right">
                  Najsvežiji drop — ograničene količine.
                </p>
                <button
                  onClick={() => setCartOpen(true)}
                  className="relative flex items-center gap-2 border border-white/15 px-4 py-2.5 text-white/60 hover:text-white hover:border-white/40 transition-colors w-fit"
                >
                  <ShoppingBag size={15} />
                  <span className="text-[9px] tracking-[0.3em] uppercase">Korpa</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-white text-black text-[8px] font-black w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
            <div className="mt-6 md:mt-8 h-px bg-white/8" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
            {newProducts.map((p, index) => (
              <div
                key={p.id}
                className="group cursor-pointer"
                onClick={() => openProduct(p)}
              >
                <div className="relative overflow-hidden bg-zinc-950 mb-3 aspect-[3/4]">
                  <img src={p.img} alt={p.alt} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
                  {p.tag && (
                    <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-white text-black text-[7px] md:text-[8px] tracking-[0.25em] uppercase px-2 py-0.5 md:px-2.5 md:py-1 font-bold">
                      {p.tag}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-400" />
                  <div className="absolute bottom-0 inset-x-0 px-3 pb-3 md:px-4 md:pb-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-white text-black text-[8px] md:text-[9px] tracking-[0.3em] uppercase py-2.5 md:py-3 font-bold">
                      Dodaj u korpu
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-white text-xs md:text-sm font-medium leading-tight mb-0.5 truncate">{p.name}</p>
                  <p className="text-white/35 text-[10px] md:text-xs tracking-wide">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size picker modal */}
      {selectedProduct && (
        <>
          <div className="fixed inset-0 bg-black/75 z-40 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} />
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
            <div className="bg-zinc-950 border border-white/10 w-full max-w-sm">
              <div className="flex gap-4 p-5 border-b border-white/8">
                <div className="w-20 h-24 bg-zinc-900 flex-shrink-0 overflow-hidden">
                  <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{selectedProduct.name}</p>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">2.490 RSD</p>
                </div>
                <button onClick={() => setSelectedProduct(null)} className="text-white/40 hover:text-white transition-colors self-start">
                  <X size={18} />
                </button>
              </div>
              <div className="p-5">
                <p className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-3">Izaberi veličinu</p>
                <div className="grid grid-cols-6 gap-2 mb-5">
                  {sizes.map(s => (
                    <button
                      key={s}
                      onClick={() => { setSelectedSize(s); setSizeError(false); }}
                      className={`py-2.5 text-[10px] font-bold border transition-colors ${selectedSize === s ? 'bg-white text-black border-white' : 'bg-transparent text-white/50 border-white/15 hover:border-white/40 hover:text-white'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {sizeError && <p className="text-red-400 text-[10px] mb-3 tracking-wide">Molimo izaberi veličinu.</p>}
                <button
                  onClick={addToCart}
                  className="w-full bg-white text-black text-[9px] tracking-[0.35em] uppercase py-3.5 font-bold hover:bg-white/90 transition-colors"
                >
                  Dodaj u korpu
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateQty}
          onRemove={remove}
        />
      )}
    </>
  );
}