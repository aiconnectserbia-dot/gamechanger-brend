import React, { useState } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import CartDrawer from './CartDrawer';

const products = [
  { id: 1, name: 'Mona Lisa', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/2bfe3c430_IMG_4510.jpg', alt: 'Gamechanger majica Mona Lisa', tag: 'Bestseller' },
  { id: 2, name: 'The Fighter', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/f36007ada_IMG_4511.jpg', alt: 'Gamechanger majica The Fighter', tag: null },
  { id: 3, name: 'El Diego', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/43dbed585_IMG_4512.jpg', alt: 'Gamechanger majica El Diego', tag: 'Novo' },
  { id: 4, name: 'No Smoking Club', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/1c5470cee_IMG_4514.jpg', alt: 'Gamechanger majica No Smoking Club', tag: null },
  { id: 5, name: 'Tutto Passa', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/5ce97a8f5_IMG_4515.jpg', alt: 'Gamechanger majica Tutto Passa', tag: null },
  { id: 6, name: 'Be Unique', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/45d599fd1_IMG_4516.jpg', alt: 'Gamechanger majica Be Unique', tag: 'Bestseller' },
  { id: 7, name: 'Brad', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/ec9584fb3_IMG_4518.jpg', alt: 'Gamechanger majica Brad', tag: null },
  { id: 8, name: 'Martini', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/763748073_IMG_4519.jpg', alt: 'Gamechanger majica Martini', tag: 'Novo' },
  { id: 9, name: 'Enjoy the Process', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/84fcc51f7_IMG_4506.jpg', alt: 'Gamechanger majica Enjoy the Process', tag: 'Novo' },
  { id: 10, name: 'Good Vibes', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/c5e50cc40_IMG_4507.jpg', alt: 'Gamechanger majica Good Vibes', tag: null },
  { id: 11, name: 'One Dollar', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/8ee812eec_IMG_4508.jpg', alt: 'Gamechanger majica One Dollar', tag: null },
  { id: 12, name: 'High Rollers', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/f072377a0_IMG_4509.jpg', alt: 'Gamechanger majica High Rollers', tag: null },
  { id: 13, name: 'Napoli', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/80fb67450_IMG_4517.jpg', alt: 'Gamechanger majica Napoli', tag: 'Novo' },
  { id: 14, name: 'Hustle', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/b165d5882_IMG_4520.jpg', alt: 'Gamechanger majica Hustle', tag: null },
  { id: 15, name: 'Built on Failure', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/26f433b5f_IMG_4521.jpg', alt: 'Gamechanger majica Built on Failure', tag: null },
  { id: 16, name: 'Formula', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/7bb7553fb_IMG_4522.jpg', alt: 'Gamechanger majica Formula', tag: null },
  { id: 17, name: 'No 9 to 5', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/e4d942f47_IMG_4523.jpg', alt: 'Gamechanger majica No 9 to 5', tag: 'Bestseller' },
  { id: 18, name: 'Calm Down', price: '2.390 RSD', img: 'https://media.base44.com/images/public/69bedb477b225d6b7ba2279f/5131aa5d3_IMG_4524.jpg', alt: 'Gamechanger majica Calm Down', tag: null },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const INITIAL_VISIBLE = 8;

export default function Collection() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [sizeError, setSizeError] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, INITIAL_VISIBLE);

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
      <section id="kolekcija" className="bg-black py-16 md:py-28 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-10 md:mb-16">
            <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-3">SS 2025</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-6">
              <h2 className="text-white font-black uppercase leading-none" style={{ fontSize: 'clamp(2.2rem, 7vw, 6rem)', letterSpacing: '-0.02em' }}>
                Kolekcija
              </h2>
              <div className="flex items-center gap-4">
                <p className="text-white/35 text-xs md:text-sm leading-relaxed max-w-xs font-light hidden md:block">
                  Brend majica Gamechanger — svaki dizajn nosi priču.
                </p>
                {/* Cart button */}
                <button
                  onClick={() => setCartOpen(true)}
                  className="relative flex items-center gap-2 border border-white/15 px-4 py-2.5 text-white/60 hover:text-white hover:border-white/40 transition-colors"
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
            {visibleProducts.map((p) => (
              <div key={p.id} className="group cursor-pointer" onClick={() => openProduct(p)}>
                <div className="relative overflow-hidden bg-zinc-950 aspect-[3/4] mb-3">
                  <img src={p.img} alt={p.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
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
          {/* Show more / less */}
          {!showAll && products.length > INITIAL_VISIBLE && (
            <div className="flex justify-center mt-14">
              <button
                onClick={() => setShowAll(true)}
                className="border border-white/20 text-white/60 hover:text-white hover:border-white/50 text-[10px] tracking-[0.4em] uppercase px-10 py-4 transition-colors"
              >
                Pogledaj celu kolekciju
              </button>
            </div>
          )}
          {showAll && (
            <div className="flex justify-center mt-14">
              <button
                onClick={() => { setShowAll(false); document.getElementById('kolekcija').scrollIntoView({ behavior: 'smooth' }); }}
                className="text-white/30 hover:text-white/60 text-[10px] tracking-[0.4em] uppercase transition-colors border-b border-white/15 hover:border-white/40 pb-1"
              >
                Prikaži manje ↑
              </button>
            </div>
          )}
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
                  <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">2.390 RSD</p>
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

      {/* Cart */}
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