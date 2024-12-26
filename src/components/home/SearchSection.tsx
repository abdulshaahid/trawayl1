import React from 'react';
import { Search } from 'lucide-react';

export default function SearchSection() {
  return (
    <div className="pt-20 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Where to?</h1>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:border-[#00AA6C] hover:text-[#00AA6C]">
            Discover All
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:border-[#00AA6C] hover:text-[#00AA6C]">
            Adventure Tours
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:border-[#00AA6C] hover:text-[#00AA6C]">
            Cultural Trips
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:border-[#00AA6C] hover:text-[#00AA6C]">
            Family Packages
          </button>
          <button className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:border-[#00AA6C] hover:text-[#00AA6C]">
            Group Tours
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search destinations, tours, activities..."
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#00AA6C] focus:border-[#00AA6C]"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#00AA6C] text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-[#008C5B] transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}