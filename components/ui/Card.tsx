'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

// Card component
const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Body: React.FC<CardBodyProps>;
  Footer: React.FC<CardFooterProps>;
  Image: React.FC<CardImageProps>;
} = ({
  children,
  className = '',
  elevation = 'md',
  hover = false,
}) => {
  const baseStyles = 'bg-white rounded-lg overflow-hidden';
  
  const elevationStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  };
  
  const hoverStyles = hover 
    ? 'transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1' 
    : '';
  
  return (
    <div className={`${baseStyles} ${elevationStyles[elevation]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

// Define subcomponents
const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={`p-5 border-b border-gray-100 ${className}`}>
    {children}
  </div>
);

const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => (
  <div className={`p-5 ${className}`}>
    {children}
  </div>
);

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
  <div className={`p-5 bg-gray-50 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);

const CardImage: React.FC<CardImageProps> = ({ src, alt, className = '' }) => (
  <div className={`w-full ${className}`}>
    <img src={src} alt={alt} className="w-full h-auto" />
  </div>
);

// Attach subcomponents to Card
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;