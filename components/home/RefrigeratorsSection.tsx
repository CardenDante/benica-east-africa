'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Snowflake } from 'lucide-react';

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
      alt: "Ultra-low Temperature Freezer",
      fallback: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&q=80"
    },
    {
      src: "/images/products/refrigerator-2.jpg",
      alt: "Lab Medical Refrigerator",
      fallback: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&q=80"
    },
    {
      src: "/images/products/refrigerator-3.jpg",
      alt: "Blood Bank Refrigerator",
      fallback: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop&q=80"
    },
    {
      src: "/images/products/refrigerator-4.jpg",
      alt: "Chest Freezer",
      fallback: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop&q=80"
    },
    {
      src: "/images/products/refrigerator-5.jpg",
      alt: "Pharmaceutical Refrigerator",
      fallback: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop&q=80"
    }
  ];

  // Auto slide
  useEffect(() => {
    if (!isAutoSliding) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % productImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoSliding, productImages.length]);

  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    setIsAutoSliding(false);

    setTimeout(() => setIsAutoSliding(true), 8000);
  };

  return (
    <section
      ref={ref}
      className={`py-20 bg-gray-50 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text content - show first on mobile, second on desktop */}
          <div className="order-1 lg:order-2">
            

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Refrigerators & Freezers
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We are dedicated to life science research, providing cryogenic solutions and equipment,
              such as ultra-low temperature freezer, lab/medical refrigerator, blood bank refrigerators,
              chest freezers and pharmaceutical refrigerators
            </p>

            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg">
            <a href="/products">
              Explore Refrigerators
            </a>
            </button>
          </div>

          {/* Image slider - show second on mobile, first on desktop */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-80 md:h-96 mb-6 overflow-hidden rounded-xl shadow-xl bg-white">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {productImages.map((image, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0 relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover p-4"
                      priority={index === 0}
                      onError={(e) => {
                        e.currentTarget.src = image.fallback;
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={() =>
                  handleDotClick(
                    (activeSlide - 1 + productImages.length) % productImages.length
                  )
                }
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => handleDotClick((activeSlide + 1) % productImages.length)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? 'bg-primary scale-110 shadow-md'
                      : 'bg-gray-300 hover:bg-primary/50 hover:scale-105'
                  }`}
                  aria-label={`View product ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RefrigeratorsSection;
