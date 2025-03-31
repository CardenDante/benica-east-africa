import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProductById, getProductsByCategory } from '@/lib/data/products';
import Button from '@/components/ui/Button';

interface ProductDetailProps {
  params: {
    category: string;
    product: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
  const product = getProductById(params.product);
  
  if (!product) {
    return null; // This should never happen as we check in the page component
  }
  
  // Get related products from the same category
  const relatedProducts = getProductsByCategory(params.category)
    .filter(p => p.id !== product.id)
    .slice(0, 3);
  
  return (
    <>
      {/* Product Details */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
              <span>/</span>
              <Link href={`/products/${params.category}`} className="hover:text-primary transition-colors">
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-gray-700">{product.title}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden relative min-h-96">
              {/* Replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="block mt-2 text-gray-500">{product.title}</span>
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
              
              <div className="border-t border-b border-gray-200 py-4 my-6">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Specifications */}
              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Specifications</h2>
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <div className="divide-y divide-gray-200">
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <div key={index} className="flex">
                          <div className="w-1/3 px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100">
                            {key}
                          </div>
                          <div className="w-2/3 px-4 py-3 text-sm text-gray-600">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/contact">
                  <Button variant="primary" size="lg" fullWidth className="sm:w-auto">
                    Request Quote
                  </Button>
                </Link>
                <Button variant="outline" size="lg" fullWidth className="sm:w-auto">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative pt-[70%] bg-gray-100">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400">{relatedProduct.title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{relatedProduct.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProduct.description}</p>
                    <Link 
                      href={`/products/${params.category}/${relatedProduct.id}`}
                      className="text-primary font-medium hover:underline inline-flex items-center"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
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