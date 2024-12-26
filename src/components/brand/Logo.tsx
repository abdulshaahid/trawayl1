import React from 'react';
import tealLogo from './teal.png'; // Adjust the file name if needed

export default function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src={tealLogo} 
        alt="Logo" 
        className="h-6 w-10 object-contain" // Adjust styling as needed
      />
    </div>
  );
}
