'use client';

import React from 'react';
import Image from 'next/image';

const SlidingPartners: React.FC = () => {
  const partners = [
    { name: 'JKUAT', logo: '/images/partners/jkuat.png' },
    { name: 'BIDCO', logo: '/images/partners/bidco.png' },
    { name: 'KIBABII UNIVERSITY', logo: '/images/partners/kibabi.png' },
    { name: 'KNH', logo: '/images/partners/knh.png' },
    { name: 'KU', logo: '/images/partners/ku.png' },
    { name: 'MTRH', logo: '/images/partners/mtrh.png' },
  ];
  
  // Create a continuous loop by repeating partners multiple times
  const loopedPartners = [...partners, ...partners, ...partners, ...partners];
  
  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By Leading Institutions</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We're proud to serve some of the top institutions across Eastern Africa.
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="partners-slider-container flex">
          {loopedPartners.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`} 
              className="flex-shrink-0 w-40 md:w-48 h-24 mx-4 bg-white p-4 rounded-lg shadow-sm flex items-center justify-center 
                         transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={150}
                  height={80}
                  style={{ 
                    objectFit: 'contain', 
                    objectPosition: 'center',
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingPartners;