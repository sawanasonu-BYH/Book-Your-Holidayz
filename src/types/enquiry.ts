export interface HolidayPackage {
  id: string;

  slug: string;

  title: string;

  destination: string;

  country: string;

  duration: string;

  hotel: string;

  price: string;

  rating: number;

  reviews: number;

  image: string;

  gallery: string[];

  description: string;

  inclusions: string[];

  exclusions: string[];

  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];

  featured: boolean;

  active: boolean;

  createdAt: string;
}