import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
           <h4 className="text-white font-bold text-xl mb-2">Ebook 600+ Receitas</h4>
           <p className="text-sm">Transformando cozinhas em todo o Brasil.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
        </div>

        <div className="text-xs text-slate-600 max-w-2xl mx-auto space-y-2">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          <p>
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
            Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
          <p>
            Os resultados podem variar de pessoa para pessoa. Este produto não garante a obtenção de resultados. 
            Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
        </div>
      </div>
    </footer>
  );
};