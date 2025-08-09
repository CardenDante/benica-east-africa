'use client';

import { useEffect } from 'react';

export const useDynamicLayout = () => {
  useEffect(() => {
    const adjustMainPadding = () => {
      const topBanner = document.querySelector('[data-top-banner]');
      const header = document.querySelector('header');
      const main = document.querySelector('main');
      
      if (topBanner && header && main) {
        const totalHeight = topBanner.offsetHeight + header.offsetHeight;
        main.style.paddingTop = `${totalHeight + 20}px`; // Add 20px extra spacing
        
        // Update scroll margin for anchor links
        document.documentElement.style.setProperty('--scroll-margin', `${totalHeight + 20}px`);
      }
    };

    // Small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(adjustMainPadding, 100);
    
    // Adjust on resize
    window.addEventListener('resize', adjustMainPadding);
    
    // Clean up
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', adjustMainPadding);
    };
  }, []);
};