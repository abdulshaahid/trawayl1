import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

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

        <div className="bg-white rounded-lg shadow-xl p-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="When?"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Users className="absolute left-3 top-3 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent appearance-none">
                <option>2 Travelers</option>
                <option>1 Traveler</option>
                <option>3 Travelers</option>
                <option>4+ Travelers</option>
              </select>
            </div>

            <button className="bg-[#00BFA5] text-white py-2 px-6 rounded-lg hover:bg-[#00AB95] transition-colors flex items-center justify-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}