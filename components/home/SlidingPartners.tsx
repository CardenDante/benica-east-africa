"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const SlidingPartners: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  // We need a ref for a single item to measure its width dynamically
  const itemRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: "CIAT", logo: "/images/partners/CIAT.png" },
    { name: "ILRI", logo: "/images/partners/ilri.png" },
    { name: "KEBS", logo: "/images/partners/kebs_logo.png" },
    { name: "KEMRI", logo: "/images/partners/KEMRI.jpg" },
    { name: "KEMSA", logo: "/images/partners/kemsa_logo.png" },
    { name: "KenGen", logo: "/images/partners/KenGen.png" },
    { name: "KEPHIS", logo: "/images/partners/Kephis.png" },
    { name: "KALRO", logo: "/images/partners/kalro.png" },
    { name: "NDA Uganda", logo: "/images/partners/NDA-Uganda.jpg" },
    { name: "Neema Uhai", logo: "/images/partners/Neema-Uhai.png" },
    { name: "BIDCO", logo: "/images/partners/bidco.png" },
    { name: "JKUAT", logo: "/images/partners/jkuat.png" },
    { name: "KIBABII UNIVERSITY", logo: "/images/partners/kibabi.png" },
    { name: "KNH", logo: "/images/partners/knh.png" },
    { name: "KU", logo: "/images/partners/ku.png" },
    { name: "MTRH", logo: "/images/partners/mtrh.png" },
    { name: "Chuka University", logo: "/images/partners/Chuka University.jpg" },
    { name: "DeKUT", logo: "/images/partners/DeKut logo.png" },
    { name: "Egerton University", logo: "/images/partners/Egerton_University_logo.png" },
    { name: "Maasai Mara University", logo: "/images/partners/Maasai Mara University.png" },
    { name: "Machakos University", logo: "/images/partners/Machakos_University_Logo.png" },
    { name: "Maseno University", logo: "/images/partners/Maseno-university logo.jpg" },
    { name: "Meru University", logo: "/images/partners/Meru University.png" },
    { name: "Moi University", logo: "/images/partners/Moi_University_logo.jpg" },
    { name: "Rongo University", logo: "/images/partners/Rongo University.png" },
    { name: "Seku University", logo: "/images/partners/Seku university logo.jpg" },
    { name: "Taita Taveta University", logo: "/images/partners/Taita taveta University logo.jpg" },
    { name: "USIU-Africa", logo: "/images/partners/usiu-logo.png" },
  ];

  // Create a continuous loop - duplicate partners enough times for seamless scrolling
  const loopedPartners = [...partners, ...partners];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    let position = 0;

    // Function to get the full width of one item including margins
    const getSingleItemWidth = () => {
      if (itemRef.current) {
        // Get width + horizontal margin (mx-4 = 1rem left + 1rem right = 32px approx)
        // Using computed style is safer for accuracy
        const style = window.getComputedStyle(itemRef.current);
        const marginLeft = parseFloat(style.marginLeft);
        const marginRight = parseFloat(style.marginRight);
        return itemRef.current.offsetWidth + marginLeft + marginRight;
      }
      return 280; // Fallback (larger to account for card + margins)
    };

    // Wait a moment for DOM to fully render before measuring
    setTimeout(() => {
      let itemWidth = getSingleItemWidth();
      // Calculate the total width of one complete set of partners (all 28)
      let totalSetWidth = itemWidth * partners.length;

      console.log('Item width:', itemWidth, 'Total partners:', partners.length, 'Total set width:', totalSetWidth);

      // Update width on resize
      const handleResize = () => {
        itemWidth = getSingleItemWidth();
        totalSetWidth = itemWidth * partners.length;
      };
      window.addEventListener("resize", handleResize);

      const animate = () => {
        position -= 1.2; // Controls the speed (increased from 0.5 to 1.2 for faster sliding)

        // Reset position when we've scrolled through one complete set of partners
        // This creates a seamless loop without visible jumps
        if (position <= -totalSetWidth) {
          position = 0;
        }

        if (slider) {
          slider.style.transform = `translateX(${position}px)`;
        }

        animationId = requestAnimationFrame(animate);
      };

      animate();

      const handleMouseEnter = () => cancelAnimationFrame(animationId);
      const handleMouseLeave = () => animate();

      slider.addEventListener("mouseenter", handleMouseEnter);
      slider.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup function
      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", handleResize);
        if (slider) {
          slider.removeEventListener("mouseenter", handleMouseEnter);
          slider.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }, 100);
  }, [partners.length]);

  return (
    <div className="w-full overflow-hidden bg-white py-8 sm:py-12">
      <div className="mb-8 sm:mb-10 text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">
          Trusted By Leading Institutions
        </h2>
        <div className="w-12 sm:w-16 md:w-24 h-1 bg-[#F16A23] mx-auto mb-3 sm:mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          We're proud to serve some of the top institutions across Eastern Africa
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div ref={sliderRef} className="inline-flex items-center">
          {loopedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              // Assign ref to the first item only to measure width
              ref={index === 0 ? itemRef : null}
              // MUCH LARGER on mobile for visibility
              className="flex-shrink-0 w-52 sm:w-56 md:w-60 lg:w-64 h-44 sm:h-48 md:h-52 mx-4 sm:mx-5 bg-white p-4 sm:p-5 md:p-6 rounded-2xl shadow-lg border border-gray-200
                         flex flex-col items-center justify-center relative group hover:shadow-xl transition-all duration-300"
            >
              {/* Logo Container - Much bigger, takes most of card */}
              <div className="relative w-full h-28 sm:h-32 md:h-36 flex items-center justify-center mb-3">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, 240px"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  className="filter-none opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>

              {/* Partner Name - Larger and more visible */}
              <div className="w-full text-center border-t border-gray-200 pt-3">
                <p className="text-[#F16A23] text-sm sm:text-base md:text-lg font-bold truncate">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingPartners;
