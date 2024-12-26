export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  preferences: UserPreferences;
  rewardPoints: number;
  walletBalance: number;
  createdAt: Date;
}

export interface UserPreferences {
  budget: 'budget' | 'moderate' | 'luxury';
  tripTypes: TripType[];
  groupSize: number;
  interests: string[];
}

export type TripType = 'adventure' | 'leisure' | 'cultural' | 'family' | 'solo';