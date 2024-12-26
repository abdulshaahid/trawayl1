import React from 'react';
import { Home, Search, Heart, User, Map } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function BottomNav() {
  const { isDarkMode } = useTheme();
  
  return (
    <nav className={`fixed bottom-0 left-0 right-0 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} py-2 px-4 z-50`}>
      <div className="max-w-lg mx-auto flex justify-between items-center">
        <NavItem icon={<Home />} label="Home" active />
        <NavItem icon={<Search />} label="Explore" />
        <NavItem icon={<Map />} label="Trips" />
        <NavItem icon={<Heart />} label="Saved" />
        <NavItem icon={<User />} label="Profile" />
      </div>
    </nav>
  );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  const { isDarkMode } = useTheme();
  
  return (
    <button className={`flex flex-col items-center space-y-1 ${active ? 'text-[#00AA6C]' : isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  );
}