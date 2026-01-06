import { useCallback } from 'react';

export const usePixel = () => {
  const trackPurchase = useCallback(() => {
    // Cast window to any to access fbq property
    const win = window as any;
    if (win.fbq) {
      console.log('Pixel: Purchase event fired');
      win.fbq('track', 'Purchase', {
        value: 29.90,
        currency: 'BRL',
        content_name: 'Ebook 600+ Receitas',
        content_type: 'product'
      });
    } else {
      console.warn('Meta Pixel not loaded');
    }
  }, []);

  return { trackPurchase };
};