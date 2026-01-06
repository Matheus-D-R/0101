import { useCallback } from 'react';

export const usePixel = () => {
  const trackPurchase = useCallback(() => {
    // Check if window and fbq exist before calling
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('Pixel: Purchase event fired');
      window.fbq('track', 'Purchase', {
        value: 29.90,
        currency: 'BRL',
        content_name: 'Ebook 600+ Receitas',
        content_type: 'product'
      });
    } else {
      // Fallback/Warning if pixel is blocked by adblocker or not loaded
      console.warn('Meta Pixel not loaded or blocked by extension');
    }
  }, []);

  return { trackPurchase };
};