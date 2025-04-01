'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Button from '@/components/ui/Button';

const InteractiveFeature: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const features = [
    {
      title: "Research Equipment",
      description: "Access cutting-edge laboratory and research equipment that meets international standards and enhances your scientific capabilities.",
      image: "/images/heroes/research.jpg",
    },
    {
      title: "Healthcare Supplies",
      description: "Discover our comprehensive range of quality healthcare supplies designed for modern medical facilities across Eastern Africa.",
      image: "/images/heroes/healthcare.avif",
    },
    {
      title: "Training & Support",
      description: "Benefit from our expert installation, training programs, and ongoing technical support to maximize your equipment's potential.",
      image: "/images/heroes/training.jpg",
    }
  ];
  
  return (
    <div 
      ref={ref} 
      className={`bg-white py-16 transition-all duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Solutions</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions tailored to the unique needs of research institutions and healthcare facilities across Eastern Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex border-b border-gray-200 mb-6">
              {features.map((feature, index) => (
                <button 
                  key={index}
                  className={`py-3 px-4 font-medium text-sm sm:text-base transition-colors relative ${
                    activeTab === index 
                      ? 'text-primary' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {feature.title}
                  {activeTab === index && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </button>
              ))}
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">{features[activeTab].title}</h3>
              <p className="text-gray-600 mb-6">{features[activeTab].description}</p>
              <Link href="/products">
                <Button variant="primary">Learn More</Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl transition-all duration-500">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeTab === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Using proper Image component with fill property */}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  className="object-cover"
                  priority={index === 0}
                />
                
                {/* Overlay with gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h4 className="text-white text-xl font-bold">{feature.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeature;