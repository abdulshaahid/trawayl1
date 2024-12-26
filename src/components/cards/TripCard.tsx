import React from 'react';
import { Clock, MapPin, Users } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface TripCardProps {
  image: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  groupSize: number;
}

export default function TripCard({ image, title, location, duration, price, groupSize }: TripCardProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`rounded-2xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg transform hover:scale-105 transition-transform duration-300`}>
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-1 text-[#00AA6C]" />
            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{duration}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="w-4 h-4 mr-1 text-[#00AA6C]" />
            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Up to {groupSize}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            ${price}
          </span>
          <button className="bg-[#00AA6C] text-white px-4 py-2 rounded-full text-sm hover:bg-[#008C5B] transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}