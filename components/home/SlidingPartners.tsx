'use client';

import React from 'react';

const SlidingPartners: React.FC = () => {
  const partners = [
    { name: 'JKUAT', logo: '/images/partners/jkuat.png' },
    { name: 'BIDCO', logo: '/images/partners/bidco.png' },
    { name: 'KIBABII UNIVERSITY', logo: '/images/partners/kibabii.png' },
    { name: 'KNH', logo: '/images/partners/knh.png' },
    { name: 'KU', logo: '/images/partners/ku.png' },
    { name: 'MTRH', logo: '/images/partners/mtrh.png' },
  ];
  
  // Duplicate the partners for a seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];
  
  return (
    <div className="w-full overflow-hidden bg-gray-50 py-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By Leading Institutions</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We're proud to serve some of the top institutions across Eastern Africa.
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`} 
              className="flex-shrink-0 w-40 md:w-48 h-24 mx-6 bg-white p-4 rounded-lg shadow-sm flex items-center justify-center"
            >
              {/* Replace with actual images when available */}
              <div className="text-center font-bold text-gray-700">{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingPartners;