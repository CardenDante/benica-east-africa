'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const PartnersCarousel: React.FC = () => {
  const partners = [
    {
      name: 'CIAT',
      logo: '/images/partners/CIAT.png',
      description: 'International Center for Tropical Agriculture, advancing agricultural research and innovation in East Africa.'
    },
    {
      name: 'ILRI',
      logo: '/images/partners/ilri.png',
      description: 'International Livestock Research Institute, improving lives through innovative livestock research.'
    },
    {
      name: 'KEBS',
      logo: '/images/partners/kebs_logo.png',
      description: 'Kenya Bureau of Standards, ensuring quality standards across all sectors in Kenya.'
    },
    {
      name: 'KEMRI',
      logo: '/images/partners/KEMRI.jpg',
      description: 'Kenya Medical Research Institute, leading medical and health research in East Africa.'
    },
    {
      name: 'KEMSA',
      logo: '/images/partners/kemsa_logo.png',
      description: 'Kenya Medical Supplies Authority, ensuring availability of essential medical supplies nationwide.'
    },
    {
      name: 'KenGen',
      logo: '/images/partners/KenGen.png',
      description: 'Kenya Electricity Generating Company, powering Kenya through sustainable energy solutions.'
    },
    {
      name: 'KEPHIS',
      logo: '/images/partners/Kephis.png',
      description: 'Kenya Plant Health Inspectorate Service, protecting plant health and promoting safe agricultural trade.'
    },
    {
      name: 'KALRO',
      logo: '/images/partners/kalro.png',
      description: 'Kenya Agricultural and Livestock Research Organization, driving agricultural innovation and food security.'
    },
    {
      name: 'NDA Uganda',
      logo: '/images/partners/NDA-Uganda.jpg',
      description: 'National Drug Authority Uganda, regulating and ensuring quality of pharmaceuticals in Uganda.'
    },
    {
      name: 'Neema Uhai',
      logo: '/images/partners/Neema-Uhai.png',
      description: 'Neema Uhai Hospital, providing quality healthcare services with compassion and excellence.'
    },
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
      logo: '/images/partners/kibabi.png',
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
    },
    {
      name: 'Chuka University',
      logo: '/images/partners/Chuka University.jpg',
      description: 'Chuka University, committed to excellence in teaching, research, and community service.'
    },
    {
      name: 'DeKUT',
      logo: '/images/partners/DeKut logo.png',
      description: 'Dedan Kimathi University of Technology, fostering innovation and technological advancement.'
    },
    {
      name: 'Egerton University',
      logo: '/images/partners/Egerton_University_logo.png',
      description: 'Egerton University, a leader in agricultural sciences and research excellence.'
    },
    {
      name: 'Maasai Mara University',
      logo: '/images/partners/Maasai Mara University.png',
      description: 'Maasai Mara University, transforming lives through quality education and research.'
    },
    {
      name: 'Machakos University',
      logo: '/images/partners/Machakos_University_Logo.png',
      description: 'Machakos University, providing transformative education for sustainable development.'
    },
    {
      name: 'Maseno University',
      logo: '/images/partners/Maseno-university logo.jpg',
      description: 'Maseno University, a premier institution of higher learning in Western Kenya.'
    },
    {
      name: 'Meru University',
      logo: '/images/partners/Meru University.png',
      description: 'Meru University of Science and Technology, driving innovation and research in Eastern Kenya.'
    },
    {
      name: 'Moi University',
      logo: '/images/partners/Moi_University_logo.jpg',
      description: 'Moi University, providing world-class education and promoting research excellence.'
    },
    {
      name: 'Rongo University',
      logo: '/images/partners/Rongo University.png',
      description: 'Rongo University, empowering communities through accessible quality education.'
    },
    {
      name: 'Seku University',
      logo: '/images/partners/Seku university logo.jpg',
      description: 'South Eastern Kenya University, nurturing talent and promoting academic excellence.'
    },
    {
      name: 'Taita Taveta University',
      logo: '/images/partners/Taita taveta University logo.jpg',
      description: 'Taita Taveta University, fostering innovation and sustainable development in coastal Kenya.'
    },
    {
      name: 'USIU-Africa',
      logo: '/images/partners/usiu-logo.png',
      description: 'United States International University-Africa, offering world-class American-style education.'
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