
import { Product } from './types';

export const COMPANY_NAME = "T & Spices L.L.C.";
export const COMPANY_EMAIL = "tns.nonis@gmail.com";
export const COMPANY_ADDRESS = "123 Spice Route , RAK District, RAK, UAE";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Tea Collection",
    description: "Hand-picked high-grown tea leaves with a delicate aroma.",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 2,
    name: "Organic Black Pepper",
    description: "Bold and pungent peppercorns sun-dried to perfection.",
    image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 3,
    name: "True Cinnamon Sticks",
    description: "Sweet, aromatic cinnamon harvested from the finest bark.",
    image: "https://images.unsplash.com/photo-1607430866111-3f2b5804f850?auto=format&fit=crop&q=80&w=1600"
  },
  {
    id: 4,
    name: "Green Cardamom Pods",
    description: "Queen of spices, known for its intense flavor and fragrance.",
    image: "https://images.unsplash.com/photo-1511252810826-a669143b60bf?auto=format&fit=crop&q=80&w=1600"
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
