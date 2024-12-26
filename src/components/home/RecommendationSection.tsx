import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function RecommendationSection() {
  return (
    <div className="bg-[#F2F1FF] py-12 rounded-3xl mx-4 my-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Get custom recs for your next trip</h2>
            <p className="text-gray-600 mb-6">Take our quick quiz to get personalized package recommendations based on your travel style.</p>
            <button className="bg-[#00AA6C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#008C5B] transition-colors">
              Start quiz
            </button>
          </div>
          
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1512100356356-de1b84283e18"
              alt="Travel quiz preview"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}