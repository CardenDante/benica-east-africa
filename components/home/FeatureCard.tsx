'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div 
      ref={ref} 
      className={`bg-white rounded-lg p-6 shadow-lg transform transition-all duration-700 ${
        inView 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay * 150}ms` }}
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;