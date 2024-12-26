import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import SearchSection from './components/home/SearchSection';
import RecommendationSection from './components/home/RecommendationSection';
import ExperienceSection from './components/home/ExperienceSection';
import BottomNav from './components/navigation/BottomNav';
import TripCard from './components/cards/TripCard';

const featuredTrips = [
  {
    image: 'https://images.unsplash.com/photo-1560860446-c821e910a0c7',
    title: 'Moroccan Cultural Tour',
    location: 'Fes, Morocco',
    duration: '7 days',
    price: 899,
    groupSize: 8
  },
  {
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3',
    title: 'Desert Safari Adventure',
    location: 'Dubai, UAE',
    duration: '3 days',
    price: 599,
    groupSize: 6
  },
  {
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9',
    title: 'Venice Food Tour',
    location: 'Venice, Italy',
    duration: '5 days',
    price: 799,
    groupSize: 10
  }
];

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="pb-20">
          <SearchSection />
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Featured Trips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTrips.map((trip, index) => (
                <TripCard key={index} {...trip} />
              ))}
            </div>
          </div>
          <RecommendationSection />
          <ExperienceSection />
        </main>
        <BottomNav />
      </div>
    </ThemeProvider>
  );
}