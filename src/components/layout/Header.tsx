import React from 'react';
import { Search, Menu, User } from 'lucide-react';
import Logo from '../brand/Logo';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Logo />
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#00AA6C]">Discover All</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#00AA6C]">Hotels</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#00AA6C]">Things to Do</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-[#00AA6C]">Restaurants</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-700 hover:text-[#00AA6C]">Log in</button>
            <button className="bg-[#00AA6C] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#008C5B] transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}