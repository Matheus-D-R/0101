import React from 'react';
import { COPY, PRICE_NEW, PRICE_OLD } from '../constants';
import { usePixel } from '../hooks/usePixel';
import { ShoppingCart, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const { trackPurchase } = usePixel();

  const handleCtaClick = () => {
    trackPurchase();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 to-orange-100 pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-pulse">
              <Star className="w-4 h-4 fill-brand-600 text-brand-600" />
              Oferta por tempo limitado
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              {COPY.hero.headline.split(' ').map((word, i) => 
                ['Chef', 'Transforme', 'Refeições'].includes(word) ? 
                <span key={i} className="text-brand-600">{word} </span> : 
                <span key={i}>{word} </span>
              )}
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {COPY.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleCtaClick}
                className="group relative inline-flex items-center justify-center bg-brand-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-brand-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-brand-300"
              >
                <span>{COPY.hero.cta}</span>
                <ShoppingCart className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                 {[1,2,3,4].map(i => (
                   <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/50/50?random=${i+10}`} alt="User" />
                 ))}
              </div>
              <p>+10.000 cópias vendidas</p>
            </div>
          </div>

          {/* Visual Mockup */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-xl">
             <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
             <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
             
             <div className="relative transform hover:scale-105 transition-transform duration-500">
                {/* Book Cover Simulation */}
                <div className="relative aspect-[3/4] bg-slate-900 rounded-lg shadow-2xl border-l-4 border-l-slate-800 overflow-hidden flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10 pointer-events-none"></div>
                  <img 
                    src="https://picsum.photos/600/800?grayscale" 
                    alt="Capa do Ebook" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 text-white">
                    <span className="bg-brand-600 w-fit px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-2">Edição Premium</span>
                    <h2 className="font-serif text-4xl font-bold leading-none mb-1">600+</h2>
                    <h3 className="text-2xl font-light uppercase tracking-widest mb-4">Receitas Exclusivas</h3>
                    <div className="w-16 h-1 bg-brand-500"></div>
                  </div>
                  
                  {/* Price Tag Badge */}
                  <div className="absolute top-6 right-6 bg-yellow-400 text-slate-900 w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg transform rotate-12 z-30 font-bold border-4 border-white">
                    <span className="text-xs line-through opacity-70">{PRICE_OLD}</span>
                    <span className="text-xl leading-none">{PRICE_NEW}</span>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};