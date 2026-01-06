import React from 'react';

// Extend the global Window interface to include Facebook Pixel
declare global {
  interface Window {
    fbq: (type: string, eventName: string, params?: Record<string, unknown>) => void;
    _fbq?: any;
  }
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}