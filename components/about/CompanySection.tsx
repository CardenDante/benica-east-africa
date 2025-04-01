'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const CompanySection: React.FC = () => {
  // State to track image loading error
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-64 md:h-96">
              {!imageError ? (
                <Image 
                  src="/images/heroes/company-image.png" 
                  alt="Benica East Africa" 
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                  priority // Add priority to ensure quick loading
                />
              ) : (
                // Fallback content if image fails to load
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg 
                      className="w-12 h-12 text-gray-400 mx-auto mb-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                    <p className="text-gray-500">Image not available</p>
                    <p className="text-sm text-gray-400 mt-2">Path: /images/heroes/company-image.jpg</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Company</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-gray-600 mb-6 text-lg">
              Benica East Africa Limited is an independent medical and research partner specializing 
              in the import and regional distribution of precision research supplies across Eastern Africa.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Since our establishment, we have enabled scientific advancement by reliably delivering 
              critical products to leading pharmaceutical, biotech, research, industrial, educational, 
              and governmental organizations in the region.
            </p>
            <p className="text-gray-600 text-lg">
              We are committed to consistently supplying hospitals, clinics, medical professionals, 
              research institutions, laboratories, educational institutions, manufacturers, and 
              individuals with high-quality products throughout Eastern Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;