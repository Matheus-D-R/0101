import React from 'react';
import { BENEFITS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Benefits: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Por que este é o <span className="text-brand-600">único</span> livro de receitas que você precisa?</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Desenvolvido para simplificar sua vida na cozinha sem sacrificar o sabor.</p>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {BENEFITS.map((benefit) => (
            <div key={benefit.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};