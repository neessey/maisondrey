export interface Prestation {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  description: string;
  details: string[];
  quote: string;
}

export interface SignatureFood {
  id: string;
  title: string;
  frenchTitle: string;
  category: string;
  image: string;
  price: number;
  description: string;
  highlight: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export interface ProcessStep {
  id: string;
  num: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  type: 'image' | 'video';
  size: 'large' | 'small' | 'tall' | 'wide';
  caption: string;
}
