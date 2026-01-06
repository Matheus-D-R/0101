import React from 'react';
import { PRICE_NEW, PRICE_OLD, CHECKOUT_URL } from '../constants';
import { usePixel } from '../hooks/usePixel';
import { Check, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  const { trackPurchase } = usePixel();

  const handleBuy = () => {
    trackPurchase();
    // Simulate redirection
    window.location.href = CHECKOUT_URL;
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Oferta Especial por Tempo Limitado</h2>
          <p className="text-slate-300 text-lg mb-12">Não perca a oportunidade de transformar sua alimentação por menos de R$ 1,00 por dia.</p>

          <div className="bg-white text-slate-900 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
            {/* Ribbon */}
            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-12 py-3 transform rotate-45 translate-x-14 translate-y-6 shadow-md">
              -70% OFF
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-left">
                <p className="text-slate-500 text-lg line-through font-medium mb-1">De {PRICE_OLD}</p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-5xl lg:text-7xl font-extrabold text-brand-600 tracking-tight">{PRICE_NEW}</span>
                  <span className="text-slate-500 font-medium mb-2">/único</span>
                </div>
                <p className="text-green-600 font-bold bg-green-50 inline-block px-3 py-1 rounded-md text-sm mb-6">
                  ⚡ Pagamento Único • Acesso Vitalício
                </p>
                
                <ul className="space-y-3 mb-8">
                   {['Acesso Imediato', '600+ Receitas', 'Garantia de 7 Dias', 'Suporte Prioritário'].map((item, i) => (
                     <li key={i} className="flex items-center gap-2">
                       <div className="bg-green-100 rounded-full p-0.5">
                         <Check className="w-4 h-4 text-green-600" />
                       </div>
                       <span className="font-medium text-slate-700">{item}</span>
                     </li>
                   ))}
                </ul>
              </div>

              <div className="flex-1 w-full">
                <button 
                  onClick={handleBuy}
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-6 px-8 rounded-xl shadow-lg shadow-green-600/30 flex items-center justify-center gap-2 group transition-all animate-bounce-subtle"
                >
                  COMPRAR AGORA
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 grayscale opacity-60">
                  <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-8" />
                  <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-8" />
                  <img src="https://img.icons8.com/color/48/000000/pix.png" alt="Pix" className="h-8" />
                </div>
                <p className="text-xs text-slate-400 mt-4 text-center">Ambiente 100% seguro e criptografado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};