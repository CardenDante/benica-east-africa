'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const pathname = usePathname();
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`flex ${className}`}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        
        return (
          <Link 
            key={link.name} 
            href={link.href}
            className={`relative px-3 py-2 mx-1 font-medium transition-all duration-200 hover:text-primary ${
              isActive 
                ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary' 
                : 'text-gray-800'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;