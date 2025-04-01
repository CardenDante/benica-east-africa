'use client';

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const TestimonialCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const testimonials = [
    {
      quote: "Benica East Africa has been instrumental in advancing our research capabilities with their top-quality equipment and exceptional support.",
      author: "Dr. James Kimani",
      institution: "JKUAT Research Department"
    },
    {
      quote: "The training and after-sales support from Benica has been exceptional. They've become an essential partner in our healthcare delivery system.",
      author: "Sarah Njeri",
      institution: "Kenyatta National Hospital"
    },
    {
      quote: "Working with Benica has transformed how we approach laboratory equipment procurement. Their expertise and reliability are unmatched.",
      author: "Prof. Daniel Ochieng",
      institution: "Kibabii University"
    }
  ];
  
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [inView, testimonials.length]);
  
  return (
    <div 
      ref={ref}
      className={`bg-gray-50 py-16 transition-all duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover why leading institutions choose Benica East Africa for their scientific and healthcare needs.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 bg-white p-8 rounded-lg shadow-lg transition-all duration-500 flex flex-col items-center text-center ${
                  currentSlide === index 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <svg className="w-12 h-12 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                <div className="mt-auto">
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.institution}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;