'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories, products } from '@/lib/data/products';
import SearchBar from '@/components/ui/SearchBar';
import ProductCard from '@/components/ui/ProductCard';
import { ChevronDown, ChevronLeft, ChevronRight, Filter, X } from 'lucide-react';

interface ProductsProps {
  initialCategory?: string;
}

const ProductsPage: React.FC<ProductsProps> = ({ initialCategory = 'all' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  
  // Sort states
  const [sortOption, setSortOption] = useState('newest');
  
  useEffect(() => {
    filterAndSortProducts();
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, searchQuery, sortOption]);
  
  const filterAndSortProducts = () => {
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
    
    // Sort products
    switch (sortOption) {
      case 'name-asc':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'newest':
        // Assuming newer products are at the beginning of the array
        // You might want to add a date field to your products and sort by that
        break;
      case 'oldest':
        // Reverse the array for oldest first
        filtered.reverse();
        break;
      default:
        break;
    }
    
    setFilteredProducts(filtered);
  };
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortOption('newest');
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center items-center space-x-1 mt-12">
        <button 
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        {startPage > 1 && (
          <>
            <button 
              onClick={() => paginate(1)} 
              className={`w-10 h-10 rounded-md ${1 === currentPage ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              1
            </button>
            {startPage > 2 && <span className="text-gray-500">...</span>}
          </>
        )}

        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`w-10 h-10 rounded-md ${number === currentPage ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {number}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="text-gray-500">...</span>}
            <button 
              onClick={() => paginate(totalPages)} 
              className={`w-10 h-10 rounded-md ${totalPages === currentPage ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              {totalPages}
            </button>
          </>
        )}
        
        <button 
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pb-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/heroes/default-bg.jpeg" 
            alt="Products" 
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
          <div className="lg:flex lg:gap-8">
            {/* Mobile Filter Toggle */}
            <div className="block lg:hidden mb-6">
              <button 
                onClick={toggleMobileFilters}
                className="flex items-center justify-center w-full py-3 px-4 border border-gray-300 rounded-md text-gray-700 bg-white shadow-sm hover:bg-gray-50"
              >
                <Filter className="w-5 h-5 mr-2" />
                <span>Filters</span>
                <span className="ml-2 bg-gray-100 text-xs py-1 px-2 rounded-full">
                  {selectedCategory !== 'all' || searchQuery ? '1+' : '0'}
                </span>
              </button>
            </div>
            
            {/* Left Sidebar - Filters */}
            <div className={`
              ${showMobileFilters ? 'fixed inset-0 z-40 block' : 'hidden'} 
              lg:relative lg:block lg:w-64 flex-none
            `}>
              {/* Mobile Filter Overlay */}
              {showMobileFilters && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleMobileFilters}></div>
              )}
              
              {/* Filter Panel */}
              <div className={`
                ${showMobileFilters ? 'fixed right-0 top-0 z-50 h-full w-80 transform translate-x-0' : 'transform -translate-x-full'} 
                transition-transform duration-300 ease-in-out
                lg:static lg:h-auto lg:w-full lg:transform-none
                bg-white p-6 rounded-lg shadow-md lg:shadow-sm border border-gray-200
              `}>
                {/* Mobile Close Button */}
                {showMobileFilters && (
                  <button 
                    className="lg:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={toggleMobileFilters}
                  >
                    <X className="w-6 h-6" />
                  </button>
                )}
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Search</h3>
                  <SearchBar 
                    onSearch={handleSearch} 
                    placeholder="Search products..." 
                    className="w-full"
                  />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
                  <div className="space-y-2">
                    <div 
                      className={`cursor-pointer p-2 rounded-md ${
                        selectedCategory === 'all' 
                          ? 'bg-primary text-white font-medium' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedCategory('all')}
                    >
                      All Categories
                    </div>
                    
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className={`cursor-pointer p-2 rounded-md ${
                          selectedCategory === category.id 
                            ? 'bg-primary text-white font-medium' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <button
                    className="w-full py-2 text-gray-600 hover:text-primary flex items-center justify-center"
                    onClick={handleClearFilters}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Sort and Results Info */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <p className="text-gray-600 mb-4 sm:mb-0">
                  {filteredProducts.length === 0 
                    ? 'No products found' 
                    : `Showing ${Math.min(indexOfFirstProduct + 1, filteredProducts.length)}-${Math.min(indexOfLastProduct, filteredProducts.length)} of ${filteredProducts.length} products`}
                </p>
                
                <div className="w-full sm:w-auto">
                  <div className="relative">
                    <select
                      value={sortOption}
                      onChange={(e) => setSortOption(e.target.value)}
                      className="appearance-none w-full sm:w-48 bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="name-asc">Name (A-Z)</option>
                      <option value="name-desc">Name (Z-A)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Products Grid */}
              {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProducts.map((product) => (
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
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-lg">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">No products found</h3>
                  <p className="text-gray-500 mb-8">
                    We couldn't find any products matching your current filters.
                  </p>
                  <button
                    className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition-colors"
                    onClick={handleClearFilters}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
              
              {/* Pagination */}
              {renderPagination()}
            </div>
          </div>
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