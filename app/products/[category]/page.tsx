'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { categories, getProductsByCategory } from '@/lib/data/products';
import ProductsPage from '@/components/products/ProductsPage';

interface ProductCategoryPageProps {
  params: {
    category: string;
  };
}

export default function Page({ params }: ProductCategoryPageProps) {
  const category = categories.find(cat => cat.id === params.category);
  
  if (!category) {
    notFound();
  }
  
  return <ProductsPage initialCategory={params.category} />;
}