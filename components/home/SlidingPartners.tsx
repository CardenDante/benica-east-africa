"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const SlidingPartners: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  // We need a ref for a single item to measure its width dynamically
  const itemRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: "JKUAT", logo: "/images/partners/jkuat.png" },
    { name: "BIDCO", logo: "/images/partners/bidco.png" },
    { name: "KIBABII UNIVERSITY", logo: "/images/partners/kibabi.png" },
    { name: "KNH", logo: "/images/partners/knh.png" },
    { name: "KU", logo: "/images/partners/ku.png" },
    { name: "MTRH", logo: "/images/partners/mtrh.png" },
  ];

  // Create a continuous loop
  const loopedPartners = [...partners, ...partners, ...partners, ...partners];

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
      return 240; // Fallback
    };

    let itemWidth = getSingleItemWidth();

    // Update width on resize
    const handleResize = () => {
      itemWidth = getSingleItemWidth();
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      position -= 0.5; // Controls the speed

      // Reset position based on dynamic item width to prevent jumping
      if (position <= -itemWidth) {
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

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      if (slider) {
        slider.removeEventListener("mouseenter", handleMouseEnter);
        slider.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="mb-10 text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Trusted By Leading Institutions
        </h2>
        <div className="w-16 md:w-24 h-1 bg-[#F16A23] mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          We're proud to serve some of the top institutions across Eastern
          Africa.
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div ref={sliderRef} className="inline-flex items-center">
          {loopedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              // Assign ref to the first item only to measure width
              ref={index === 0 ? itemRef : null}
              // RESPONSIVE SIZING: w-36 on mobile, w-48 on desktop
              className="flex-shrink-0 w-36 md:w-48 h-32 md:h-40 mx-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100
                         flex flex-col items-center justify-between relative group hover:shadow-md transition-shadow duration-300"
            >
              {/* Logo Container - Takes up top portion */}
              <div className="relative w-full h-16 md:h-20 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 768px) 100px, 150px"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  className="filter-none opacity-90 group-hover:opacity-100 transition-all duration-300"
                />
              </div>

              {/* Partner Name - Always Visible */}
              <div className="w-full text-center mt-2 border-t border-gray-100 pt-2">
                <p className="text-[#F16A23] text-xs md:text-sm font-bold truncate">
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
