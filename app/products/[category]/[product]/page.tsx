// app/products/[category]/[product]/page.tsx
import React from 'react';
import ProductDetail from '@/components/products/ProductDetail';
import { getProductById } from '@/lib/data/products';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    category: string;
    product: string;
  };
}

// Metadata generator
export async function generateMetadata({ params }: PageProps) {
  // Pass the params directly without trying to fetch the product here
  return {
    title: `Product Details | Benica`,
    description: 'View our product details',
  };
}

// Page component
export default function Page({ params }: PageProps) {
  // Simply render the ProductDetail component with the params
  // Let ProductDetail handle the data fetching
  return <ProductDetail category={params.category} productId={params.product} />;
}