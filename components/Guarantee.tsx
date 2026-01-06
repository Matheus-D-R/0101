import React from 'react';
import { COPY } from '../constants';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-brand-50 p-8 rounded-2xl">
          <div className="flex-shrink-0">
             <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-brand-500 shadow-lg">
                <ShieldCheck className="w-12 h-12 text-brand-600" />
             </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{COPY.guarantee.title}</h3>
            <p className="text-slate-600">{COPY.guarantee.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};