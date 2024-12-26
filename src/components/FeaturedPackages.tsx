import React from 'react';
import { Star, ArrowRight, ArrowLeft } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: "Bali Paradise Escape",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: 1299,
    rating: 4.8,
    duration: "8 days",
    location: "Bali, Indonesia"
  },
  {
    id: 2,
    title: "Swiss Alps Adventure",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    price: 2499,
    rating: 4.9,
    duration: "10 days",
    location: "Switzerland"
  },
  {
    id: 3,
    title: "Santorini Sunset Tour",
    image: "https://images.unsplash.com/photo-1570077188670-6e249dd5d8e1",
    price: 1899,
    rating: 4.7,
    duration: "7 days",
    location: "Greece"
  }
];

export default function FeaturedPackages() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Packages</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full border hover:bg-gray-100">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full border hover:bg-gray-100">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                  ${pkg.price}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{pkg.title}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm">{pkg.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <span>{pkg.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{pkg.location}</span>
                </div>

                <button className="w-full bg-[#00BFA5] text-white py-2 rounded-lg hover:bg-[#00AB95] transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}