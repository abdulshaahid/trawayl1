import React from 'react';
import { Star, Clock, Users } from 'lucide-react';
import { Package } from '../../types/package';

interface PackageCardProps {
  package: Package;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-[#00AA6C]">
          ${pkg.price}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{pkg.title}</h3>
          <div className="flex items-center text-[#00AA6C]">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm">{pkg.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-gray-600 text-sm mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>Max {pkg.maxGroupSize} people</span>
          </div>
        </div>

        <button className="w-full bg-[#00AA6C] text-white py-2 rounded-lg hover:bg-[#008C5B] transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}