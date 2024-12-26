import React from 'react';

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <a href="#" className="text-gray-600 hover:text-[#00BFA5]">Destinations</a>
      <a href="#" className="text-gray-600 hover:text-[#00BFA5]">Packages</a>
      <a href="#" className="text-gray-600 hover:text-[#00BFA5]">Community</a>
      <a href="#" className="text-gray-600 hover:text-[#00BFA5]">Rewards</a>
    </div>
  );
}