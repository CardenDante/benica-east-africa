import React from 'react';
import Hero from '@/components/home/Hero';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import InteractiveFeature from '@/components/home/InteractiveFeature';
import RefrigeratorsSection from '@/components/home/RefrigeratorsSection'; // Add this import
import SlidingPartners from '@/components/home/SlidingPartners';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import BlueRayBiotechProducts from '@/components/home/BlueRayBiotechProducts';
// import FeatureStrip from '@/components/home/FeatureStrip';
import CTASection from '@/components/home/CTASection';

export const metadata = {
  title: 'Benica East Africa Limited - Precision Research & Healthcare Supplies',
  description: 'Your Trusted Partner in Precision Research and Quality Healthcare Supplies across Eastern Africa',
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <InteractiveFeature />
      <RefrigeratorsSection /> {/* Add this line */}
      <BlueRayBiotechProducts />
      <SlidingPartners />
      {/* <TestimonialCarousel /> */}
      {/* <FeatureStrip /> */}
      <CTASection />
    </>
  );
}