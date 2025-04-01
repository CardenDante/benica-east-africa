'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Research & Healthcare Capabilities?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Connect with us today and discover how our precision supplies and services can empower your scientific advancement.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/products">
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto"
            >
              Browse Products
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-white border-white hover:bg-white/20"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;