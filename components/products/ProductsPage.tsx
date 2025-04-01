'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories, products } from '@/lib/data/products';
import SearchBar from '@/components/ui/SearchBar';
import ProductCard from '@/components/ui/ProductCard';

interface ProductsProps {
  initialCategory?: string;
}

const ProductsPage: React.FC<ProductsProps> = ({ initialCategory = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchQuery]);
  
  const filterProducts = () => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryName = categories.find(cat => cat.id === selectedCategory)?.name;
      filtered = filtered.filter(
        product => product.category.toLowerCase().replace(/ /g, '-') === selectedCategory || 
                  product.category === categoryName
      );
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product => product.title.toLowerCase().includes(query) || 
                  product.description.toLowerCase().includes(query) ||
                  product.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(filtered);
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pb-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0">
                  <Image 
                    src="/images/heroes/default-bg.jpeg" 
                    alt="Contact Us" 
                    fill
                    className="object-cover opacity-20"
                    priority
                  />
                </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl opacity-90 mb-8">
              Discover our comprehensive range of precision research and healthcare supplies
            </p>
            <div className="flex justify-center space-x-2">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-primary">Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <SearchBar 
              onSearch={handleSearch} 
              placeholder="Search products by name, category..."
              className="max-w-lg mx-auto"
            />
          </div>
          
          {/* Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                All Categories
              </button>
              
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              {filteredProducts.length === 0 
                ? 'No products found' 
                : `Showing ${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'}`}
            </p>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500 mb-8">
                We couldn't find any products matching your search criteria. Please try a different search or category.
              </p>
              <button
                className="btn-primary"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our product range extends beyond what's listed here. Contact our team for personalized assistance in finding the perfect solution for your needs.
          </p>
          <Link href="/contact">
            <button className="btn-primary text-lg px-8 py-3">
              Contact Our Team
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;