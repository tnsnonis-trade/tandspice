export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  inquiry: string;
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  CONTACT = 'contact',
}