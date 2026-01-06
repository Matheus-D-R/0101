import React from 'react';
import { ChefHat, Clock, DollarSign, Heart, BookOpen, Star, CheckCircle } from 'lucide-react';
import { Benefit, Testimonial } from './types';

// Pricing
export const PRICE_OLD = "R$ 97,00";
export const PRICE_NEW = "R$ 29,90";
export const CHECKOUT_URL = "#checkout"; // Placeholder for external checkout

// Copywriting
export const COPY = {
  hero: {
    headline: "Transforme Ingredientes Simples em Refeições de Chef Todos os Dias",
    subheadline: "Descubra mais de 600 receitas exclusivas, fáceis e econômicas. Pare de desperdiçar dinheiro com delivery e surpreenda sua família hoje mesmo.",
    cta: "QUERO ACESSO IMEDIATO AO EBOOK"
  },
  guarantee: {
    days: 7,
    title: "Risco Zero: 7 Dias de Garantia",
    text: "Se você não amar as receitas, nós devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia."
  }
};

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Mais de 600 Receitas",
    description: "Um acervo gigantesco para você nunca mais repetir pratos ou ficar sem ideias do que cozinhar.",
    icon: <BookOpen className="w-8 h-8 text-brand-600" />
  },
  {
    id: 2,
    title: "Economize Tempo",
    description: "Receitas práticas pensadas para o dia a dia corrido. Menos tempo na cozinha, mais tempo para você.",
    icon: <Clock className="w-8 h-8 text-brand-600" />
  },
  {
    id: 3,
    title: "Economia Real",
    description: "Ingredientes acessíveis que você encontra em qualquer mercado. Diga adeus ao desperdício.",
    icon: <DollarSign className="w-8 h-8 text-brand-600" />
  },
  {
    id: 4,
    title: "Foco na Saúde",
    description: "Opções balanceadas, low carb e fitness para quem quer comer bem sem abrir mão do sabor.",
    icon: <Heart className="w-8 h-8 text-brand-600" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Souza",
    location: "São Paulo, SP",
    rating: 5,
    text: "Eu gastava horrores com iFood. Comprei o ebook e na primeira semana já economizei o triplo do valor pago. As receitas são deliciosas!",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    location: "Curitiba, PR",
    rating: 5,
    text: "Sou solteiro e não sabia fritar um ovo. O passo a passo é tão simples que hoje faço jantares para meus amigos e todos elogiam.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Fernanda Lima",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "O que mais amei foi a variedade. Tem doce, salgado, fit... finalmente consegui manter a dieta sem comer frango com batata doce todo dia.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const AUDIENCE_ITEMS = [
  "Pessoas que buscam praticidade no dia a dia",
  "Quem quer emagrecer comendo coisas gostosas",
  "Quem deseja economizar no mercado",
  "Iniciantes na cozinha ou chefs experientes"
];

export const DELIVERABLES = [
  "Ebook Digital Completo (PDF em Alta Resolução)",
  "Acesso Vitalício ao Conteúdo",
  "Receitas Organizadas por Categorias",
  "Bônus: Guia de Temperos Naturais",
  "Suporte para Dúvidas"
];
