import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import PackageCard from './PackageCard';
import { packages } from '../../data/packages';

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
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}