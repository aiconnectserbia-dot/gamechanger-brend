import React from 'react';
import { Truck, RefreshCw, Star, Shield } from 'lucide-react';

const features = [
  { icon: Truck, label: 'Dostava u Srbiji', sub: 'Brza i pouzdana' },
  { icon: Star, label: 'Premium pamuk', sub: '100% kvalitet' },
  { icon: RefreshCw, label: 'Jednostavna zamena', sub: 'Bez komplikacija' },
  { icon: Shield, label: 'Sigurna narudžbina', sub: 'Instagram DM' },
];

export default function FeaturesStrip() {
  return (
    <div className="bg-black border-t border-b border-white/8">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
          {features.map(({ icon: Icon, label, sub }, i) => (
            <div key={i} className="flex items-center gap-3 md:gap-4 py-5 px-4 md:py-7 md:px-8">
              <Icon size={16} className="text-white/30 shrink-0" />
              <div>
                <p className="text-white text-[10px] md:text-xs font-semibold tracking-wide leading-tight">{label}</p>
                <p className="text-white/30 text-[9px] md:text-[10px] tracking-wide mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}