export interface Wisata {
  id: number;
  name: string;
  description: string;
  price: number;
  includes: string[];
  image?: string;
}

export interface WisataPackage {
  id: number;
  name: string;
  price: string;
  includes: string[];
  image?: string;
}

export interface WisataLocation {
  title: string;
  description: string;
  image: string;
}

export interface WisataItem {
  id: number;
  title: string;
  name: string;
  description: string;
  price: number;
  image: string;
  includes: string[];
}
