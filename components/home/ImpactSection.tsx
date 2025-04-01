'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedNumber: React.FC<{ 
  value: number; 
  suffix?: string; 
  prefix?: string; 
  duration?: number 
}> = ({ 
  value, 
  suffix = '', 
  prefix = '', 
  duration = 2 
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const startTimestamp = performance.now();
      const step = (timestamp: number) => {
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setDisplayValue(Math.floor(progress * value));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-[#F16A23] mb-2">
        {prefix}{displayValue}{suffix}
      </div>
    </div>
  );
};

const ImpactSection: React.FC = () => {
  const impactData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-[#F16A23]">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      value: 15,
      label: 'Years of Expertise',
      description: 'Continuous innovation and reliable service'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-[#F16A23]">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      value: 600,
      label: 'Products Supplied',
      description: 'Diverse range of precision research supplies'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-[#F16A23]">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.768-.152-1.507-.425-2.19m0 0a8.976 8.976 0 01-1.305-4.81c0-1.59.509-3.05 1.367-4.19m0 0c.967-1.284 1.565-2.844 1.565-4.536 0-3.176-2.456-5.764-5.532-5.979C12.014 2.549 11.517 2 10.911 2H7.5A2.5 2.5 0 005 4.5V20m12 0v-2" />
        </svg>
      ),
      value: 120,
      label: 'Clients Served',
      description: 'Growing network of satisfied research institutions'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <div className="w-24 h-1 bg-[#F16A23] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Empowering scientific advancement through consistent delivery and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>
              <AnimatedNumber value={item.value} />
              <div className="text-xl font-semibold text-gray-800 mb-2">
                {item.label}
              </div>
              <p className="text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;