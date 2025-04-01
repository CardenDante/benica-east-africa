'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProductById, getProductsByCategory } from '@/lib/data/products';
import Button from '@/components/ui/Button';
import { Download, ChevronRight, Check } from 'lucide-react';

interface ProductDetailProps {
  category: string;
  productId: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ category, productId }) => {
  const [product, setProduct] = useState<any>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [showDownloadSuccess, setShowDownloadSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Fetch product data on the client side
  useEffect(() => {
    const fetchData = () => {
      try {
        const productData = getProductById(productId);
        if (productData) {
          setProduct(productData);
          
          // Get related products
          const related = getProductsByCategory(category)
            .filter(p => p.id !== productId)
            .slice(0, 3);
          setRelatedProducts(related);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [category, productId]);
  
  // Loading state
  if (loading) {
    return (
      <div className="container-custom py-20 flex justify-center items-center min-h-[50vh]">
        <div className="animate-pulse text-gray-500">Loading product information...</div>
      </div>
    );
  }
  
  // Handle product not found
  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link href="/products">
          <Button variant="primary">Browse All Products</Button>
        </Link>
      </div>
    );
  }
  
  const handleDownloadBrochure = () => {
    // Create a dummy PDF content (in real app, you would use a real PDF file URL)
    const dummyPdfContent = `
      Product: ${product.title}
      Category: ${product.category}
      Description: ${product.description}
    `;
    
    // Create a Blob from the content
    const blob = new Blob([dummyPdfContent], { type: 'application/pdf' });
    
    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);
    
    // Create a link element
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.id}-brochure.pdf`;
    
    // Append the link to the document, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    URL.revokeObjectURL(url);
    
    // Show success message
    setShowDownloadSuccess(true);
    setTimeout(() => setShowDownloadSuccess(false), 3000);
  };
  
  return (
    <>
      {/* Product Details */}
      <section className="pt-20 pb-16 bg-white">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="pt-6 mb-8">
            <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
              <span>/</span>
              <Link href={`/products/${category}`} className="hover:text-primary transition-colors">
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-gray-700 truncate max-w-[180px] sm:max-w-xs">{product.title}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden relative min-h-[280px] md:min-h-[400px] shadow-sm">
              {/* Replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="text-center px-4">
                  <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="block mt-2 text-gray-500">{product.title}</span>
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="space-y-6">
                <div>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {product.category}
                  </span>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{product.title}</h1>
                </div>
                
                <div className="border-t border-b border-gray-200 py-4">
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold mb-3">Key Features</h2>
                    <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                      {product.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Specifications */}
                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold mb-3">Specifications</h2>
                    <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                      <div className="divide-y divide-gray-200">
                        {Object.entries(product.specifications).map(([key, value]: [string, any], index: number) => (
                          <div key={index} className="flex flex-col sm:flex-row">
                            <div className="w-full sm:w-1/3 px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100">
                              {key}
                            </div>
                            <div className="w-full sm:w-2/3 px-4 py-3 text-sm text-gray-600">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button variant="primary" size="lg" fullWidth className="sm:w-auto">
                      Request Quote
                    </Button>
                  </Link>
                  <div className="relative w-full sm:w-auto">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      fullWidth 
                      className="sm:w-auto"
                      onClick={handleDownloadBrochure}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Brochure
                    </Button>
                    
                    {/* Success message tooltip */}
                    {showDownloadSuccess && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-green-50 text-green-800 text-sm py-1 px-3 rounded-md border border-green-200 shadow-sm w-max">
                        <span className="block">Brochure downloaded!</span>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-green-50 border-r border-b border-green-200"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Related Products</h2>
              <Link 
                href="/products"
                className="text-primary font-medium hover:underline flex items-center text-sm"
              >
                View all products
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md hover:border-gray-200">
                  <div className="relative pt-[60%] bg-gray-100">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400">{relatedProduct.title}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-1">
                      <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">
                        {relatedProduct.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-1">{relatedProduct.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProduct.description}</p>
                    <Link 
                      href={`/products/${category}/${relatedProduct.id}`}
                      className="text-primary font-medium hover:underline inline-flex items-center"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our team of experts is ready to assist you with any questions you may have about this product or our other offerings.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contact Our Team
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;