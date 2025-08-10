'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const SlidingPartners: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
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
  
  // Add animation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    let animationId: number;
    let position = 0;
    
    const animate = () => {
      position -= 0.5; // Controls the speed
      
      // Reset position when enough elements have scrolled by
      if (position <= -240) { // Adjust based on logo width + margin
        position = 0;
      }
      
      if (slider) {
        slider.style.transform = `translateX(${position}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Pause animation when hovering
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };
    
    const handleMouseLeave = () => {
      animate();
    };
    
    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationId);
      if (slider) {
        slider.removeEventListener('mouseenter', handleMouseEnter);
        slider.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By Leading Institutions</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We're proud to serve some of the top institutions across Eastern Africa.
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden py-4">
        <div 
          ref={sliderRef}
          className="inline-flex"
        >
          {loopedPartners.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`} 
              className="flex-shrink-0 w-40 md:w-48 h-24 mx-4 bg-white p-4 rounded-lg shadow-sm 
                         flex items-center justify-center relative group overflow-hidden"
            >
              {/* Colorful gradient background that shows on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Logo container */}
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
                  className="filter-none opacity-90 group-hover:opacity-100 transition-all duration-300 
                             transform group-hover:scale-110"
                />
              </div>
              
              {/* Partner name tooltip on hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary text-white text-xs py-1 
                              transform translate-y-full group-hover:translate-y-0 transition-transform 
                              duration-300 text-center font-medium">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingPartners;