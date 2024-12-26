export interface Package {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
  duration: string;
  location: string;
  maxGroupSize: number;
  type: 'adventure' | 'cultural' | 'family' | 'group';
  description: string;
  included: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}