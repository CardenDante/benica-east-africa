import React from 'react';
import Image from 'next/image';

const TrustedPartners: React.FC = () => {
  const partners = [
    { name: 'JKUAT', logo: '/images/partners/jkuat.png' },
    { name: 'BIDCO', logo: '/images/partners/bidco.png' },
    { name: 'KIBABII UNIVERSITY', logo: '/images/partners/kibabii.png' },
    { name: 'KNH', logo: '/images/partners/knh.png' },
    { name: 'KU', logo: '/images/partners/ku.png' },
    { name: 'MTRH', logo: '/images/partners/mtrh.png' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Partners</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Leading institutions across Eastern Africa rely on Benica for their precision research and healthcare supplies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 flex items-center justify-center h-32 transition-all duration-300 hover:shadow-md partner-logo"
            >
              {/* Placeholder for partner logos */}
              <div className="w-full h-full flex items-center justify-center">
                {/* If you have the actual logos, use Image component */}
                {/* <Image 
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={80}
                  className="max-w-full max-h-full object-contain"
                /> */}
                
                {/* Placeholder text until you have the actual logos */}
                <span className="text-gray-700 font-bold text-center">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Join the growing list of institutions that trust Benica East Africa Limited</p>
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 px-8 py-3 rounded-md font-medium">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;

// Add this to your globals.css
/*
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .partner-logo {
    opacity: 0;
    animation: fadeInScale 0.5s ease-out forwards;
    animation-delay: calc(var(--animation-order, 0) * 0.1s);
  }
}
*/