import React from 'react';
import { Heart, User, Menu } from 'lucide-react';

export default function UserActions() {
  return (
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
  );
}