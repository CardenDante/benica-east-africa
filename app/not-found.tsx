import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button variant="primary" size="lg">
                Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}