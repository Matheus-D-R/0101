import React from 'react';
import { DELIVERABLES } from '../constants';
import { Gift } from 'lucide-react';

export const Deliverables: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">O que está incluso</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">Você terá acesso imediato a:</h2>
        </div>

        <div className="bg-orange-50 rounded-3xl p-8 lg:p-12 border border-orange-100 shadow-sm">
            <ul className="space-y-4">
              {DELIVERABLES.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 border-b border-orange-200/50 last:border-0 pb-4 last:pb-0">
                   <div className="bg-brand-500 rounded-full p-1">
                     <Gift className="w-4 h-4 text-white" />
                   </div>
                   <span className="text-lg font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-orange-200 text-center">
              <p className="text-sm text-slate-500">📥 Formato 100% Digital (PDF) • Compatível com Celular, Tablet e Computador</p>
            </div>
        </div>
      </div>
    </section>
  );
};