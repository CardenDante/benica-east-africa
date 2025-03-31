'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  category,
  image,
  description,
}) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="relative w-full pt-[75%] bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Placeholder for image */}
          <div className="flex flex-col items-center justify-center w-full h-full bg-gray-200 text-gray-500">
            <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{title}</span>
          </div>
        </div>
        <div className="absolute top-2 left-2 z-10">
          <span className="px-2 py-1 text-xs font-semibold bg-primary text-white rounded-md">
            {category}
          </span>
        </div>
      </div>
      
      <Card.Body className="flex-grow flex flex-col">
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="mt-auto">
          <Link 
            href={`/products/${category.toLowerCase().replace(/ /g, '-')}/${id}`}
            className="inline-block w-full"
          >
            <button 
              className="w-full border-2 border-primary text-primary hover:bg-primary/10 px-4 py-1 rounded-md transition-colors text-sm font-medium"
            >
              Read More →
            </button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;