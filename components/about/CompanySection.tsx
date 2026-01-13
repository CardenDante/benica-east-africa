'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const CompanySection: React.FC = () => {
  // State to track image loading error
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4"> {/* Ensure standard container class */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Column - Order 2 on mobile, 1 on desktop */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            {/* KEY FIX: 
                1. aspect-[3/4] forces a portrait rectangle shape.
                2. max-w-md prevents it from getting too huge on wide screens.
            */}
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              {!imageError ? (
                <Image
                  src="/benica-team.jpeg"
                  alt="Benica East Africa Team"
                  fill
                  /* KEY FIX: 
                     object-top ensures heads are never cropped off.
                  */
                  className="object-cover object-top"
                  onError={() => setImageError(true)}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center border border-gray-200">
                  <div className="text-center p-4">
                    <svg
                      className="w-16 h-16 text-gray-300 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-400 font-medium">Team photo not available</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Text Column - Order 1 on mobile, 2 on desktop */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Company</h2>
              <div className="w-24 h-1.5 bg-orange-500 mb-8 rounded-full"></div> {/* Adjusted to match image branding */}
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Benica East Africa Limited is an independent medical and research partner specializing 
                  in the import and regional distribution of precision research supplies across Eastern Africa.
                </p>
                <p>
                  Since our establishment, we have enabled scientific advancement by reliably delivering 
                  critical products to leading pharmaceutical, biotech, research, industrial, educational, 
                  and governmental organizations in the region.
                </p>
                <p>
                  We are committed to consistently supplying hospitals, clinics, medical professionals, 
                  research institutions, laboratories, educational institutions, manufacturers, and 
                  individuals with high-quality products throughout Eastern Africa.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanySection;