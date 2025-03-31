'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="relative flex items-center">
          <div className="relative w-40 h-12">
            {/* Replace with your actual logo */}
            <span className="absolute inset-0 flex items-center text-2xl font-bold text-primary">
              BENICA EA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`font-medium transition-all duration-200 hover:text-primary ${
                isScrolled ? 'text-gray-800' : 'text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <button className="btn-primary">
              Get in Touch
            </button>
          </Link>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-gray-900'}`} 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <div className="text-2xl font-bold text-primary">BENICA EA</div>
            <button 
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <svg 
                className="w-6 h-6 text-gray-800" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="py-4 text-lg font-medium text-gray-800 border-b border-gray-200 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="py-4">
              <button className="w-full btn-primary mt-4">
                Get in Touch
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;