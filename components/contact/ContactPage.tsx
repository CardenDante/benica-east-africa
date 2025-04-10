'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ui/ContactForm';

const ContactPage: React.FC = () => {
  // State for FAQ accordion
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  
  // FAQ data
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "Benica East Africa Limited serves clients throughout Eastern Africa, with a primary focus on Kenya, Uganda, and neighboring countries."
    },
    {
      question: "Do you provide installation and training?",
      answer: "Yes, our expert engineers offer comprehensive installation services and user training for all equipment we supply, ensuring your team can operate and maintain it with confidence."
    },
    {
      question: "What kind of after-sales support do you offer?",
      answer: "We provide quarterly diagnostic services to ensure the longevity and optimal performance of all equipment we supply. Our technical support team is also available to address any issues that may arise."
    },
    {
      question: "How can I request a product demonstration?",
      answer: "You can request a product demonstration by filling out our contact form, calling our office, or sending us an email. Our team will arrange a suitable time for the demonstration."
    }
  ];
  
  // Toggle FAQ
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pb-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/heroes/default-bg.jpeg" 
            alt="Contact Us" 
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90 mb-8">
              Have questions or need assistance? Our team is here to help.
            </p>
            <div className="flex justify-center space-x-2">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-primary">Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-gray-600 mb-8 text-lg">
                We'd love to hear from you. Please feel free to contact us using the information below or by filling out the contact form.
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-600 text-base">International House Ltd, International House, Mama Ngina St, Nairobi</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone Numbers</h3>
                    <p className="text-gray-600 text-base">+254 723 526 211</p>
                    <p className="text-gray-600 text-base">+254 720 976 613</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Address</h3>
                    <p className="text-gray-600 text-base">info@benicaea.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                    <p className="text-gray-600 text-base">Monday to Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600 text-base">Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="Twitter"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
              Visit our headquarters in Nairobi's Central Business District. We're conveniently located at International House on Mama Ngina Street.
            </p>
          </div>
          
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            {/* Google Maps Embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8198680933097!2d36.818841!3d-1.283332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d16de8d76d%3A0xb85797f364233814!2sInternational%20House%2C%20Mama%20Ngina%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1682912678071!5m2!1sen!2ske" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Benica East Africa Limited Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section - Redesigned with accordion */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
              Find answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                    openFAQ === index ? 'border-primary shadow-md' : 'border-gray-200'
                  }`}
                >
                  <button
                    className={`w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none ${
                      openFAQ === index ? 'bg-primary/5' : 'bg-gray-50'
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className={`text-lg font-semibold ${openFAQ === index ? 'text-primary' : 'text-gray-800'}`}>
                      {faq.question}
                    </h3>
                    <span className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQ === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 py-4">
                      <p className="text-gray-600 text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Take the first step towards advancing your scientific and healthcare capabilities with Benica East Africa Limited.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+254723526211" className="bg-white text-primary hover:bg-opacity-90 px-8 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Call Us Now
            </a>
            <Link href="/products" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;