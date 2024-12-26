import React from 'react';
import { Search, Menu, User, Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#00BFA5]">Wanderlust</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#00BFA5]">Destinations</a>
            <a href="#" className="text-gray-600 hover:text-[#00BFA5]">Packages</a>
            <a href="#" className="text-gray-600 hover:text-[#00BFA5]">Community</a>
            <a href="#" className="text-gray-600 hover:text-[#00BFA5]">Rewards</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-6 h-6 text-gray-600" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}