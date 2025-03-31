import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/home/Hero';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import TrustedPartners from '@/components/home/TrustedPartners';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Benica East Africa Limited - Precision Research & Healthcare Supplies',
  description: 'Your Trusted Partner in Precision Research and Quality Healthcare Supplies across Eastern Africa',
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      
      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Benica East Africa</h2>
              <p className="text-gray-600 mb-6">
                Benica East Africa Limited is an independent medical and research partner specializing 
                in the import and regional distribution of precision research supplies across Eastern Africa.
              </p>
              <p className="text-gray-600 mb-6">
                Since our establishment, we have enabled scientific advancement by reliably delivering 
                critical products to leading pharmaceutical, biotech, research, industrial, educational, 
                and governmental organizations in the region.
              </p>
              <div className="flex space-x-4 mt-8">
                <Link href="/about">
                  <Button variant="primary">Learn More</Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline">Our Products</Button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white text-lg">
                  Company Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-600">Products Available</div>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl font-bold mb-2">100+</div>
              <div className="text-gray-600">Clients Served</div>
            </div>
            <div className="bg-white p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary text-4xl font-bold mb-2">3</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
          </div>
        </div>
      </section>
      
      <TrustedPartners />
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Research & Healthcare Capabilities?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
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
    </>
  );
}