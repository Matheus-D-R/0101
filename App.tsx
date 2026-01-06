import React from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Audience } from './components/Audience';
import { Deliverables } from './components/Deliverables';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Guarantee } from './components/Guarantee';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Hero />
      <Benefits />
      <Audience />
      <Deliverables />
      <Testimonials />
      <Guarantee />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;