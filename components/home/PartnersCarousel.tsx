'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const PartnersCarousel: React.FC = () => {
  const partners = [
    { 
      name: 'JKUAT', 
      logo: '/images/partners/jkuat.png',
      description: 'Jomo Kenyatta University of Agriculture and Technology, a leading research institution in Kenya.'
    },
    { 
      name: 'BIDCO', 
      logo: '/images/partners/bidco.png',
      description: 'BIDCO Africa, a prominent manufacturing company driving innovation in East Africa.'
    },
    { 
      name: 'KIBABII UNIVERSITY', 
      logo: '/images/partners/kibabii.png',
      description: 'Kibabii University, committed to academic excellence and research development.'
    },
    { 
      name: 'KNH', 
      logo: '/images/partners/knh.png',
      description: 'Kenyatta National Hospital, a premier healthcare institution in East Africa.'
    },
    { 
      name: 'KU', 
      logo: '/images/partners/ku.png',
      description: 'University of Nairobi, a key contributor to higher education and research.'
    },
    { 
      name: 'MTRH', 
      logo: '/images/partners/mtrh.png',
      description: 'Moi Teaching and Referral Hospital, a leading healthcare and research center.'
    }
  ];

  const [currentPartner, setCurrentPartner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [partners.length]);

  const handleDotClick = (index: number) => {
    setCurrentPartner(index);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Partners</h2>
          <div className="w-24 h-1 bg-[#F16A23] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Leading institutions across Eastern Africa rely on Benica for their precision research and healthcare supplies.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPartner}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 p-8 bg-gray-50 rounded-xl shadow-md"
            >
              <div className="w-48 h-48 flex items-center justify-center">
                {partners[currentPartner].logo ? (
                  <Image 
                    src={partners[currentPartner].logo}
                    alt={partners[currentPartner].name}
                    width={200}
                    height={200}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="text-2xl font-bold text-gray-700">
                    {partners[currentPartner].name}
                  </div>
                )}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#F16A23] mb-4">
                  {partners[currentPartner].name}
                </h3>
                <p className="text-gray-700 text-lg">
                  {partners[currentPartner].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`
                  w-3 h-3 rounded-full transition-colors duration-300
                  ${currentPartner === index 
                    ? 'bg-[#F16A23]' 
                    : 'bg-gray-300 hover:bg-[#F16A23]/70'}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;