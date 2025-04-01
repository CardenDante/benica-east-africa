'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="relative flex items-center z-10">
          <div className="relative w-40 h-12">
            <Image 
              src="/images/banicaea-logo.png" 
              alt="BENICA EA Logo" 
              fill
              sizes="(max-width: 768px) 160px, 160px"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`font-medium transition-all duration-200 hover:text-primary relative text-gray-800 ${
                isActive(link.href) ? 'text-primary font-semibold' : ''
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </Link>
          ))}
          <Link href="/contact">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-md transition duration-200 shadow-md">
              Get in Touch
            </button>
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button 
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-10 focus:outline-none ${
            isOpen ? 'transform -rotate-90' : ''
          } transition-transform duration-300`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transform transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 my-1 transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transform transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Mobile Menu Panel */}
        <div 
          className={`md:hidden fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-50 shadow-xl transition-transform duration-500 ease-in-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8">
              <div className="relative w-32 h-10">
                <Image 
                  src="/images/banicaea-logo.png" 
                  alt="BENICA EA Logo" 
                  fill
                  sizes="(max-width: 768px) 160px, 160px"  // Consistent sizes
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
            
            <nav className="flex-grow">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className={`group flex items-center py-3 px-4 text-lg font-medium rounded-lg transition-all duration-200 ${
                        isActive(link.href) 
                          ? 'text-primary bg-primary/5' 
                          : 'text-gray-800 hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      <span className="relative overflow-hidden">
                        {link.name}
                        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                          isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        } origin-left`}></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="mt-auto pt-6 border-t border-gray-200">
              <Link href="/contact" className="block">
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-center font-bold rounded-md transition duration-200">
                  Get in Touch
                </button>
              </Link>
              
              <div className="mt-8 flex justify-center space-x-6">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-500 hover:text-primary transition-colors"
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
                  className="text-gray-500 hover:text-primary transition-colors"
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
                  className="text-gray-500 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;