import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pb-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20" style={{ 
          backgroundImage: 'url("/images/pattern.png")', 
          backgroundSize: '100px' 
        }} />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl opacity-90 mb-8">
              Your Trusted Partner in Precision Research and Healthcare Supplies
            </p>
            <div className="flex justify-center space-x-2">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-primary">About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-xl h-96">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white text-lg">
                  Company Image
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Company</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-gray-600 mb-6">
                Benica East Africa Limited is an independent medical and research partner specializing 
                in the import and regional distribution of precision research supplies across Eastern Africa.
              </p>
              <p className="text-gray-600 mb-6">
                Since our establishment, we have enabled scientific advancement by reliably delivering 
                critical products to leading pharmaceutical, biotech, research, industrial, educational, 
                and governmental organizations in the region.
              </p>
              <p className="text-gray-600">
                We are committed to consistently supplying hospitals, clinics, medical professionals, 
                research institutions, laboratories, educational institutions, manufacturers, and 
                individuals with high-quality products throughout Eastern Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl text-primary mb-8">
              <svg className="w-20 h-20 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
                <path d="M12 8v8m-4-4h8" />
              </svg>
            </div>
            <p className="text-2xl font-bold mb-6 text-gray-800">
              To enable the advancement of science throughout the region.
            </p>
            <p className="text-gray-600 text-lg">
              We believe in providing access to high-quality scientific and medical equipment 
              that empowers researchers, healthcare professionals, and institutions to achieve 
              breakthrough discoveries and deliver exceptional care.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Our core values guide everything we do as we work to empower scientific advancement across Eastern Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                We ensure all products meet rigorous standards for performance, reliability, and safety.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek out the latest advancements in scientific and medical equipment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Partnership</h3>
              <p className="text-gray-600">
                We build lasting relationships with our clients, serving as trusted advisors rather than just suppliers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We consistently deliver on our promises with timely service and responsive support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Regional Expertise</h3>
              <p className="text-gray-600">
                We understand the unique challenges and opportunities in Eastern Africa's scientific landscape.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary text-4xl mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Solutions</h3>
              <p className="text-gray-600">
                We provide end-to-end service from initial consultation to training and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Branches */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Branches</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              We maintain strategic locations across Eastern Africa to better serve our clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Branch
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Contacts
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Kenya Branch
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Mama Ngina Street, Nairobi
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      +254 723 526 211, +254 780 003 652
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Uganda Branch
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Kampala, Uganda
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      +254 723 526 211, +254 780 003 652
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Email
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" colSpan={2}>
                      info@benicaea.com
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us Today</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join the growing list of institutions that rely on Benica East Africa Limited for their precision research and healthcare supplies.
          </p>
          <Link href="/contact">
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-10"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;