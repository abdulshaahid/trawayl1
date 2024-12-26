import React from 'react';
import SearchForm from './SearchForm';

export default function HeroSection() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Beautiful landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-white">
            Explore curated travel packages for unforgettable experiences
          </p>
        </div>

        <SearchForm />
      </div>
    </div>
  );
}