'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
          {/* Background Image */}
          <div className="w-full h-full relative">
            <Image 
              src="/images/heroes/bg-hero.jpg" 
              alt="Hero Background" 
              fill 
              className="object-cover"
              sizes="100vw"
              priority
              style={{
                objectPosition: 'center 30%', // Adjust this value to control vertical positioning
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                minWidth: '100%'
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Empowering Science Across Eastern Africa
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-200 mb-8 animate-fade-in-delay">
            Your Trusted Partner in Precision Research and Quality Healthcare Supplies
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
            <Link href="/contact" className="inline-block">
              <button className="btn-primary text-lg px-8 py-3">
                Contact Us
              </button>
            </Link>
            <Link href="/products" className="inline-block">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md transition duration-200 text-lg">
                Explore Products
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;