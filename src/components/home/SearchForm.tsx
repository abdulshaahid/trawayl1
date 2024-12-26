import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export default function SearchForm() {
  return (
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
  );
}