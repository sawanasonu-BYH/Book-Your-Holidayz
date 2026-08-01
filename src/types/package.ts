export interface Package {
  id: string;
  slug: string;

  title: string;

  destination: string;

  country: string;

  duration: string;

  price: number;

  image: string;

  featured: boolean;

  active: boolean;

  created_at: string;
}