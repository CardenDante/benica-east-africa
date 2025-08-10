'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Background decoration - only on desktop */}
      <div className="hidden md:block absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      
      <div className="container-custom relative z-10">
        {/* Mobile Layout - Full width hero */}
        <div className="block md:hidden">
          <div className="relative h-[75vh] overflow-hidden rounded-xl">
            {/* Background Image - Mobile optimized */}
            <div className="absolute inset-0">
              <Image 
                src="/images/heroes/bg-hero.jpg" 
                alt="Hero Background - Laboratory Research" 
                fill 
                className="object-cover"
                sizes="100vw"
                priority
                style={{
                  objectPosition: 'center center',
                }}
              />
              {/* Simple mobile overlay */}
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Mobile Content - Simple and clean */}
            <div className="relative h-full flex items-center justify-center px-6">
              <div className="text-center max-w-md">
                <h1 className="text-5xl font-bold mb-6 text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                  Empowering Science
                  <span className="block text-orange-200 mt-3" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                    Across Eastern Africa
                  </span>
                </h1>
                
                <p className="text-orange-100 mb-10 text-xl leading-relaxed" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.7)' }}>
                  Your Trusted Partner in Precision Research and Quality Healthcare Supplies
                </p>
                
                {/* Simple button row */}
                <div className="flex gap-4 w-full">
                  <Link href="/contact" className="flex-1">
                    <button className="w-full bg-white text-[#F16A23] py-3 px-4 rounded-lg font-semibold text-base shadow-lg">
                      Get Started
                    </button>
                  </Link>
                  <Link href="/products" className="flex-1">
                    <button className="w-full border-2 border-white text-white py-3 px-4 rounded-lg font-semibold text-base shadow-lg">
                      Explore Products
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Card style */}
        <div className="hidden md:block">
          {/* Hero Card */}
          <div className="relative shadow-2xl overflow-hidden rounded-2xl lg:rounded-3xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image 
                src="/images/heroes/bg-hero.jpg" 
                alt="Hero Background - Laboratory Research" 
                fill 
                className="object-cover"
                sizes="(max-width: 1200px) 90vw, 80vw"
                priority
                style={{
                  objectPosition: 'center 30%',
                }}
              />
              {/* Desktop overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            </div>

            {/* Desktop Content */}
            <div className="relative px-6 py-16 sm:py-24 lg:px-12 lg:py-32 xl:py-40">
              <div className="max-w-4xl">
                <h1 className="text-left text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
                  <span className="block text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                    Empowering Science
                  </span>
                  <span className="block text-orange-200" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                    Across Eastern Africa
                  </span>
                </h1>
                
                <p className="text-left mt-6 max-w-3xl text-lg md:text-xl lg:text-2xl text-white mb-8 animate-fade-in-delay" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.7)' }}>
                  Your Trusted Partner in Precision Research and Quality Healthcare Supplies
                </p>
                
                {/* Desktop Buttons - Side by side */}
                <div className="flex flex-row gap-5 animate-fade-in-delay-2">
                  <Link href="/contact">
                    <button className="flex items-center justify-center rounded-lg border border-transparent bg-white px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-semibold text-[#F16A23] shadow-lg hover:bg-orange-50 transition-all duration-200 transform hover:scale-105">
                      Get Started
                    </button>
                  </Link>
                  <Link href="/products">
                    <button className="flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-semibold text-white shadow-lg hover:bg-white/10 transition-all duration-200">
                      Explore Products
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom decorative element */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F16A23] via-orange-400 to-[#F16A23]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;