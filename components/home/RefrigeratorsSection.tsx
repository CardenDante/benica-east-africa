'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const RefrigeratorsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const productImages = [
    {
      src: "/images/products/refrigerator-1.jpg",
      alt: "Ultra-low Temperature Freezer"
    },
    {
      src: "/images/products/refrigerator-2.jpg", 
      alt: "Lab Medical Refrigerator"
    },
    {
      src: "/images/products/refrigerator-3.jpg",
      alt: "Blood Bank Refrigerator"
    },
    {
      src: "/images/products/refrigerator-4.jpg",
      alt: "Chest Freezer"
    },
    {
      src: "/images/products/refrigerator-5.jpg",
      alt: "Pharmaceutical Refrigerator"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoSliding) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % productImages.length);
    }, 5000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoSliding, productImages.length]);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    setIsAutoSliding(false); // Stop auto-sliding when user manually selects
    
    // Resume auto-sliding after 5 seconds
    setTimeout(() => setIsAutoSliding(true), 5000);
  };

  return (
    <div 
      ref={ref} 
      className={`bg-gray-50 py-16 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Product Image Slider */}
          <div className="order-2 lg:order-1 flex flex-col items-center">
            <div className="relative w-full max-w-md h-80 md:h-96 mb-6 overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {productImages.map((image, index) => (
                  <div 
                    key={index}
                    className="w-full h-full flex-shrink-0 relative"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={() => handleDotClick((activeSlide - 1 + productImages.length) % productImages.length)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => handleDotClick((activeSlide + 1) % productImages.length)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200"
                aria-label="Next image"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Navigation dots under the image */}
            <div className="flex space-x-2">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    activeSlide === index 
                      ? 'bg-blue-500 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-105'
                  }`}
                  aria-label={`View product ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Refrigerators & Freezers
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We are dedicated to life science research, providing cryogenic solutions and equipment, such as ultra-low temperature freezer, lab/medical refrigerator, blood bank refrigerators, chest freezers and pharmaceutical refrigerators
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefrigeratorsSection;