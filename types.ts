export interface GlobalWindow extends Window {
  fbq: (type: string, eventName: string, params?: Record<string, unknown>) => void;
}

declare let window: GlobalWindow;

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