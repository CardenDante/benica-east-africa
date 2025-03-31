import React from 'react';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/data/products';
import ProductDetail from '@/components/products/ProductDetail';

interface ProductDetailPageProps {
  params: {
    category: string;
    product: string;
  };
}

export function generateMetadata({ params }: ProductDetailPageProps) {
  const product = getProductById(params.product);
  if (!product) return { title: 'Product Not Found' };
  
  return {
    title: `${product.title} | Benica East Africa Limited`,
    description: product.description,
  };
}

export default function Page({ params }: ProductDetailPageProps) {
  const product = getProductById(params.product);
  
  if (!product) {
    notFound();
  }
  
  return <ProductDetail params={params} />;
}