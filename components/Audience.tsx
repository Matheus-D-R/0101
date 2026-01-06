import React from 'react';
import { AUDIENCE_ITEMS } from '../constants';
import { CheckCircle } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fb923c 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src="https://picsum.photos/600/600?random=food" 
              alt="Cozinhando com facilidade" 
              className="rounded-2xl shadow-2xl border-4 border-brand-500/20"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Para quem é este material?</h2>
            <div className="space-y-6">
              {AUDIENCE_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors">
                  <CheckCircle className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-200 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};