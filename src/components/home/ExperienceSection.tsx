import React from 'react';

const experiences = [
  {
    id: 1,
    title: 'Fine Dining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    description: 'Discover the best restaurants in town'
  },
  {
    id: 2,
    title: 'Date Night',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70',
    description: 'Perfect spots for romantic evenings'
  },
  {
    id: 3,
    title: 'Casual Dining',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1',
    description: 'Relaxed atmosphere and great food'
  },
  {
    id: 4,
    title: 'Hidden Gems',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    description: 'Unique local experiences'
  }
];

export default function ExperienceSection() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Treat yourself to an award-winning meal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden mb-3">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg">
                  {exp.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}